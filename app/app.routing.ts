import {HomeComponent} from "./pages/home/home.component";
import {SessionOverviewComponent} from "./pages/sessionOverview/sessionOverview.component";

export const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "sessionOverview/:id", component: SessionOverviewComponent}

];

export const navigatableComponents = [
  HomeComponent,
  SessionOverviewComponent
];
