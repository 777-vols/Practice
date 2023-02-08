import { connect } from "react-redux";
import Keyboard from "./Keyboard";

const MapStateToProps = (state) => {
	return {
		newTheme: '',
	}
}
const MapDispatchToProps = (dispatch) => {
	return {

	}
}

const KeyboardContainer = connect(MapStateToProps, MapDispatchToProps)(Keyboard);

export default KeyboardContainer;