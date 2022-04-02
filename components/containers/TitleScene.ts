import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { connect } from "react-redux";
import TitleScene from "_components/TitleScene";
import { MapDispatchToProps } from "_redux/model/MapDispatchToProps";
import gameStarted from "_redux/actions/gameplay/gameStarted";

type Props = ContainerOwnProps<typeof TitleScene, Actions>
type Actions = PickProps<typeof TitleScene, "startGame">

const mapDispatchToProps: MapDispatchToProps<Actions, Props> = dispatch => ({
    startGame: () => dispatch(gameStarted())
});

export default connect(null, mapDispatchToProps)(TitleScene);
