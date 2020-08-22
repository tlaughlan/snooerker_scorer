import React from 'react';
import classes from './SnookerBalls.css';
import Ball from './Ball/Ball';

const ballDetails = [
    {colour: "red", value: 1},
    {colour: "yellow", value: 2},
    {colour: "green", value: 3},
    {colour: "brown", value: 4},
    {colour: "blue", value: 5},
    {colour: "pink", value: 6},
    {colour: "black", value: 7},
];

const snookerBalls = (props) => (
    <div className={classes.snookerBalls}>
        {ballDetails.map(ball => (
            <Ball key={ball.value} 
                colour={ball.colour}
                value={ball.value} />
        ))}
    </div>
);

export default snookerBalls;