// @flow
import React, { Component } from 'react';

type Props = {
    scoring: ScoreState,
    gameplay: GameplayState
}

class Info extends Component<Props> {

    render() {
        const { scoring, gameplay } = this.props;

        return (
            <div className="info container  container__row">
                <div className="wrap  wrap--full wrap--space-between">
                    <div className="block">
                        <p>Score</p>
                        <p>{ this._padNumbers(scoring.score, 6) }</p>
                    </div>
                    <div className="block  block--center">
                        <p>Top- { this._padNumbers(scoring.highScore, 6)}</p>
                    </div>
                    <div className="block  block--right">
                        <p>Time</p>
                        <p>{ gameplay.active ? this._padNumbers(gameplay.timer, 3) : this._padNumbers(0, 3)}</p>
                    </div>
                </div>
            </div>
        );
    }

    _padNumbers(number: number, length: number): string {
        const string = String(number);
        const strLen = string.length;

        let result: string = "";

        for(let i = 0; i < length - strLen; i++) {
            result += "0";
        }

        return result + string;
    }
}

export default Info;