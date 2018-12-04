class Solver{
    solveA(input){
        return new Promise(resolve => {
            this.setupState(input);
            let mostMinutesTotal = Math.max(...this.state.guards);
            let guardNumber = this.state.guards.indexOf(mostMinutesTotal);
            let biggestMinuteTotal = Math.max(...this.state.minutes[guardNumber]);
            let minuteNumber = this.state.minutes[guardNumber].indexOf(biggestMinuteTotal);
            resolve(guardNumber * minuteNumber);
        });
    }

    solveB(input){
        return new Promise((resolve) => {
            this.setupState(input);
            let biggestMinute = 0;
            let guardNumber = 0;
            let minuteNumber = 0;
            for(let i = 0; i <= this.state.minutes.length; i++){
                if(!this.state.minutes[i])
                    continue;
                for(let j = 0; j <= this.state.minutes[i].length; j++){
                    let val = this.state.minutes[i][j];
                    if(val > biggestMinute){
                        biggestMinute = val;
                        guardNumber = i;
                        minuteNumber = j;
                    }
                }
            }
            resolve(guardNumber * minuteNumber);
        });
    }

    setupState(input){
        let parsed = input
            .slice(0, -1)
            .split('\n')
            .map(this.parseLine)
            .sort(this.sortTimes);
        let state = {
            minutes : this.createMinutes(),
            guards : Array(10000).fill(0),
            id : 0,
            day : 0,
            startSleep : 0
        };
        for(let line of parsed){
            if(line.type === 'shift'){
                state.id = line.id;
            }
            if(line.type === 'sleep'){
                state.day = line.day;
                state.startSleep = line.minute;
            }
            if(line.type === 'wake'){
                for(let i = state.startSleep; i < line.minute; i++){
                    state.minutes[state.id][i]++;
                }
                state.guards[state.id] = (state.guards[state.id] || 0) + line.minute - state.startSleep;
            }
        }
        this.state = state;
    }

    createMinutes(){
        let minutes = Array(10000);
        for(let i = 0; i < 10000; i++){
            minutes[i] = Array(61).fill(0);
        }
        return minutes;
    }

    parseLine(line){
        let expr = /\[\d{4}-(\d{2})-(\d{2}) (\d{2}):(\d{2})] (.+)/;
        let matches = line.match(expr);
        let object = {
            month : parseInt(matches[1]),
            day : parseInt(matches[2]),
            hour : parseInt(matches[3]),
            minute : parseInt(matches[4]),
            type : 'undef'
        };
        let guardExp = /Guard #(\d+) begins shift/;
        let sleepExp = /falls asleep/;
        //let wakeExp = /wakes up/;
        let guardMatch = matches[5].match(guardExp);
        if(guardMatch){
            object.type = 'shift';
            object.id = guardMatch[1];
            return object;
        }
        if(matches[5].match(sleepExp)){
            object.type = 'sleep';
            return object;
        }
        object.type = 'wake';
        return object;
    }

    sortTimes(a, b){
        if(a.month < b.month)
            return -1;
        if(a.month > b.month)
            return 1;
        if(a.day < b.day)
            return -1;
        if(a.day > b.day)
            return 1;
        if(a.hour < b.hour)
            return -1;
        if(a.hour > b.hour)
            return 1;
        if(a.minute < b.minute)
            return -1;
        if(a.minute > b.minute)
            return 1;
        return 0;
    }

}

module.exports = Solver;
