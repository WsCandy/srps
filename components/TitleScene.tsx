import React from "react";
import Title from "_components/accessories/Title";
import styles from "_util/styles";
import container from "_styles/modules/container.module.css";
import Action from "_components/accessories/Action";

interface Props {
    readonly startGame: () => void;
}

const TitleScene: React.FunctionComponent<Props> = props => {
    const { startGame } = props;

    return (
        <>
            <Title />
            <div className={styles(container.base, container.grow, container.center)}>
                <Action onClick={startGame}>
                    1 player game
                </Action>
            </div>
        </>
    );
};

export default TitleScene;