import {HomeComponent} from "./pages/home/home.component";

export const routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
  HomeComponent
];
