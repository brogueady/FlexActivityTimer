import { Component, OnInit } from '@angular/core';
import { ObservableArray } from 'data/observable-array';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../../shared/sessions/sessions.service";
import { Session } from "../../shared/sessions/session";
import { TimedActivityGroup } from "../../shared/scheduler/timedActivityGroup";
import { TimedActivity } from "../../shared/scheduler/timedActivity";
import { Activity } from "../../shared/activity/activity";
import { ActivityService } from "../../shared/activity/activity.service";
import { Router } from "@angular/router";
import {ListViewEventData} from "nativescript-telerik-ui/listview";
import * as _ from "lodash";
import dialogs = require("ui/dialogs");


@Component({
    templateUrl: 'pages/editSession/editSession.component.html',
    styleUrls: ['pages/editSession/editSession.css']
})
export class EditSessionComponent implements OnInit {
    activityNames: Array<string>;
    session: Session;
    originalSession: Session;
    activities: Array<TimedActivity>;
    repeatList: Array<string>;
    repeatChosen: string;
    isDirty = false;

    constructor(private sessionService: SessionService, private activatedRoute: ActivatedRoute, private router: Router, private activityService: ActivityService) { }

    ngOnInit() {
        this.activityNames = this.activityService.getActivityNames();
        console.log("names = " + this.activityNames[0]);

        let id = this.activatedRoute.snapshot.params['id'];
        console.log("session id:" + id);
        this.session = this.sessionService.getEditableSession(id);
        this.originalSession = _.cloneDeep(this.session);
        console.log("Found session: " + this.session.name);
        this.activities = this.session.timedActivityGroups[0].timedActivities;
        console.log("activities length=" + this.activities.length);

        this.repeatList = ["Once", "2 times", "3 times", "4 times", "5 times"];
    }

    public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }

    public getObservableTimedActivies(timedActivities:Array<TimedActivity>):ObservableArray<TimedActivity> {
        return new ObservableArray(timedActivities);
    }

    get acts(): ObservableArray<string> {
        var t = new ObservableArray<string>();
        t.push("1");
        t.push("2");
        t.push("3");
        return t;
    }

    repeatAmount(repeat: number) {
        return repeat === 1 ? "once" : repeat + " times"
    }

    moveUp(timedActivityIndex, timedActivityGroupIndex) {
        if (timedActivityIndex > 0) {
            let removedActivity = this.session.timedActivityGroups[timedActivityGroupIndex].timedActivities.splice(timedActivityIndex, 1)[0];
            this.session.timedActivityGroups[timedActivityGroupIndex].timedActivities.splice(timedActivityIndex - 1, 0, removedActivity);
            console.log("moved activity");
        }
    }

    moveDown(timedActivityIndex, timedActivityGroupIndex) {
        if (timedActivityIndex < this.session.timedActivityGroups[timedActivityGroupIndex].timedActivities.length - 1) {
            let removedActivity = this.session.timedActivityGroups[timedActivityGroupIndex].timedActivities.splice(timedActivityIndex, 1)[0];
            this.session.timedActivityGroups[timedActivityGroupIndex].timedActivities.splice(timedActivityIndex + 1, 0, removedActivity);
            console.log("moved activity");
        }
    }

    moveGroupUp(timedActivityGroupIndex) {
        if (timedActivityGroupIndex > 0) {
            let removedGroup = this.session.timedActivityGroups.splice(timedActivityGroupIndex, 1)[0];
            this.session.timedActivityGroups.splice(timedActivityGroupIndex - 1, 0, removedGroup);
            console.log("moved group");
        }
    }

    moveGroupDown(timedActivityGroupIndex) {
        if (timedActivityGroupIndex < this.session.timedActivityGroups.length - 1) {
            let removedGroup = this.session.timedActivityGroups.splice(timedActivityGroupIndex, 1)[0];
            this.session.timedActivityGroups.splice(timedActivityGroupIndex + 1, 0, removedGroup);
            console.log("moved group");
        }
    }

    promptSave() {
        dialogs.confirm("Save Changes").then(result => {
            console.log("Dialog result: " + result);
            if (result) {
                this.save();
            }
            this.navigateToSessionOverview();
           
        });
    }

    save() {
        this.sessionService.save(this.session);
    }

    goBack() {
        console.log("original session = "+ JSON.stringify(this.session));
        console.log("new session = "+ JSON.stringify(this.session));
        if (!_.isEqual(this.originalSession, this.session)) {
            this.promptSave();
        } else {
            this.navigateToSessionOverview();
        }
    }

    navigateToSessionOverview() {
        this.router.navigate(["sessionOverview", this.session.id]);
    }
    
    createActivity() {
        this.sessionService.saveSessionInEdit(this.session);
        this.router.navigate(["addActivity", this.session.id]);
    }

    changeNumberValue(eventData, value) {
        value = parseInt(eventData);
    }

    changeGroupRepeat(eventData, groupIndex) {
        console.log("setting group repeat " + groupIndex + " with value " + eventData);

        this.session.timedActivityGroups[groupIndex].repeat = parseInt(eventData);
        console.log("new session = "+ JSON.stringify(this.session));
    }
}