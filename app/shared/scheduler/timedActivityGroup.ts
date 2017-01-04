import {TimedActivity} from "./shared/scheduler/timedActivity";

export class TimedActivityGroup {
    timedActivies: TimedActivity[];
    restPeriodAfterGroupInSecs: number;
    repeat: number;
}