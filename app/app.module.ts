import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import {SessionOverviewComponent} from "./pages/sessionOverview/sessionOverview.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {routes, navigatableComponents} from "./app.routing";
import {SessionService} from "./shared/sessions/sessions.service";
import {Guid} from "./shared/utils/guid";


@NgModule({
  providers: [
    SessionService,
    Guid
  ],
  imports: [NativeScriptModule, 
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],

  declarations: [AppComponent, HomeComponent, SessionOverviewComponent, ...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
