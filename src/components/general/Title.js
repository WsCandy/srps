// @flow
import React, { Component } from 'react';

const Title = () => {
    return (
        <div className="wrap wrap--center  wrap--column title">
            <div className="title__block title--shadow">
                <p>super</p>
                <p className="title__main">
                    Rock, Paper, Scisscors.
                </p>
            </div>
            <p className="credit">&copy; 2017 Samuel Woodbridge</p>
        </div>
    );
};
export default Title;