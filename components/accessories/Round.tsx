import React from "react";
import wrap from "_styles/modules/wrap.module.css";
import round from "./styles/round.module.css";
import styles from "_util/styles";

interface Props {
    readonly currentRound: number;
}

const Round: React.FunctionComponent<Props> = props => {
    const { currentRound } = props;

    return (
        <div className={styles(wrap.base, wrap.center, wrap.column, round.base)}>
            <p>Round 1-{currentRound}</p>
        </div>
    );
};

export default Round;