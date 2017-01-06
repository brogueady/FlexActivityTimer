import {Component} from "@angular/core";
import { Page } from "ui/page";
import {SessionService} from "../../shared/sessions/sessions.service";
import {Session} from "../../shared/sessions/session";
@Component({
    selector: "gr-groceries",
    styleUrls: ["pages/home/home.css"],
    templateUrl: 'pages/home/home.html'
})
export class HomeComponent {
  sessions: Array<Session> [];

  constructor(private sessionService: SessionService) {}
  
  ngOnInit() {
    this.sessions = this.sessionService.getSessions();
  }    
  
}