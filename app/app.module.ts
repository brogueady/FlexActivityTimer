import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import {SessionOverviewComponent} from "./pages/sessionOverview/sessionOverview.component";
import {ActiveSessionComponent} from "./pages/activeSession/activeSession.component";
import {EditSessionComponent} from "./pages/editSession/editSession.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {routes, navigatableComponents} from "./app.routing";
import {SessionService} from "./shared/sessions/sessions.service";
import {ActivityService} from "./shared/activity/activity.service";
import {Guid} from "./shared/utils/guid";
import {CountdownTimer} from "./shared/utils/countdownTimer";


@NgModule({
  providers: [
    SessionService,
    ActivityService,
    Guid,
    CountdownTimer
  ],
  imports: [NativeScriptModule, 
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptFormsModule],
    

  declarations: [AppComponent, HomeComponent, SessionOverviewComponent, ActiveSessionComponent, EditSessionComponent, ...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
