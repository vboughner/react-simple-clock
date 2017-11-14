import React, { Component } from 'react';

export default class ButtonLand extends Component {
    render() {
        return (
            <div className="button-land">
                <button onClick={this.props.onClick}>Update Props {this.props.counter}</button>
                {
                    (this.props.hasClock) ?
                        <button onClick={this.props.onRemoveClock}>Remove Clock</button> :
                        <button onClick={this.props.onReplaceClock}>Replace Clock</button>
                }
            </div>
        );
    }
}
