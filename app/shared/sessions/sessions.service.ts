import {Session} from "./shared/sessions/session";

export class SessionService {
    
    getSessions() {
        let sessions = [];
        sessions.push(new Session("Abs1"));
        sessions.push(new Session("Abs2"));
        sessions.push(new Session("Abs3"));

    }
}