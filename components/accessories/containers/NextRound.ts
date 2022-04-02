import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { connect } from "react-redux";
import NextRound from "_components/accessories/NextRound";
import { MapDispatchToProps } from "_redux/model/MapDispatchToProps";
import gameEnded from "_redux/actions/gameplay/gameEnded";
import gameReset from "_redux/actions/gameplay/gameReset";
import roundStarted from "_redux/actions/gameplay/roundStarted";

type Props = ContainerOwnProps<typeof NextRound, Actions>
type Actions = PickProps<typeof NextRound, "endGame" | "startNextRound" | "resetGame">

const mapDispatchToProps: MapDispatchToProps<Actions, Props> = dispatch => ({
    endGame: () => dispatch(gameEnded()),
    resetGame: () => dispatch(gameReset()),
    startNextRound: () => dispatch(roundStarted())
});

export default connect(null, mapDispatchToProps)(NextRound);