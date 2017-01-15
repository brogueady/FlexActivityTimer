import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../../shared/sessions/sessions.service";
import { Session } from "../../shared/sessions/session";
import { TimedActivityGroup } from "../../shared/scheduler/timedActivityGroup";
import { TimedActivity } from "../../shared/scheduler/timedActivity";
import { Activity } from "../../shared/activity/activity";
import { CountdownTimer } from "../../shared/utils/countdownTimer";
import { CountdownAction } from "./countdownAction";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'pages/activeSession/activeSession.html',
    styleUrls: ['pages/activeSession/activeSession.css']
})
export class ActiveSessionComponent {
    session: Session;
    timerCountdown: number;
    activityName: string;
    countdownActions: Array<CountdownAction>;
    actionIndex: number = 0;
    paused: boolean = false;

    constructor(private sessionService: SessionService, private activatedRoute: ActivatedRoute, private countdownTimer: CountdownTimer, private router: Router) {
        let id = this.activatedRoute.snapshot.params['id'];
        console.log("active session id:" + id);
        this.session = this.sessionService.getSession(id);
        console.log("Found session: " + this.session.name);
        this.startSession()
    }

    ngOnInit() {
    }

    getTimerCountdown() {
        return this.timerCountdown.toString();
    }

    startSession() {
        if (this.paused) {
            this.continue();
        }
        this.countdownActions = [];
        this.actionIndex = 0;

        for (let y = 1; y <= this.session.timedActivityGroups.length; y++) {
            let group: TimedActivityGroup = this.session.timedActivityGroups[y-1];

            for (let z = 1; z <= group.repeat; z++) {
                for (let x = 1; x <= group.timedActivities.length; x++) {
                    let activity: TimedActivity = group.timedActivities[x-1];

                    for (let i: number = 1; i <= activity.repeat; i++) {
                        console.log("pushing activity: " + activity.activity.name + " activity seconds: " + activity.workPeriodInSecs);
                        let countdownAction = new CountdownAction(activity.workPeriodInSecs, activity);
                        this.countdownActions.push(countdownAction);
                        if (i < activity.repeat || i === activity.repeat && x < group.timedActivities.length) {
                            console.log("pushing activity: " + activity.activity.name + " rest seconds: " + activity.restPeriodInSecs);
                            let countdownAction = new CountdownAction(activity.restPeriodInSecs);
                            this.countdownActions.push(countdownAction);
                        }
                    }

                }
                if (z < group.repeat || z === group.repeat && y < this.session.timedActivityGroups.length) {
                    console.log("pushing group: " + z + " rest seconds: " + group.restPeriodAfterGroupInSecs);
                    let countdownAction = new CountdownAction(group.restPeriodAfterGroupInSecs);
                    this.countdownActions.push(countdownAction);
                }

            }
        }
        this.nextAction();
    }

    private nextAction() {
        if (this.actionIndex < this.countdownActions.length) {
            this.doWork(this.countdownActions[this.actionIndex]);
        }

    }

    private doWork(countdownAction: CountdownAction) {
        console.log(countdownAction.isRestPeriod() ? " Starting Rest Period " : "Starting activity: " + countdownAction.timedActivity.activity.name);
        this.timerCountdown = countdownAction.timePeriod;
        this.activityName = !countdownAction.isRestPeriod() ? countdownAction.timedActivity.activity.name : "Rest Period";
        this.startCountdown(countdownAction.timePeriod);
    }

    startCountdown(workPeriodInSecs: number) {
        this.countdownTimer.start(workPeriodInSecs, this);
    }

    decrementCountdown() {
        console.log("decrementing timer");
        this.timerCountdown--;
        if (this.timerCountdown === 0) {
            console.log("stopping timer");
            this.countdownTimer.stop();
            this.actionIndex++;
            this.nextAction();
        }
    }

    endSession() {
        this.activityName = "";
        this.timerCountdown = 0;
    }

    stop() {
        console.log("stopping session");
        this.countdownTimer.stop();
        this.timerCountdown = null;
        this.router.navigate(["home"]);
    } 

    pause() {
        console.log("pausing session");
        this.countdownTimer.stop();
        this.paused = true;
    } 

    continue() {
        console.log("unpausing session");
        this.paused = false;
        this.countdownActions[this.actionIndex].timePeriod=this.timerCountdown;
        this.doWork(this.countdownActions[this.actionIndex]);
    } 

    restartSession() {
        console.log("restarting session");
        this.countdownTimer.stop();
        this.countdownActions = [];
        this.paused = false;
        this.startSession();

    }

    restartActivity() {
        console.log("restarting activity");
        this.countdownTimer.stop();
        this.paused = false;
        this.nextAction();
    }
}

