import { describe } from "@jest/globals";
import Choice from "_model/Choice";
import Result from "_model/Result";
import determineVictory from "_logic/gameplay/determineVictory";

describe("Checks all rock paper scissor combinations for the correct results", () => {
    const data = [
        { playerChoice: Choice.ROCK, cpuChoice: Choice.SCISSORS, expected: Result.WIN },
        { playerChoice: Choice.ROCK, cpuChoice: Choice.PAPER, expected: Result.LOSE },
        { playerChoice: Choice.ROCK, cpuChoice: Choice.ROCK, expected: Result.DRAW },
        { playerChoice: Choice.SCISSORS, cpuChoice: Choice.SCISSORS, expected: Result.DRAW },
        { playerChoice: Choice.SCISSORS, cpuChoice: Choice.PAPER, expected: Result.WIN },
        { playerChoice: Choice.SCISSORS, cpuChoice: Choice.ROCK, expected: Result.LOSE },
        { playerChoice: Choice.PAPER, cpuChoice: Choice.SCISSORS, expected: Result.LOSE },
        { playerChoice: Choice.PAPER, cpuChoice: Choice.PAPER, expected: Result.DRAW },
        { playerChoice: Choice.PAPER, cpuChoice: Choice.ROCK, expected: Result.WIN }
    ];

    data.forEach(testCase => {
        it(`checks if player choice - ${testCase.playerChoice} vs. ${testCase.cpuChoice} is correct`, () => {
            expect(determineVictory(testCase.playerChoice, testCase.cpuChoice))
                .toEqual(testCase.expected);
        });
    });
});