import {Session} from "../../shared/sessions/session";
import {Injectable} from "@angular/core";
import {Activity} from "../../shared/activity/activity";
import {TimedActivity} from "../../shared/scheduler/timedActivity";
import {TimedActivityGroup} from "../../shared/scheduler/timedActivityGroup";
import {Guid} from "../utils/guid";

@Injectable()
export class SessionService {
    sessions: Array<Session>;

    ngOnInit() {
        
    }

    constructor(private guid: Guid) {
        this.loadSessions();
    }

    loadSessions() {
        this.sessions = [];
        let activity1: Activity = new Activity("Forearm Plank", "Assume the press-up position but rest on your forearms. Hold this position");
        let activity2: Activity = new Activity("Left Side Plank", "Assume the side press-up position but rest on your left forearm. Hold this position");
        let activity3: Activity = new Activity("Sit Ups", "Assume the side press-up position but rest on your left forearm. Hold this position");
        let timedActivity1: TimedActivity = new TimedActivity(5, 10, activity1, 1);
        let timedActivity2: TimedActivity = new TimedActivity(11, 20, activity2, 2);
        let timedActivity3: TimedActivity = new TimedActivity(15, 30, activity3, 5);

        let timedActivityGroup1: TimedActivityGroup = new TimedActivityGroup([timedActivity1, timedActivity2], 4, 2);
        let timedActivityGroup2: TimedActivityGroup = new TimedActivityGroup([timedActivity1, timedActivity2, timedActivity3], 1, 5);

        let session: Session = this.createSession("Abs Workout 1", "description blah blah blha blah");
        let session2: Session = this.createSession("Abs Workout 2", "description blah blah blha blah");
        session.setTimedActivityGroups([timedActivityGroup1]);
        session2.setTimedActivityGroups([timedActivityGroup1, timedActivityGroup2]);
        this.sessions.push(session);
        this.sessions.push(session2);
        this.sessions.push(session);
        this.sessions.push(session2);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
        this.sessions.push(session);
    }

    getSession(id:string) {
        console.log("finding session with id: " + id);
        return this.sessions.filter(session => session.id === id)[0];
    }

    getSessions() {
        return this.sessions;
    }

    createSession(name: string, description: string) {
        return new Session(name, description, this.guid.guid());
    }
}