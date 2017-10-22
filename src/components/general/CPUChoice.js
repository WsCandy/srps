// @flow
import React, { Component } from 'react';
import { Choice } from '../../structs';

type Props = {
    gameplay: GameplayState
}

class CPUChoice extends Component<Props> {
    render() {
        const {gameplay} = this.props;

        return (
            <div className="wrap wrap--center  wrap--column cpu">
                <p>CPU Choice - {gameplay.playerChoice === null ? "?" : this._choiceToString(gameplay.cpuChoice)}</p>
            </div>
        );
    }

    _choiceToString(cpuChoice: number): string {
        switch(cpuChoice) {
            case Choice.ROCK:
                return "Rock";
            case Choice.PAPER:
                return "Paper";
            default:
                return "Scissors";
        }
    }
}
export default CPUChoice;