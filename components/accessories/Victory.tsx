import React from "react";
import Result from "_model/Result";
import victory from "./styles/victory.module.css";
import styles from "_util/styles";

interface Props {
    readonly result?: Result;
}

const Victory: React.FunctionComponent<Props> = props => {
    const { result } = props;

    return (
        <div className={styles(victory.base, victory.wrap)}>
            {typeof result !== "undefined" && <p>{result}</p>}
        </div>
    );
};

export default Victory;