import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import ButtonLand from './ButtonLand';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            hasClock: false,
        }
    }

    handleClick() {
        this.setState({
           counter: this.state.counter + 1,
        });
    }

    handleRemoveClock() {
        this.setState({
            hasClock: false,
        });
    }

    handleReplaceClock() {
        this.setState({
            hasClock: true,
        });
    }

    render() {
        return (
            <div className="App">
                <ButtonLand
                    counter={this.state.counter}
                    onClick={() => this.handleClick()}
                    hasClock={this.state.hasClock}
                    onRemoveClock={() => this.handleRemoveClock()}
                    onReplaceClock={() => this.handleReplaceClock()}
                />
                { this.state.hasClock && <Clock counter={this.state.counter} /> }
                <Footer>
                    Copyright 2017 Boo Boo
                </Footer>
            </div>
        );
    }
}

export default App;
