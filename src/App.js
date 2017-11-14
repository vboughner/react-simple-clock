import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import ButtonLand from './ButtonLand';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick() {
        this.setState({
           counter: this.state.counter + 1,
        });
    }

    render() {
        return (
            <div className="App">
                <ButtonLand counter={this.state.counter} onClick={() => this.handleClick()}/>
                <Clock counter={this.state.counter} />
            </div>
        );
    }
}

export default App;
