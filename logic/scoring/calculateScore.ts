import Result from "_model/Result";

const calculateScore = (result: Result, score: number, multiplier: number): number => {
    switch (result) {
        case Result.WIN:
            return score + (100 * multiplier)
        default:
            return score
    }
};

export default calculateScore;