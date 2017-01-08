import {Activity} from "../../shared/activity/activity";

export class TimedActivity {
    restPeriodInSecs: number;
    workPeriodInSecs: number;
    activity: Activity;
    repeat: number;

    constructor(restPeriodInSecs: number,
                workPeriodInSecs: number,
                activity: Activity,
                repeat: number
    ) {
        this.activity = activity;
        this.workPeriodInSecs = workPeriodInSecs;
        this.restPeriodInSecs = restPeriodInSecs;
        this.repeat = repeat;
    }

}