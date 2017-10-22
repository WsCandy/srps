// @flow
import React, { Component } from "react";
import store from "../store";
import { Choice, Result } from "../structs";
import { Ground, Info, Round, Block, CPUChoice, Victory, Action } from '../components';

type Props = {};
type State = {
    h: number,
    w: number
};

class GameplayScene extends Component<Props, State> {

    roundTimer: ?number;
    state: State = {
        h: document.documentElement ? document.documentElement.clientHeight : 0,
        w: document.documentElement ? document.documentElement.clientWidth : 0
    };

    componentDidMount() {
        this._startNextRound();
        window.addEventListener("resize", e => this._setSize());
    }

    render() {
        const {scoring, gameplay} = store.getState();
        return (
            <div style={{width: this.state.w, height: this.state.h}} className="container">
                <Info scoring={scoring} gameplay={gameplay}/>
                <Round round={ gameplay.round }/>
                <CPUChoice gameplay={ gameplay }/>
                <Victory victory={ gameplay.victory }/>
                <div className="container  container--grow  container__row  container--center">
                    <Block onClick={e => this._playRound(Choice.ROCK)} gameplay={gameplay} choice={Choice.ROCK}/>
                    <Block onClick={e => this._playRound(Choice.PAPER)} gameplay={gameplay} choice={Choice.PAPER}/>
                    <Block onClick={e => this._playRound(Choice.SCISSORS)} gameplay={gameplay} choice={Choice.SCISSORS}/>
                </div>
                <div className="container  container--center  container--min">
                    { this._nextButton() }
                </div>
                <Ground />
            </div>
        )
    }

    _setSize(): void {
        this.setState({
            h: document.documentElement.clientHeight | 0,
            w: document.documentElement.clientWidth | 0
        })
    }

    _nextButton() {
        const {scoring, gameplay} = store.getState();

        if(gameplay.victory !== null) {

            if(gameplay.round >= 10) {
                return (
                    <div className="container">
                        <Action action={e => this._resetGame() } text="Play Again?" className="action--center" />
                        <Action action={e => this._endGame() } text="End Game" className="action--center" />
                    </div>
                );
            }

            return (
                <Action action={e => this._startNextRound() } text="Next Round" className="action--center" />
            );
        }
    }

    _endGame(): void {
        store.dispatch({
            type: "END_GAME",
            payload: null
        });
    }

    _resetGame(): void {
        store.dispatch({
            type: "RESET_GAME",
            payload: null
        });

        this._startNextRound();
    }

    _startNextRound(): void {
        store.dispatch({
            type: "START_ROUND",
            payload: null
        });

        if(typeof this.roundTimer !== 'undefined') {
            clearTimeout(this.roundTimer);
        }

        this.roundTimer = setTimeout(e => this._reduceTimer(), 1000);
    }

    _reduceTimer(): void {
        const {score, gameplay} = store.getState();

        if(gameplay.timer === 0) {
            this._endRound();
            return
        }

        store.dispatch({
            type: "REDUCE_TIMER",
            payload: null
        });

        this.roundTimer = setTimeout(e => this._reduceTimer(), 1000);
    }

    _endRound(): void {
        store.dispatch({
            type: "END_ROUND",
            payload: null
        });

        this._setPoints();
        clearTimeout(this.roundTimer);
    }

    _playRound(choice: number): void {
        const {score, gameplay} = store.getState();

        if(gameplay.playerChoice !== null) {
            return
        }

        store.dispatch({
            type: "CHOOSE_MOVE",
            payload: choice
        });

        this._setPoints();
        clearTimeout(this.roundTimer);
    }

    _setPoints(): void {
        const {score, gameplay} = store.getState();

        if(gameplay.victory === Result.WIN) {
            this._increasePoints();
            this._increaseMultiplier();
        } else {
            this._resetMultiplier();
        }
    }

    _increasePoints(): void {
        store.dispatch({
            type: "INCREASE_SCORE",
            payload: null
        })
    }

    _increaseMultiplier(): void {
        store.dispatch({
            type: "INCREASE_MULTIPLIER",
            payload: null
        })
    }

    _resetMultiplier(): void {
        store.dispatch({
            type: "RESET_MULTIPLIER",
            payload: null
        })
    }
}

export default GameplayScene