import React, { Component } from 'react';
import classes from './Scoreboard.css'
import Ball from '../components/SnookerBalls/Ball/Ball';
import SnookerBalls from '../components/SnookerBalls/SnookerBalls';

class Scoreboard extends Component {
    render () {
        return (
            <div>
                <h1>Scoreboard title</h1>
                <div className={classes.scoreboard}>
                    <SnookerBalls />
                </div>
            </div>
        );
    }
}

export default Scoreboard;