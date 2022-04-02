import Choice from "_model/Choice";

const generateCPUChoice = (): Choice => {
    const roll: number = Math.random();

    if(roll > 0.33 && roll < 0.66) {
        return Choice.PAPER
    }

    if(roll > 0.66) {
        return Choice.SCISSORS;
    }

    return Choice.ROCK;
};

export default generateCPUChoice;