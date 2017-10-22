// @flow
import { Gameplay } from "../classes";

// We do not want a bunch of logic in reducers so we move all the logic operations to the appropriate class.
// The reducer simply calls the correct class methods.
export default (state: GameplayState = Gameplay.defaultState, action: Action) => {
    const gameplay = new Gameplay(state);

    switch(action.type) {
        case "START_GAME":
            return gameplay.startGame();
        case "START_ROUND":
            return gameplay.startRound();
        case "RESET_GAME":
            return gameplay.resetGame();
        case "END_GAME":
            return gameplay.endGame();
        case "END_ROUND":
            return gameplay.endRound();
        case "CHOOSE_MOVE":
            return gameplay.chooseMove(action.payload);
        case "REDUCE_TIMER":
            return gameplay.reduceTimer();
        default:
            return state;
    }
}