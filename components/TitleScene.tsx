import React from "react";
import Title from "_components/accessories/Title";
import styles from "_util/styles";
import container from "_styles/modules/container.module.css";
import Action from "_components/accessories/Action";
import leftPadNumber from "_util/leftPadNumber";
import info from "./accessories/styles/info.module.css";
import wrap from "_styles/modules/wrap.module.css";
import { Trans } from "react-i18next";

interface Props {
    readonly startGame: () => void;
    readonly highScore: number;
}

const TitleScene: React.FunctionComponent<Props> = props => {
    const { startGame, highScore } = props;

    return (
        <>
            <Title />
            <div className={styles(container.base, container.grow, container.center)}>
                <div className={styles(wrap.base, wrap.column)}>
                    <Action onClick={startGame}>
                        <Trans i18nKey="common:1_player_game" />
                    </Action>
                    <div className={styles(info.base, info.high_score)}>
                        <Trans i18nKey="common:top" values={{ high_score: leftPadNumber(highScore) }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitleScene;