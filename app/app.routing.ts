import {HomeComponent} from "./pages/home/home.component";

export const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
  HomeComponent
];
