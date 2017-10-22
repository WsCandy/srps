declare type GameplayState = {
    playerChoice: ?number,
    cpuChoice: number,
    victory: ?string,
    timer: number,
    round: number,
    active: boolean
};