import {TimedActivityGroup} from '../../shared/scheduler/TimedActivityGroup';
import {Activity} from '../../shared/activity/activity';


export class Session {
    id:string;
    name: string;
    description: String;
    timedActivityGroups: Array<TimedActivityGroup>;
    activeTimedActivityGroup: TimedActivityGroup;
    activeTimedActivityGroupsIndex: number;

    constructor(name: string, description: string, id: string) {
        this.name = name;
        this.description = description;
        this.id = id;
    }

    setTimedActivityGroups(timedActivityGroups) {
        this.timedActivityGroups = timedActivityGroups;
    }

    getTime() {
        return "(30 mins)";
    }

    start() {
        console.log("started sessions");
        this.activeTimedActivityGroupsIndex=0;
        this.activeTimedActivityGroup = this.timedActivityGroups[this.activeTimedActivityGroupsIndex];
    }

    hasMoreActivities() {
        if (!this.activeTimedActivityGroup.hasMoreActivities()) {
            if (this.activeTimedActivityGroupsIndex+1 >= this.timedActivityGroups.length ) {
                return false;
            }
        }

        return true;
    }

    nextActivity() {
        let activity: Activity = this.activeTimedActivityGroup.nextActivity();
        if (activity==null) {
            this.activeTimedActivityGroup = this.timedActivityGroups[++this.activeTimedActivityGroupsIndex];
            activity = this.activeTimedActivityGroup.nextActivity();
        }

        return activity;
    }
}