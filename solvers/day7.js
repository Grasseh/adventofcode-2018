class Solver{
    constructor(){
        this.workerCount = 5;
        this.baseTime = 60;
        this.notDone = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    }

    solveA(input){
        return new Promise(resolve => {
            let operations = input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine);
            let graph = this.createGraph(operations);
            resolve(this.navigateGraph(graph));
        });
    }

    solveB(input){
        return new Promise((resolve) => {
            let operations = input
                .slice(0, -1)
                .split('\n')
                .map(this.parseLine);
            let graph = this.createGraph(operations);
            resolve(this.processGraph(graph));
        });
    }

    parseLine(line){
        let expr = /Step (.) must be finished before step (.) can begin./;
        let matches = line.match(expr);
        return {
            step1 : matches[1],
            step2 : matches[2],
        };
    }

    createGraph(operations){
        let graph = {};
        for(let op of operations){
            if(!graph[op.step1]){
                graph[op.step1] = this.createNode(op.step1);
            }
            if(!graph[op.step2]){
                graph[op.step2] = this.createNode(op.step2);
            }
            graph[op.step1].successors.push(op.step2);
            graph[op.step2].predecessors.push(op.step1);
        }
        return graph;
    }

    navigateGraph(graph){
        let visited = [];
        let available = this.findFirstNodes(graph);
        while(available.length > 0){
            let visiting = String.fromCharCode(Math.min.apply(Math, available.map(o => o.charCodeAt(0))));
            visited.push(visiting);
            for(let linked of graph[visiting].successors){
                if(!(visited.includes(linked)) && !(available.includes(linked))){
                    if(graph[linked].predecessors.every(x => visited.includes(x)))
                        available.push(linked);
                }
            }
            available = available.filter(x => x !== visiting);
        }
        return visited.join('');
    }

    processGraph(graph){
        let visited = [];
        let available = this.findFirstNodes(graph);
        let notDone = this.notDone;
        let time = 0;
        let workers = Array(this.workerCount);
        for(let i = 0; i < this.workerCount; i++){
            workers[i] = {
                timeLeft : 0,
                currentlyWorking : '.'
            };
        }
        while(notDone.length > 0){
            let toPush = [];
            for(let worker of workers){
                if(available.length > 0 && worker.currentlyWorking === '.'){
                    let visiting = String.fromCharCode(Math.min.apply(Math, available.map(o => o.charCodeAt(0))));
                    worker.currentlyWorking = visiting;
                    worker.timeLeft = this.baseTime + visiting.charCodeAt(0) - 64;
                    available = available.filter(x => x !== visiting);
                }
                worker.timeLeft--;
                if(worker.timeLeft === 0){
                    let doneTask = worker.currentlyWorking;
                    notDone = notDone.filter(x => x !== doneTask);
                    visited.push(doneTask);
                    worker.currentlyWorking = '.';
                    for(let linked of graph[doneTask].successors){
                        if(!(visited.includes(linked)) && !(available.includes(linked))){
                            if(graph[linked].predecessors.every(x => visited.includes(x))){
                                toPush.push(linked);
                            }
                        }
                    }
                }
            }
            for(let tp of toPush){
                available.push(tp);
            }
            time++;
        }
        return time;
    }

    findFirstNodes(graph){
        return Object.values(graph).filter(x => x.predecessors.length === 0).map(x => x.letter);
    }

    createNode(letter){
        return {
            letter : letter,
            successors : [],
            predecessors : []
        };
    }

}

module.exports = Solver;
