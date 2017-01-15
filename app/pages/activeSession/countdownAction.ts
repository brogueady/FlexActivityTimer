import {TimedActivity} from "../../shared/scheduler/timedActivity";

export class CountdownAction {
    timePeriod: number;
    timedActivity: TimedActivity;

    constructor(timePeriod: number, activity:TimedActivity=null) {
        this.timePeriod = timePeriod;
        this.timedActivity = activity;
    }

    isRestPeriod() {
        return this.timedActivity==null;
    }        
}