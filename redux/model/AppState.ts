import GameplayState from "_redux/model/states/GameplayState";

interface AppState {
    readonly gameplay: GameplayState;
}

export default AppState