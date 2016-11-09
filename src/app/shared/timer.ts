export class Timer {

    seconds: number;
    minutes: number;
    hours: number;

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public updateTime() {
        this.seconds += 1;

        if (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours += 1;
            this.minutes = 0;
        }
    }

    public downTime() {
        this.seconds -= 1;

        if (this.seconds <= 0) {
            this.minutes -= 1;
            this.seconds = 60;
        }
    }

    public getTime(): string {
        return this.checkTime(this.hours) + " : " + this.checkTime(this.minutes) + " : " + this.checkTime(this.seconds);
    }


    checkTime(num : number){
        return num < 10 ? "0" + num : num
    }
}