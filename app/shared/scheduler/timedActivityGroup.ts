import {TimedActivity} from "../../shared/scheduler/timedActivity";

export class TimedActivityGroup {
    timedActivities: TimedActivity[];
    restPeriodAfterGroupInSecs: number;
    repeat: number;

    constructor(timedActivities: TimedActivity[],
                restPeriodAfterGroupInSecs: number,
                repeat: number
    ) {
        this.timedActivities = timedActivities;
        this.restPeriodAfterGroupInSecs = restPeriodAfterGroupInSecs;
        this.repeat = repeat;
    }
    
}