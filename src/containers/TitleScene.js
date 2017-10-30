// @flow
import React, { Component } from 'react';
import store from '../store';
import { Ground, Info, Title, Action } from '../components';

type Props = {};
type State = {
    h: number,
    w: number
};

class TitleScene extends Component<Props, State> {

    state: State = {
        h: document.documentElement ? document.documentElement.clientHeight : 0,
        w: document.documentElement ? document.documentElement.clientWidth : 0
    };

    listener: Function = this._setSize.bind(this);

    componentDidMount() {
        window.addEventListener("resize", this.listener);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.listener);
    }

    render() {
        const {scoring, gameplay} = store.getState();
        return (
            <div style={{width: this.state.w, height: this.state.h}} className="container">
                <Info scoring={scoring} gameplay={gameplay}/>
                <Title />
                <div className="container  container--grow  container--center">
                    <Action action={e => this._startGame() } text="1 player game" className="action--center" />
                </div>
                <Ground />
            </div>
        )
    }

    _setSize(): void {
        this.setState({
            h: document.documentElement ? document.documentElement.clientHeight : 0,
            w: document.documentElement ? document.documentElement.clientWidth : 0
        })
    }

    _startGame() {
        store.dispatch({
            type: "START_GAME",
            payload: null
        })
    }
}

export default TitleScene