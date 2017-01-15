import {HomeComponent} from "./pages/home/home.component";
import {SessionOverviewComponent} from "./pages/sessionOverview/sessionOverview.component";
import {ActiveSessionComponent} from "./pages/activeSession/activeSession.component";
import {EditSessionComponent} from "./pages/editSession/editSession.component";

export const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "sessionOverview/:id", component: SessionOverviewComponent},
    { path: "activeSession/:id", component: ActiveSessionComponent},
    { path: "editSession/:id", component: EditSessionComponent}

];

export const navigatableComponents = [
  HomeComponent,
  SessionOverviewComponent
];
