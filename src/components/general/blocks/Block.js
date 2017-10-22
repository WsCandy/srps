// @flow
import React, { Component } from 'react';

type Props = {
    onClick: Function,
    gameplay: GameplayState,
    choice: number
}

const Block = (props: Props) => {
    const {onClick, gameplay, choice} = props;
    return (
        <a className={`item-block  item-block--${choice} ${gameplay.playerChoice === choice ? "active" : "" } ${gameplay.playerChoice === null ? 'interactive' : ''}`} onClick={e => onClick()}/>
    );
};
export default Block;