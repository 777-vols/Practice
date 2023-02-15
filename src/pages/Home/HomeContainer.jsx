import { connect } from "react-redux";
import Home from './Home'
import * as actions from '@store/actions/actions'
import { bindActionCreators } from "redux";


const MapStateToProps = (state) => {
	return {
		HomePage: state.HomePage,
		value: state.HomePage.valueManager.value,
		receiver: state.HomePage.receiver
	}
}
const MapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch),
	};
}

const HomeContainer = connect(MapStateToProps, MapDispatchToProps)(Home);

export default HomeContainer;