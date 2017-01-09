import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../../shared/sessions/sessions.service";
import { Session } from "../../shared/sessions/session";

@Component({
    templateUrl: './pages/activeSession/activeSession.html'
})
export class ActiveSession {
    session: Session;

    constructor(private sessionService: SessionService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'];
        console.log("active session id:" + id);
        this.session = this.sessionService.getSession(id);
        console.log("Found session: " + this.session.name);
    }

    startSession() {
        this.session.start();
        
        while (this.session.hasMoreActivities()) {
            this.session.getNextActivity();
        }
    }

}