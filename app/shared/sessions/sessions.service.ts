import {Session} from "../../shared/sessions/session";
import {Injectable} from "@angular/core";

@Injectable()
export class SessionService {
    
    getSessions() {
        let sessions = [];
        sessions.push(new Session("Abs1", ""));
        sessions.push(new Session("Abs2", ""));
        sessions.push(new Session("Abs3", ""));
        return sessions;
    }
}