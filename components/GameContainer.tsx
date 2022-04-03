import React, { useEffect } from "react";
import TitleScene from "_components/containers/TitleScene";
import styles from "_util/styles";
import container from "_styles/modules/container.module.css";
import Info from "_components/accessories/containers/Info";
import Ground from "_components/accessories/Ground";
import GameplayScene from "_components/containers/GameplayScene";
import Clouds from "_components/accessories/clouds";

interface Props {
    readonly isActive: boolean;
    readonly loadHighScore: (score: number) => void;
}

const GameContainer: React.FunctionComponent<Props> = props => {
    const { isActive, loadHighScore } = props;

    useEffect(() => {
        const high_score = localStorage.getItem("high_score");

        if (!high_score) {
            return
        }

        loadHighScore(parseInt(high_score, 10));
    }, [])

    return (
        <div className={styles(container.base, container.full)}>
            <Info />
            <Clouds />
            {isActive ? <GameplayScene /> : null}
            {!isActive ? <TitleScene />: null}
            <Ground />
        </div>
    )
};

export default GameContainer;