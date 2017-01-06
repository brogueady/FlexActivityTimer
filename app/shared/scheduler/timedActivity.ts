import {Activity} from "../../shared/activity/activity";

export class TimedActivity {
    restPeriodInSecs: number;
    workPeriodInSecs: number;
    activity: Activity;
    repeat: number;
}