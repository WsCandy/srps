import Choice from "_model/Choice";
import Result from "_model/Result";

interface GameplayState {
    readonly player_choice?: Choice;
    readonly cpu_choice?: Choice;
    readonly result?: Result;
    readonly timer: number;
    readonly round: number;
    readonly active: boolean;
    readonly score: number;
    readonly high_score: number;
    readonly multiplier: number;
}

export default GameplayState;