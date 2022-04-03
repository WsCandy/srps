import React from "react";
import styles from "_util/styles";
import cloud from "./styles/cloud.module.css";

const clouds: React.FunctionComponent = () => {
    return (
        <>
            <div className={styles(cloud.base, cloud.large)} />
            <div className={styles(cloud.base, cloud.small)} />
        </>
    );
};

export default clouds;