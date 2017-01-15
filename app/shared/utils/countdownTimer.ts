import { Injectable } from "@angular/core";
import { ActiveSessionComponent } from "../../pages/activeSession/activeSession.component";
var timer = require('timer');

@Injectable()
export class CountdownTimer {
    id: string;

    start(startNumber: number, activeSession: ActiveSessionComponent) {
        this.id = timer.setInterval(() => { activeSession.decrementCountdown(); }, 1000);
    }

    stop() {
        console.log("clearing timer");
        timer.clearInterval(this.id);
        console.log("cleared timer");
    }

    pause() {
        timer.pause(this.id);
    }

}