// @flow
import React, { Component } from "react";
import { TitleScene } from "./containers";
import GameplayScene from "./containers/GameplayScene";
import store from "./store";

type Props = {};
type State = {
    store: store
};

class App extends Component<Props, State> {

    componentWillMount() {
        store.subscribe(this._setStore.bind(this));
    }

    render() {
        const { scoring, gameplay } = store.getState();
        return (
            <div>
                { gameplay.active ? <GameplayScene /> : <TitleScene /> }
            </div>
        );
    }

    _setStore() {
        this.setState({
            store: store
        })
    }
}

export default App;
