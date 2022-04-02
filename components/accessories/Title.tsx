import React from "react";
import styles from "_util/styles";
import wrap from "_styles/modules/wrap.module.css"
import title from "./styles/title.module.css";

const Title: React.FunctionComponent = () => {
    return (
        <div className={styles(wrap.base, wrap.center, wrap.column)}>
            <div className={styles(title.block, title.shadow)}>
                <p>super</p>
                <p className={title.main}>
                    Rock, Paper, Scissors.
                </p>
            </div>
            <p className={title.credit}>&copy; 2022 WsCandy</p>
        </div>
    );
};

export default Title;