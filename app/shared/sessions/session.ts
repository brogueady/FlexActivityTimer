import {TimedActivityGroup} from '../../shared/scheduler/TimedActivityGroup';

export class Session {
    id:string;
    name: string;
    description: String;
    timedActivityGroups: TimedActivityGroup[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    setTimedActivityGroups(timedActivityGroups) {
        this.timedActivityGroups = timedActivityGroups;
    }

    getTime() {
        return "(30 mins)";
    }
}