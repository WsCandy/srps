import React from "react";
import Result from "_model/Result";
import Action from "_components/accessories/Action";
import { Trans } from "react-i18next";

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
                    <Trans i18nKey="common:play_again" />
                </Action>
                <Action onClick={endGame}>
                    <Trans i18nKey="common:end_game" />
                </Action>
            </>
        );
    }

    return (
        <Action onClick={startNextRound}>
            <Trans i18nKey="common:next_round" />
        </Action>
    );
};

export default NextRound;