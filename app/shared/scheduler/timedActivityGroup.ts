import { TimedActivity } from "../../shared/scheduler/timedActivity";

export class TimedActivityGroup {
    timedActivities: TimedActivity[];
    restPeriodAfterGroupInSecs: number;
    repeat: number;
    activeActivityIndex = 0;

    constructor(timedActivities: TimedActivity[],
        restPeriodAfterGroupInSecs: number,
        repeat: number
    ) {
        this.timedActivities = timedActivities;
        this.restPeriodAfterGroupInSecs = restPeriodAfterGroupInSecs;
        this.repeat = repeat;
    }

    hasMoreActivities() {
        if (this.timedActivities.length > this.activeActivityIndex) {
            console.log("group has more activities");
            return true;
        }

        console.log("group does NOT have more activities");
        return false;

    }

    nextActivity() {
        console.log("getting activity " + this.activeActivityIndex + ", name: " + this.timedActivities[this.activeActivityIndex].activity.name);
        return this.timedActivities[this.activeActivityIndex++];
    }
}