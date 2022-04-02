const calculateHighScore = (score: number, highScore: number): number => {
    if (highScore > score) {
        return highScore;
    }

    return score;
};

export default calculateHighScore;