import React from "react";
import wrap from "_styles/modules/wrap.module.css";
import cpu from "./styles/cpu.module.css";
import styles from "_util/styles";
import Choice from "_model/Choice";
import { Trans } from "react-i18next";

interface Props {
    readonly cpuChoice?: Choice;
}

const CPUChoice: React.FunctionComponent<Props> = props => {
    const { cpuChoice } = props;

    return (
        <div className={styles(wrap.base, wrap.center, wrap.column, cpu.base)}>
            {typeof cpuChoice === "undefined" && (
                <p>
                    <Trans i18nKey="common:cpu_choice" />
                </p>
            )}
            {typeof cpuChoice !== "undefined" && (
                <p>
                    <Trans i18nKey="common:cpu_chose">
                        <img src={`/images/${cpuChoice}.png`} alt={cpuChoice} height={32} width={32} />
                    </Trans>
                </p>
            )}
        </div>
    );
};

export default CPUChoice;