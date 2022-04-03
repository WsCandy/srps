import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { MapStateToProps } from "_redux/model/MapStateToProps";
import { connect } from "react-redux";
import Info from "_components/accessories/Info";

type Props = ContainerOwnProps<typeof Info, StateProps>
type StateProps = PickProps<typeof Info, "score" | "timeRemaining" | "isActive" | "currentRound" | "multiplier">

const mapStateToProps: MapStateToProps<StateProps, Props> = state => ({
    score: state.gameplay.score,
    timeRemaining: state.gameplay.timer,
    isActive: state.gameplay.active,
    currentRound: state.gameplay.round,
    multiplier: state.gameplay.multiplier
});

export default connect(mapStateToProps)(Info);
