export const ScheduleItemType = Object.freeze({
  EVENT: Symbol('event'),
  FILLER: Symbol('filler'),
  END: Symbol('end')
})

export class ScheduleItem {
    constructor({startTime, endTime, image},type = ScheduleItemType.EVENT) {
        this.image = image;
        // this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.type = type;

        console.log(this.startTime.toString() + " " + this.endTime.toString() + " " + this.type.toString())
        console.log(this.startTime.getVal() + " " + this.endTime.getVal() + " " + this.type.toString())
    }
}

export const PeriodType = Object.freeze({
    AM: Symbol('AM'),
    PM: Symbol('PM')
})

export class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
        if (hour <= 12) {
            this.period = PeriodType.AM;
        } else {
            this.period = PeriodType.PM;
        }
    }

    toString() {
        return `${this.period === PeriodType.AM? this.hour: this.hour - 12 }:${this.minute < 10? `0${this.minute}`:this.minute} ${this.period.toString().split('Symbol(')[1].split(')')[0]}`;
    }

    getVal() {
        return this.hour * 60 + this.minute;
    }

    static timeDiff(time1, time2) {
        return time2.getVal() - time1.getVal();
    }
}