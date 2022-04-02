import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { MapStateToProps } from "_redux/model/MapStateToProps";
import { connect } from "react-redux";
import GameplayScene from "_components/GameplayScene";
import { MapDispatchToProps } from "_redux/model/MapDispatchToProps";
import moveChosen from "_redux/actions/gameplay/moveChosen";
import timerReduced from "_redux/actions/gameplay/timerReduced";

type Props = ContainerOwnProps<typeof GameplayScene, StateProps & Actions>
type StateProps = PickProps<typeof GameplayScene, "playerChoice" | "cpuChoice" | "currentRound" | "remainingTime" | "result">
type Actions = PickProps<typeof GameplayScene, "playRound" | "reduceTimer">

const mapStateToProps: MapStateToProps<StateProps, Props> = state => ({
    playerChoice: state.gameplay.player_choice,
    cpuChoice: state.gameplay.cpu_choice,
    currentRound: state.gameplay.round,
    remainingTime: state.gameplay.timer,
    result: state.gameplay.result
});

const mapDispatchToProps: MapDispatchToProps<Actions, Props> = dispatch => ({
    playRound: choice => dispatch(moveChosen(choice)),
    reduceTimer: () => dispatch(timerReduced())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameplayScene);
