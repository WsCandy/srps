import GameplayState from "_redux/model/states/GameplayState";
import { createReducer } from "@reduxjs/toolkit";
import gameStarted from "_redux/actions/gameplay/gameStarted";
import timerReduced from "_redux/actions/gameplay/timerReduced";
import moveChosen from "_redux/actions/gameplay/moveChosen";
import roundStarted from "_redux/actions/gameplay/roundStarted";
import endRoundWithPlayerChoice from "_redux/reducers/gameplay/case/endRoundWithPlayerChoice";
import gameEnded from "_redux/actions/gameplay/gameEnded";
import gameReset from "_redux/actions/gameplay/gameReset";
import highScoreLoaded from "_redux/actions/gameplay/highScoreLoaded";

const INITIAL_STATE: GameplayState = {
    timer: 0,
    round: 0,
    active: false,
    score: 0,
    high_score: 0,
    multiplier: 1
};

const gameplay = createReducer(INITIAL_STATE, builder => {

    builder.addCase(highScoreLoaded, (state, action) => {
        return { ...state, high_score: action.payload };
    });

    builder.addCase(gameStarted, state => {
        return { ...state, active: true, round: 1, timer: 10 };
    });

    builder.addCase(timerReduced, state => {
        return { ...state, timer: Math.max(0, state.timer - 1) };
    });

    builder.addCase(moveChosen, (state, action) => {
        return endRoundWithPlayerChoice(state, action.payload);
    });

    builder.addCase(roundStarted, state => {
        return {
            ...state,
            player_choice: undefined,
            cpu_choice: undefined,
            result: undefined,
            active: true,
            timer: 10,
            round: state.round + 1
        };
    });

    builder.addCase(gameEnded, state => {
        return { ...INITIAL_STATE, high_score: state.high_score };
    });

    builder.addCase(gameReset, state => {
        return {
            ...INITIAL_STATE,
            high_score: state.high_score,
            active: true,
            round: 1,
            timer: 10
        };
    });
});

export default gameplay;