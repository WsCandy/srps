import Choice from "_model/Choice";
import Result from "_model/Result";

const results = {
    [Choice.ROCK]: {
        [Choice.ROCK]: Result.DRAW,
        [Choice.PAPER]: Result.LOSE,
        [Choice.SCISSORS]: Result.WIN
    },
    [Choice.PAPER]: {
        [Choice.ROCK]: Result.WIN,
        [Choice.PAPER]: Result.DRAW,
        [Choice.SCISSORS]: Result.LOSE
    },
    [Choice.SCISSORS]: {
        [Choice.ROCK]: Result.LOSE,
        [Choice.PAPER]: Result.WIN,
        [Choice.SCISSORS]: Result.DRAW
    }
}

const determineVictory = (playerChoice: Choice, cpuChoice: Choice): Result => {
    return results[playerChoice][cpuChoice]
};

export default determineVictory;