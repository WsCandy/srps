import React, { useEffect, useRef } from "react";
import CPUChoice from "_components/accessories/CPUChoice";
import Choice from "_model/Choice";
import Victory from "_components/accessories/Victory";
import Result from "_model/Result";
import container from "_styles/modules/container.module.css";
import styles from "_util/styles";
import Block from "_components/accessories/Block";
import NextRound from "_components/accessories/containers/NextRound";
import generateCPUChoice from "_logic/gameplay/generateCPUChoice";

interface Props {
    readonly playRound: (choice: Choice) => void;
    readonly reduceTimer: () => void;
    readonly currentRound: number;
    readonly remainingTime: number;
    readonly playerChoice?: Choice;
    readonly cpuChoice?: Choice;
    readonly result?: Result;
}

const GameplayScene: React.FunctionComponent<Props> = props => {
    const { playRound, reduceTimer, currentRound, playerChoice, cpuChoice, result, remainingTime } = props;
    const timer = useRef<any>()

    useEffect(() => {
        if(remainingTime <= 0 && !playerChoice) {
            playRound(generateCPUChoice())
        }

        if (remainingTime <= 0 || playerChoice) {
            clearTimeout(timer.current)
            return
        }

        timer.current = setTimeout(reduceTimer, 1000)
    }, [remainingTime, playerChoice])

    return (
        <>
            <CPUChoice cpuChoice={cpuChoice} />
            <Victory result={result} />
            <div className={styles(container.base, container.grow, container.row, container.center)}>
                <Block onClick={playRound} choice={Choice.ROCK} playerChoice={playerChoice} />
                <Block onClick={playRound} choice={Choice.PAPER} playerChoice={playerChoice} />
                <Block onClick={playRound} choice={Choice.SCISSORS} playerChoice={playerChoice} />
            </div>
            <div className={styles(container.base, container.center, container.min)}>
                <NextRound currentRound={currentRound} result={result} />
            </div>
        </>
    );
};

export default GameplayScene;