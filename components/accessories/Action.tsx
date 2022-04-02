import React from "react";
import styles from "_util/styles";
import action from "./styles/action.module.css";

interface Props {
    readonly onClick: () => void;
}

const Action: React.FunctionComponent<Props> = props => {
    const { onClick, children } = props;

    return (
        <button onClick={onClick} className={styles(action.base, action.center)}>
            {children}
        </button>
    );
};

export default Action;