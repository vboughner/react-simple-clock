import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonLand extends Component {

    static BUTTON_STYLES =  {
        border: '2px solid red',
    };

    render() {
        return (
            <div className="button-land">
                <button style={ButtonLand.BUTTON_STYLES} onClick={this.props.onClick}>Update Props {this.props.counter}</button>
                {
                    (this.props.hasClock) ?
                        <button onClick={this.props.onRemoveClock}>Remove Clock</button> :
                        <button onClick={this.props.onReplaceClock}>Replace Clock</button>
                }
            </div>
        );
    }
}

ButtonLand.propTypes = {
    counter: PropTypes.number,
    hasClock: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onRemoveClock: PropTypes.func.isRequired,
    onReplaceClock: PropTypes.func.isRequired,
};

ButtonLand.defaultProps = {
    counter: 5,
    hasClock: false,
};
