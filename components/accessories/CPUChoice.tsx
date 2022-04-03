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
            <p>CPU Choice - {typeof playerChoice === "undefined" && "?"}</p>
            {cpuChoice && <img src={`/images/${cpuChoice}.png`} alt={cpuChoice} height={32} width={32} />}
        </div>
    );
};

export default CPUChoice;