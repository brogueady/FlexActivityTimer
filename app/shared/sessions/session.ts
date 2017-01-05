import {TimedActivityGroup} from 'shared/scheduler/TimedActivityGroup';

export class Session {
    id:string;
    name: string;
    description: String;
    timedActitiyGroups: TimedActivityGroup[];

    constructor(name: string) {
        this.name = name;
    }

}