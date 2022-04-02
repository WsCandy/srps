import Result from "_model/Result";

const calculateMultiplier = (result: Result, current: number): number => {
    switch (result) {
        case Result.WIN:
            return current + 1;
        case Result.DRAW:
            return current;
        case Result.LOSE:
            return 1
    }
};

export default calculateMultiplier;