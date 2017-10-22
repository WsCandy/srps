// @flow

const SCORE_INCREASE: number = 100;

class Scores {

    // MARK: - Properties
    state: ScoreState;

    // MARK: - Constructor
    constructor(state: ScoreState) {
        this.state = state;
    }

    // MARK: - Public Methods
    setHighScore(score: number): ScoreState {
        return Object.assign({}, this.state, { highScore: score });
    }

    increaseMultiplier(): ScoreState {
        return Object.assign({}, this.state, { multiplier: this.state.multiplier + 1 });
    }

    resetMultiplier(): ScoreState {
        return Object.assign({}, this.state, { multiplier: 1 });
    }

    increaseScore(): ScoreState {
        const currentScore = this.state.score;
        const multiplier = this.state.multiplier;
        const newScore = currentScore + (SCORE_INCREASE * multiplier);

        // Set a new high score if the current score beats it.
        if (newScore > this.state.highScore) {
            return Object.assign({}, this.state, this.setHighScore(newScore), { score: newScore });
        }

        return Object.assign({}, this.state, { score: newScore });
    }

    resetScore(): ScoreState {
        return Object.assign({}, this.state, { score: 0 });
    }

    resetGame(): ScoreState {
        return Object.assign({}, this.state, { score: 0, multiplier: 1 });
    }
}

export default Scores;