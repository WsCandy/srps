// @flow
import React, { Component } from 'react';

type Props = {
    text: string,
    action: Function,
    className: string
}

const Action = (props: Props) => {
    const {text, action} = props;
    return (
        <a onClick={action} className={`action  ${props.className}`}>{text}</a>
    );
};
export default Action;