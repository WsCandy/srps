// @flow
import React, { Component } from 'react';

type Props = {
    round: number
}

const Round = (props: Props) => {
    const {round} = props;
    return (
        <div className="wrap wrap--center  wrap--column round">
            <p>Round 1-{round}</p>
        </div>
    );
};
export default Round;