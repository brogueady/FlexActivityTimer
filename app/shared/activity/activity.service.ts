import {Activity} from "../../shared/activity/activity";
import {Injectable} from "@angular/core";
import {Guid} from "../utils/guid";

@Injectable()
export class ActivityService {
    activitys: Array<Activity>;

    ngOnInit() {
        
    }

    constructor(private guid: Guid) {
        this.loadActivitys();
    }

    loadActivitys() {
        this.activitys = [];
        let activity1: Activity = new Activity("Forearm Plank", "Assume the press-up position but rest on your forearms. Hold this position");
        let activity2: Activity = new Activity("Left Side Plank", "Assume the side press-up position but rest on your left forearm. Hold this position");
        let activity3: Activity = new Activity("Sit Ups", "Assume the side press-up position but rest on your left forearm. Hold this position");
        this.activitys.push(activity1);
        this.activitys.push(activity2);
        this.activitys.push(activity3);
    }

    getActivity(id:string) {
        console.log("finding activity with id: " + id);
        return this.activitys.filter(activity => activity.id === id)[0];
    }

    getActivitys() {
        return this.activitys;
    }

    getActivityNames() {
        return this.activitys.map(activity => activity.name);
    }

}