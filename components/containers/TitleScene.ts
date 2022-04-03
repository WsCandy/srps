import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { connect } from "react-redux";
import TitleScene from "_components/TitleScene";
import { MapDispatchToProps } from "_redux/model/MapDispatchToProps";
import gameStarted from "_redux/actions/gameplay/gameStarted";
import { MapStateToProps } from "_redux/model/MapStateToProps";

type Props = ContainerOwnProps<typeof TitleScene, StateProps & Actions>
type Actions = PickProps<typeof TitleScene, "startGame">
type StateProps = PickProps<typeof TitleScene, "highScore">

const mapStateToProps: MapStateToProps<StateProps> = state => ({
    highScore: state.gameplay.high_score
});

const mapDispatchToProps: MapDispatchToProps<Actions, Props> = dispatch => ({
    startGame: () => dispatch(gameStarted())
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleScene);
