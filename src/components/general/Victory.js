// @flow
import React, { Component } from 'react';
import { Result } from '../../structs';

type Props = {
    victory: ?string
};

class Victory extends Component<Props> {
    render() {
        const {victory} = this.props;
        return (
            <div className="victory  victory__wrap">
                { victory !== null ? <p>{this._getVictoryString(victory)}</p> : ""}
            </div>
        );
    }

    _getVictoryString(victory: ?string): ?string {
        switch(victory) {
            case Result.WIN:
                return "You Win!";
            case Result.LOSE:
                return "You Lose!";
            case Result.DRAW:
                return "Draw!";
            default:
                return null;
        }
    }
}

export default Victory;