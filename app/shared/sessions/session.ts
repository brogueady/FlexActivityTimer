import {TimedActivityGroup} from '../../shared/scheduler/TimedActivityGroup';
import {Activity} from '../../shared/activity/activity';
import {BodyZones} from '../../shared/bodyZones/BodyZones';

export class Session {
    id:string;
    name: string;
    description: String;
    bodyZones: Array<BodyZones>;
    timedActivityGroups: Array<TimedActivityGroup>;
    activeTimedActivityGroup: TimedActivityGroup;
    activeTimedActivityGroupsIndex: number;

    constructor(name: string, description: string, id: string, bodyZones: Array<BodyZones>) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.bodyZones = bodyZones;
    }

    setTimedActivityGroups(timedActivityGroups) {
        this.timedActivityGroups = timedActivityGroups;
    }

    getTime() {
        return "(30 mins)";
    }

    hasMoreGroups() {
        if (this.timedActivityGroups.length >= this.activeTimedActivityGroupsIndex+1 ) {
            console.log("session does have more groups");
            return true;
        }
        console.log("session does NOT have more groups");
        return false;
    }

    nextGroup() {
        console.log("getting group " + this.activeTimedActivityGroupsIndex);
        return this.timedActivityGroups[this.activeTimedActivityGroupsIndex++];
    }
}