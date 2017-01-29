import {Injectable} from "@angular/core";
import {BodyZones} from "./BodyZones";

@Injectable()
export class Abs implements BodyZones {
    private name: string = "Abs";

    getName() {
        return name;
    }

}