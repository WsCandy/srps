import React from "react";
import Result from "_model/Result";
import Action from "_components/accessories/Action";

interface Props {
    readonly currentRound: number;
    readonly endGame: () => void;
    readonly resetGame: () => void;
    readonly startNextRound: () => void;
    readonly result?: Result;
}

const NextRound: React.FunctionComponent<Props> = props => {
    const { result, currentRound, endGame, resetGame, startNextRound } = props;

    if (!result) {
        return null;
    }

    if (currentRound >= 10) {
        return (
            <>
                <Action onClick={resetGame}>
                    Play Again?
                </Action>
                <Action onClick={endGame}>
                    End Game
                </Action>
            </>
        );
    }

    return (
        <Action onClick={startNextRound}>
            Next Round
        </Action>
    );
};

export default NextRound;