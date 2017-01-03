import {Component} from "@angular/core";

@Component({
    templateUrl: 'pages/home/home.html'
})
export class HomeComponent {
    newRound() {
        console.log("New Round");        
    }
}