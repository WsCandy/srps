import React from "react";
import Choice from "_model/Choice";
import block from "./styles/block.module.css";
import styles from "_util/styles";
import addClass from "_util/addClass";

interface Props {
    readonly onClick: (choice: Choice) => void;
    readonly choice: Choice;
    readonly playerChoice?: Choice;
}

const Block: React.FunctionComponent<Props> = props => {
    const { onClick, choice, playerChoice } = props;
    const classNames = [
        block.base,
        block[choice],
        addClass(block.active, choice === playerChoice),
        addClass(block.interactive, typeof playerChoice === "undefined")
    ];

    return (
        <button className={styles(...classNames)} onClick={() => {
            if (typeof playerChoice === "undefined") {
                onClick(choice);
            }
        }} />
    );
};

export default Block;