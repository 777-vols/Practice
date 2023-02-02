import { connect } from "react-redux";
import { ThemeChangeActionCreator } from '@store/reducers/SettingsReducer';
import SettingsPanel from "./SettingsPanel";

const MapStateToProps = (state) => {
	// console.log(state);
	return {
		SettingsPage: state.SettingsPage,
	}
}
const MapDispatchToProps = (dispatch) => {
	return {
		NewColor: (color) => {
			let action = ThemeChangeActionCreator(color);
			dispatch(action);
		}
	}
}

const SettingsPanelContainer = connect(MapStateToProps, MapDispatchToProps)(SettingsPanel);

export default SettingsPanelContainer;