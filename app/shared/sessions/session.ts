import {TimedActivityGroup} from '../../shared/scheduler/TimedActivityGroup';

export class Session {
    id:string;
    name: string;
    description: String;
    timedActivityGroups: Array<TimedActivityGroup>;

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
}