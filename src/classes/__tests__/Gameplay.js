import { Gameplay } from '../';
import { Choice, Result } from '../../structs';

const mockState: GameplayState = {
    playerChoice: Choice.ROCK,
    cpuChoice: Choice.SCISSORS,
    victory: true,
    timer: 10,
    round: 3
};

// CPU Choice Tests
// ------------------
it('cpuChoice returns an object', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.cpuChoice();

    expect(newState).toBeDefined();
});

it('cpuChoice returns a new object', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.cpuChoice();

    expect(newState === mockState).toBeFalsy()
});

describe('cpu choice returns once of the 3 choices, ROCK, PAPER or SCISSORS', () => {
    const gameplay = new Gameplay(mockState);
    const results: Array<number> = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

    // Run this 10 times because of it's random nature.
    for(let i = 0; i < 10; i++) {
        const newState = gameplay.cpuChoice();

        it('returns once of the 3 choices, ROCK, PAPER or SCISSORS', () => {
            expect(results).toContain(newState.cpuChoice);
        });
    }
});

describe('player choice returns once of the 3 choices, ROCK, PAPER or SCISSORS', () => {
    const gameplay = new Gameplay(mockState);
    const results: Array<number> = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

    // Run this 10 times because of it's random nature.
    for(let i = 0; i < 10; i++) {
        const newState = gameplay.playerChoice();

        it('returns once of the 3 choices, ROCK, PAPER or SCISSORS', () => {
            expect(results).toContain(newState.playerChoice);
        });
    }
});

// Victory Tests
// ------------------
describe('checks all rock paper scissor combinations for the correct results', () => {
    const data: Array<{ playerChoice: number, cpuChoice: number, expected: string }> = [
        {playerChoice: Choice.ROCK, cpuChoice: Choice.SCISSORS, expected: Result.WIN},
        {playerChoice: Choice.ROCK, cpuChoice: Choice.PAPER, expected: Result.LOSE},
        {playerChoice: Choice.ROCK, cpuChoice: Choice.ROCK, expected: Result.DRAW},
        {playerChoice: Choice.SCISSORS, cpuChoice: Choice.SCISSORS, expected: Result.DRAW},
        {playerChoice: Choice.SCISSORS, cpuChoice: Choice.PAPER, expected: Result.WIN},
        {playerChoice: Choice.SCISSORS, cpuChoice: Choice.ROCK, expected: Result.LOSE},
        {playerChoice: Choice.PAPER, cpuChoice: Choice.SCISSORS, expected: Result.LOSE},
        {playerChoice: Choice.PAPER, cpuChoice: Choice.PAPER, expected: Result.DRAW},
        {playerChoice: Choice.PAPER, cpuChoice: Choice.ROCK, expected: Result.WIN}
    ];

    data.forEach((testCase) => {
        it('checks if player choice beats cpu choice', () => {
            const gameplay = new Gameplay(mockState);
            const newState = gameplay.determineVictory(testCase.playerChoice, testCase.cpuChoice);

            expect(newState.victory).toEqual(testCase.expected);
        })
    });
});

// Start Game Tests
// ------------------
it('start game returns an object', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startGame();

    expect(newState).toBeDefined();
});

it('start game returns a new object', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startGame();

    expect(newState === Gameplay.defaultState).toBeFalsy()
});

// Start Round Tests
// ------------------

it('starting a new round increases the round counter by 1', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startRound();

    expect(newState.round).toEqual(mockState.round + 1);
});

it('starting a new round sets the timer back to the start', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startRound();

    expect(newState.timer).toEqual(Gameplay.ROUND_TIME);
});

it('starting a new round sets the CPU choice', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startRound();
    const results: Array<number> = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

    expect(results).toContain(newState.cpuChoice);
});

it('starting a new round sets the player choice to null', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startRound();

    expect(newState.playerChoice).toEqual(null);
});

it('starting a new round sets the victory state back to null', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startRound();

    expect(newState.victory).toEqual(null);
});

// End Round Tests
// ------------------
it('ending a round correctly sets the victory state', () => {
    const results: Array<string> = [Result.WIN, Result.LOSE, Result.DRAW];
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.endRound();

    expect(results).toContain(newState.victory);
});

it('ending a round correctly sets the timer to 0', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.endRound();

    expect(newState.timer).toEqual(0);
});

it('ending a round without a player choice generates a choice for them', () => {
    const results: Array<number> = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];
    const state = Object.assign({}, mockState, {playerChoice: null});
    const gameplay = new Gameplay(state);
    const newState = gameplay.endRound();

    expect(results).toContain(newState.playerChoice);
});

// Choose Move Tests
// ------------------
it('sets the player choice to the provided choice', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.chooseMove(Choice.SCISSORS);
    expect(newState.playerChoice).toEqual(Choice.SCISSORS);
});

it('ends round when the player makes a choice', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.chooseMove(Choice.SCISSORS);

    expect(newState.victory).not.toEqual(null);
});

// Start Game Tests
// ------------------
it('sets the gameplay state to true', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.startGame();

    expect(newState.active).toEqual(true);
});

// Reset Game Tests
// ------------------

it('resets the gameplay state back to default', () => {
    const state = Object.assign({}, Gameplay.defaultState, {active: true});
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.resetGame();

    expect(newState).toEqual(state);
});

// End Game Tests
// ------------------

it('resets the gameplay state back to default', () => {
    const gameplay = new Gameplay(mockState);
    const newState = gameplay.endGame();

    expect(newState).toEqual(Gameplay.defaultState);
});

// Timer Tests
// ------------------

it('reduces the timer by 1', () => {
   const gameplay = new Gameplay(mockState);
   const newState = gameplay.reduceTimer();

   expect(newState.timer).toEqual(mockState.timer - 1);
});

it('ensures the timer does not go below 0', () => {
    const state = Object.assign({}, mockState, { timer: 0 });
    const gameplay = new Gameplay(state);
    const newState = gameplay.reduceTimer();

    expect(newState.timer).toBeGreaterThanOrEqual(0);
});