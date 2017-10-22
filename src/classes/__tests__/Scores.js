import { Scores } from "../";

const mockState = {
    score: 1200,
    highScore: 0,
    multiplier: 1
};

// HighScore Tests
// ------------------
it('set high score returns an object', () => {
    const scores = new Scores(mockState);
    const newState = scores.setHighScore(3000);

    expect(newState).toBeDefined();
});

it('set high score returns a new object', () => {
    const scores = new Scores(mockState);
    const newState = scores.setHighScore(3000);

    expect(newState === mockState).toBeFalsy();
});

it('returns a new object with an updated score', () => {
    const scores = new Scores(mockState);
    const newState = scores.setHighScore(3000);

    expect(newState.highScore).toEqual(3000);
});

// Multiplier Increase Methods
// ------------------
it('increase multiplier returns an object', () => {
    const scores = new Scores(mockState);
    const newState = scores.increaseMultiplier();

    expect(newState).toBeDefined();
});

it('increase multiplier returns a new object', () => {
    const scores = new Scores(mockState);
    const newState = scores.increaseMultiplier();

    expect(newState === mockState).toBeFalsy();
});

it('increase multiplier methods returns a new object where the multiplier is 1 greater', () => {
    const scores = new Scores(mockState);
    const newState = scores.increaseMultiplier();

    expect(newState.multiplier).toEqual(2);
});

// Multiplier Reset Methods
// ------------------
it('reset multiplier returns an object', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetMultiplier();

    expect(newState).toBeDefined();
});

it('reset multiplier returns a new object', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetMultiplier();

    expect(newState === mockState).toBeFalsy();
});

it('returns a new object where the multiplier is equal to 1', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetMultiplier();

    expect(newState.multiplier).toEqual(1);
});

// Player Increase Score Method
// ------------------
it('increase score returns an object', () => {
    const scores = new Scores(mockState);
    const newState = scores.increaseScore();

    expect(newState).toBeDefined();
});

it('increase score method returns a new object', () => {
    const scores = new Scores(mockState);
    const newState = scores.increaseScore();

    expect(newState === mockState).toBeFalsy();
});

it('increase score method returns a new object with the score increased by 100 * the current multiplier', () => {
    const state = Object.assign({}, mockState, { multiplier: 3 });
    const scores = new Scores(state);
    const newState = scores.increaseScore();

    expect(newState.score).toEqual(state.score + (100 * state.multiplier));
});

it('increase score method returns a new object with the the highscore set if the score is greater than the old high score', () => {
    const state = Object.assign({}, mockState, { multiplier: 3, highScore: 1200 });
    const scores = new Scores(state);
    const newState = scores.increaseScore();

    expect(newState.score).toEqual(newState.highScore);
});

// Player Reset Score Method
// ------------------
it('reset score returns an object', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetScore();

    expect(newState).toBeDefined();
});

it('reset score method returns a new object', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetScore();

    expect(newState === mockState).toBeFalsy();
});

it('resets the players score back to 0', () => {
    const scores = new Scores(mockState);
    const newState = scores.resetScore();

    expect(newState.score).toEqual(0);
});

// Player reset game method
it('resets the score back to 0', () =>{
    const scores = new Scores(mockState);
    const newState = scores.resetGame();

    expect(newState.score).toEqual(0);
});

it('resets the mutliplier back to 1', () =>{
    const scores = new Scores(mockState);
    const newState = scores.resetGame();

    expect(newState.multiplier).toEqual(1);
});