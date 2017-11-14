import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Clock.getTime()
        };
    }

    static getTime() {
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
            time: Clock.getTime(),
        }, this.setTimer());
    }

    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <div className="clock">
                {this.state.time.hours}:{this.state.time.minutes}:{this.state.time.seconds} {this.state.time.ampm}
                <br />
                counter in {this.props.counter}
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setTimer();
    }

    componentWillReceiveProps(nextProps) {
        // props may or may not have actually changed,
        // not called the first time a component is rendered
        console.log('componentWillReceiveProps');
        if (nextProps.counter !== this.props.counter) {
            console.log('counter is changing from ' + this.props.counter + ' to ' + nextProps.counter);
        }
        // console.log(nextProps);
    }

    componentWillUpdate() {
        // don't call setState from in here
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        // console.log(this.props);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
}

Clock.propTypes = {
    counter: PropTypes.number.isRequired,
};

Clock.defaultProps = {
    counter: 5,
};
