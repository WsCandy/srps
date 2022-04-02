import React from "react";
import wrap from "_styles/modules/wrap.module.css";
import cpu from "./styles/cpu.module.css";
import styles from "_util/styles";
import Choice from "_model/Choice";

interface Props {
    readonly playerChoice?: Choice;
    readonly cpuChoice?: Choice;
}

const CPUChoice: React.FunctionComponent<Props> = props => {
    const { cpuChoice, playerChoice } = props;

    return (
        <div className={styles(wrap.base, wrap.center, wrap.column, cpu.base)}>
            <p>CPU Choice - {typeof playerChoice === "undefined" ? "?" : cpuChoice}</p>
        </div>
    );
};

export default CPUChoice;