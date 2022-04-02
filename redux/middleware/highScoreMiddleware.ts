import { Middleware } from "redux";
import AppState from "_redux/model/AppState";

const highScoreMiddleware: Middleware<{}, AppState> = store => next => action => {
    next(action);
    const state = store.getState();

    if (action.type === "MOVE_CHOSEN") {
        const saved = localStorage.getItem("high_score");
        const { high_score } = state.gameplay;

        if (saved && high_score > parseInt(saved, 10)) {
            localStorage.setItem("high_score", high_score.toString(10))
        }

        if (!saved) {
            localStorage.setItem("high_score", high_score.toString(10))
        }
    }
};

export default highScoreMiddleware;