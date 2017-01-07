import {Session} from "../../shared/sessions/session";
import {Injectable} from "@angular/core";
import {Activity} from "../../shared/activity/activity";
import {TimedActivity} from "../../shared/scheduler/timedActivity";
import {TimedActivityGroup} from "../../shared/scheduler/timedActivityGroup";

@Injectable()
export class SessionService {
    
    getSessions() {
        let sessions = [];
        let activity1: Activity = new Activity("Forearm Plank", "Assume the press-up position but rest on your forearms. Hold this position");
        let activity2: Activity = new Activity("Left Side Plank", "Assume the side press-up position but rest on your left forearm. Hold this position");
        let timedActivity1: TimedActivity = new TimedActivity(5, 10, activity1, 1);
        let timedActivity2: TimedActivity = new TimedActivity(11, 20, activity2, 2);
        let timedActivityGroup1: TimedActivityGroup = new TimedActivityGroup([timedActivity1, timedActivity2], 4, 2);
        let session: Session = new Session("Abs Workout 1", "");
        session.setTimedActivityGroups(TimedActivityGroup);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        sessions.push(session);
        return sessions;
    }
}