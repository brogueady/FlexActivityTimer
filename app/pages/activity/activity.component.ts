import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../../shared/sessions/sessions.service";
import { Session } from "../../shared/sessions/session";
import { TimedActivityGroup } from "../../shared/scheduler/timedActivityGroup";
import { TimedActivity } from "../../shared/scheduler/timedActivity";
import { Activity } from "../../shared/activity/activity";
import { Router } from "@angular/router";
import * as _ from "lodash";
import dialogs = require("ui/dialogs");


@Component({
    templateUrl: 'pages/activity/activity.component.html'
})
export class ActivityComponent implements OnInit {
    session: Session;
    groupPicked = 0;
    groupNames: Array<string> = [];
    timedActivity: TimedActivity;

    constructor(private sessionService: SessionService, private activatedRoute: ActivatedRoute, private router: Router) {

        let id = this.activatedRoute.snapshot.params['id'];
        console.log("session id:" + id);
        this.session = this.sessionService.getSessionInEdit();
        console.log("session:" + this.session);
        console.log("timed groups:" + this.session.timedActivityGroups);
        console.log("Group Number = " + this.session.timedActivityGroups.length);
        this.session.timedActivityGroups.forEach(function(value, index) { this.groupNames.push(""+ index)}, this);
        console.log("Group Names: " + this.groupNames);
        this.timedActivity = new TimedActivity(30, 30, new Activity("", ""), 1);
        
     }

    ngOnInit() {
    }

    promptSave() {
        dialogs.confirm("Add Activity?").then(result => {
            console.log("Dialog result: " + result);
            if (result) {
                this.sessionService.saveSessionInEdit(this.session);
            }
            this.navigateToEditSession();
           
        });
    }

    save() {
        this.sessionService.save(this.session);
    }

    cancel() {
        this.navigateToEditSession();
    }

    goBack() {
        console.log("original session = "+ JSON.stringify(this.session));
        console.log("new session = "+ JSON.stringify(this.session));
        this.promptSave();
    }

    navigateToEditSession() {
        this.router.navigate(["editSession", this.session.id]);
    }
    
    selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.groupPicked = picker.selectedIndex;
    }

}