import {TimedActivityGroup} from "../../shared/scheduler/TimedActivityGroup";

import {Component} from '@angular/core';
import {Session} from "../../shared/sessions/session";
import {SessionService} from "../../shared/sessions/sessions.service";
import {OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: 'pages/sessionOverview/sessionOverview.html',
  styleUrls: ['pages/sessionOverview/sessionOverview.css']
})
export class SessionOverviewComponent implements OnInit {
    timedActivityGroups: Array<TimedActivityGroup> = [];
    session: Session;

    constructor(private sessionService: SessionService, private route: ActivatedRoute ) {}

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        console.log("session id:"+ id);
        this.session = this.sessionService.getSession(id);
        console.log("Found session: " + this.session.name);
        console.log("Found timedactivity: " + this.session.timedActivityGroups[0].timedActivities[0].activity.name);
        console.log("No. of timed actvities in group 0 = " + this.session.timedActivityGroups[0].timedActivities.length);
    }

    repeatAmount(repeat: number) {
        return repeat===1 ? "once" : repeat + " times"

    }
}