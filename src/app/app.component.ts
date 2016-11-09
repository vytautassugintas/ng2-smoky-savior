import {Component} from '@angular/core';
import {Timer} from "./shared/timer";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    moneySaved: any;
    timer: Timer;

    constructor() {
        this.timer = new Timer(0, 44, 59);
        this.startTimer();
        this.getMoney();
    }

    saveMoney() {
        this.slowTopUp();
        setTimeout(() => {
            localStorage.setItem("money_saved", this.moneySaved.toString());
        }, 1100);

    }

    cheated() {
        this.timer = new Timer(0, 44, 59);
        this.slowlyRemoveMoney();
        setTimeout(() => {
            localStorage.setItem("money_saved", this.moneySaved.toString());
        }, 1100);
    }

    removeMoney() {
        this.moneySaved = 0;
        localStorage.removeItem("money_saved");
    }

    getMoney() {
        if (localStorage.getItem("money_saved")) {
            this.moneySaved = parseFloat(localStorage.getItem("money_saved"));
        } else {
            this.moneySaved = 0;
        }
    }

    startTimer() {
        setInterval(() => {
            this.timer.downTime();
            if (this.timer.minutes <= 0 && this.timer.seconds <= 1) {
                this.saveMoney();
                this.timer = new Timer(0, 44, 59);
            }
        }, 1000);
    }

    slowTopUp() {
        for (let i = 0; i < 20; i++){
            setTimeout(() => {
                this.moneySaved += 0.01;
            }, 50 * i )
        }
    }

    slowlyRemoveMoney(){
        for (let i = 0; i < 20; i++){
            setTimeout(() => {
                this.moneySaved -= 0.01;
            }, 50 * i )
        }
    }

}



