import React, { Component } from 'react';


export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.getTime()
        }
        this.setTimer();
    }

    getTime() {
        const currentTime = new Date(),
            hours = currentTime.getHours(),
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            ampm = hours >= 12 ? 'pm' : 'am';

        const hoursReduced = (hours > 12) ? hours - 12 : hours;
        const hoursDisplay = ("0" + hoursReduced).slice(-2);
        const minutesDisplay = ("0" + minutes).slice(-2);
        const secondsDisplay = ("0" + seconds).slice(-2);

        return {
            hours: hoursDisplay,
            minutes: minutesDisplay,
            seconds: secondsDisplay,
            ampm: ampm,
        };
    }

    updateClock() {
        this.setState({
            time: this.getTime(),
        }, this.setTimer());
    }

    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    render() {
        return (
            <div className="clock">
                {this.state.time.hours}:{this.state.time.minutes}:{this.state.time.seconds} {this.state.time.ampm}
            </div>
        );
    }
}
