import React from "react";
import container from "_styles/modules/container.module.css";
import wrap from "_styles/modules/wrap.module.css";
import block from "_styles/modules/block.module.css";
import info from "./styles/info.module.css";
import styles from "_util/styles";
import leftPadNumber from "_util/leftPadNumber";
import { Trans } from "react-i18next";

interface Props {
    readonly score: number;
    readonly timeRemaining: number;
    readonly isActive: boolean;
    readonly currentRound: number;
    readonly multiplier: number;
}

const Info: React.FunctionComponent<Props> = props => {
    const { score, timeRemaining, isActive, currentRound, multiplier } = props;
    const multi = isActive ? multiplier : 0;

    return (
        <div className={styles(info.base, container.base, container.row)}>
            <div className={styles(wrap.base, wrap.full, wrap.between)}>
                <div className={block.base}>
                    <p>
                        <Trans i18nKey="common:score" />
                    </p>
                    <p>{leftPadNumber(score)}</p>
                </div>

                <div className={styles(info.coin)}>
                    <p><span>x</span>{leftPadNumber(multi, 2)}</p>
                </div>

                <div className={styles(block.base, block.center)}>
                    <p><Trans i18nKey="common:round" /></p>
                    <p>1-{currentRound}</p>
                </div>

                <div className={styles(block.base, block.right)}>
                    <p><Trans i18nKey="common:time" /></p>
                    {isActive && <p>{leftPadNumber(timeRemaining, 3)}</p>}
                </div>
            </div>
        </div>
    );
};

export default Info;