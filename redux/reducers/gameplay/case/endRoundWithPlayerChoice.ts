import GameplayState from "_redux/model/states/GameplayState";
import Choice from "_model/Choice";
import generateCPUChoice from "_logic/gameplay/generateCPUChoice";
import determineVictory from "_logic/gameplay/determineVictory";
import calculateScore from "_logic/scoring/calculateScore";
import calculateHighScore from "_logic/scoring/calculateHighScore";
import calculateMultiplier from "_logic/scoring/calculateMultiplier";

const endRoundWithPlayerChoice = (state: GameplayState, player_choice: Choice): GameplayState => {
    const cpu_choice = generateCPUChoice();
    const victory = determineVictory(player_choice, cpu_choice);
    const score = calculateScore(victory, state.score, state.multiplier);
    const high_score = calculateHighScore(score, state.high_score);

    return {
        ...state,
        player_choice,
        cpu_choice,
        result: victory,
        multiplier: calculateMultiplier(victory, state.multiplier),
        score,
        high_score
    };
};

export default endRoundWithPlayerChoice;