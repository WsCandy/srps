import React from "react";
import container from "_styles/modules/container.module.css";
import wrap from "_styles/modules/wrap.module.css";
import block from "_styles/modules/block.module.css";
import info from "./styles/info.module.css";
import styles from "_util/styles";
import leftPadNumber from "_util/leftPadNumber";

interface Props {
    readonly score: number;
    readonly highScore: number;
    readonly timeRemaining: number;
}

const Info: React.FunctionComponent<Props> = props => {
    const { score, highScore, timeRemaining } = props;

    return (
        <div className={styles(info.base, container.base, container.row)}>
            <div className={styles(wrap.base, wrap.full, wrap.between)}>
                <div className={block.base}>
                    <p>Score</p>
                    <p>{leftPadNumber(score)}</p>
                </div>
                <div className={styles(block.base, block.center)}>
                    <p>Top- {leftPadNumber(highScore)}</p>
                </div>
                <div className={styles(block.base, block.right)}>
                    <p>Time</p>
                    <p>{leftPadNumber(timeRemaining, 3)}</p>
                </div>
            </div>
        </div>
    );
};

export default Info;