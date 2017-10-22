// @flow
import { Scores } from "../classes";

const defaultState: ScoreState = {
    score: 0,
    highScore: 0,
    multiplier: 1
};

// We do not want a bunch of logic in reducers so we move all the logic operations to the appropriate class.
// The reducer simply calls the correct class methods.
export default (state: ScoreState = defaultState, action: Action) => {
    const scores = new Scores(state);
    switch (action.type) {
        case "SET_HIGH_SCORE":
            return scores.setHighScore(action.payload);
        case "INCREASE_MULTIPLIER":
            return scores.increaseMultiplier();
        case "RESET_MULTIPLIER":
            return scores.resetMultiplier();
        case "RESET_SCORE":
            return scores.resetScore();
        case "INCREASE_SCORE":
            return scores.increaseScore();
        case "END_GAME":
            return scores.resetGame();
        case "RESET_GAME":
            return scores.resetGame();
        default:
            return state;
    }
}