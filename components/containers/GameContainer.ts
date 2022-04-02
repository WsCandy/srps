import ContainerOwnProps from "_model/util/ContainerOwnProps";
import PickProps from "_model/util/PickProps";
import { MapStateToProps } from "_redux/model/MapStateToProps";
import { connect } from "react-redux";
import GameContainer from "_components/GameContainer";
import { MapDispatchToProps } from "_redux/model/MapDispatchToProps";
import highScoreLoaded from "_redux/actions/gameplay/highScoreLoaded";

type Props = ContainerOwnProps<typeof GameContainer, StateProps & Actions>
type StateProps = PickProps<typeof GameContainer, "isActive">
type Actions = PickProps<typeof GameContainer, "loadHighScore">

const mapStateToProps: MapStateToProps<StateProps, Props> = state => ({
    isActive: state.gameplay.active
});

const mapDispatchToProps: MapDispatchToProps<Actions, Props> = dispatch => ({
    loadHighScore: score => dispatch(highScoreLoaded(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
