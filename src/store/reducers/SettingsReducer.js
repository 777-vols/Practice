let THEME_CHANGE = 'THEME_CHANGE';

let initialState = {
	colors: {
		light: {
			BgColor: "white",
			text: "black"
		},
		dark: {
			BgColor: "rgb(73, 73, 73)",
			text: "white"
		},
		colored: {
			BgColor: "rgb(121, 121, 224)",
			text: "red"
		}
	},
};

const SettingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case THEME_CHANGE: {
		}
			for (let color in Object.keys(state.colors)) {
				if (color === action.newTheme)
					return state.colors[color]
			}
		default:
			return state;
	}
}

export default SettingsReducer;

export const ThemeChangeActionCreator = (color) => ({
	type: THEME_CHANGE, newTheme: color
})