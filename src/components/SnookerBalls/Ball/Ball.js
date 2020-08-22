import React, { Component } from 'react';
import classes from './Ball.css';

class Ball extends Component {
    render () {
        const dynamicStyles = {
            backgroundColor: this.props.colour
        }

        return (
            <div className={classes.ball}>
                <span style={dynamicStyles} className={classes.dot}></span>
            </div>
        );
    }
}

export default Ball;