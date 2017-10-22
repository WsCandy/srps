// @flow
import { Choice, Result } from '../structs';

class Gameplay {

    // The time per round to chose an option
    static ROUND_TIME = 10;

    static defaultState: GameplayState = {
        playerChoice: null,
        cpuChoice: 0,
        victory: null,
        timer: Gameplay.ROUND_TIME,
        round: 0,
        active: false
    };

    // MARK: - Properties
    state: GameplayState;

    // MARK: - Constructor
    constructor(state: GameplayState) {
        this.state = state;
    }

    // MARK: - "Private Methods
    _getChoice(): number {
        const roll: number = Math.random();

        if(roll > 0.33 && roll < 0.66) {
            return Choice.PAPER
        }

        if(roll > 0.66) {
            return Choice.SCISSORS;
        }

        return Choice.ROCK;
    }

    // MARK: - Public Methods
    cpuChoice(): GameplayState {
        return Object.assign({}, this.state, {cpuChoice: this._getChoice()});
    }

    playerChoice(): GameplayState {
        return Object.assign({}, this.state, {playerChoice: this._getChoice()});
    }

    chooseMove(choice: number): GameplayState {
        const victory = this.determineVictory(choice, this.state.cpuChoice);
        return Object.assign({}, this.state, victory, {playerChoice: choice});
    }

    determineVictory(playerChoice: number, cpuChoice: number): GameplayState {
        if(cpuChoice % 3 + 1 === playerChoice) {
            return Object.assign({}, this.state, {victory: Result.WIN})
        } else if(playerChoice % 3 + 1 === cpuChoice) {
            return Object.assign({}, this.state, {victory: Result.LOSE})
        }

        return Object.assign({}, this.state, {victory: Result.DRAW})
    }

    startGame(): GameplayState {
        return Object.assign({}, Gameplay.defaultState, {active: true});
    }

    startRound(): GameplayState {
        const round = this.state.round + 1;
        const newState = {
            playerChoice: null,
            victory: null,
            timer: Gameplay.ROUND_TIME,
            round: round
        };

        return Object.assign({}, this.state, this.cpuChoice(), newState);
    }

    resetGame(): GameplayState {
        return Object.assign({}, this.state, Gameplay.defaultState, { active: true });
    }

    endGame(): GameplayState {
        return Object.assign({}, this.state, Gameplay.defaultState);
    }

    endRound(): GameplayState {
        const newState = {
            timer: 0,
        };

        if(this.state.playerChoice === null || this.state.playerChoice === undefined) {
            const choice = this._getChoice();
            const victory = this.determineVictory(choice, this.state.cpuChoice);
            return Object.assign({}, this.state, victory, newState, {playerChoice: choice});
        }

        const victory: GameplayState = this.determineVictory(this.state.playerChoice, this.state.cpuChoice);

        return Object.assign({}, this.state, victory, newState);
    }

    reduceTimer(): GameplayState {
        const newTime: number = Math.max(0, this.state.timer - 1);
        return Object.assign({}, this.state, { timer: newTime });
    }
}

export default Gameplay;