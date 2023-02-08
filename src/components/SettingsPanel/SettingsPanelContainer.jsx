import { connect } from "react-redux";
import { ThemeChangeActionCreator } from '@store/actions/actions';
import { DeleteAllHistoryActionCreator } from '@store/actions/actions'
import SettingsPanel from "./SettingsPanel";

const MapStateToProps = (state) => {
	return {
		newTheme: state.SettingsPage.newTheme,
	}
}
const MapDispatchToProps = (dispatch) => {
	return {
		NewColor: (color) => {
			let action = ThemeChangeActionCreator(color);
			dispatch(action);
		},
		DeleteAllHistory: () => {
			let action = DeleteAllHistoryActionCreator();
			dispatch(action);
		}
	}
}

const SettingsPanelContainer = connect(MapStateToProps, MapDispatchToProps)(SettingsPanel);

export default SettingsPanelContainer;