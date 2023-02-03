let THEME_CHANGE = 'THEME_CHANGE';

let initialState = {
	colors: {
		light: 'light',
		dark: 'dark',
		colored: 'colored'
	},
	newTheme: 'light'
};

const SettingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case THEME_CHANGE: {
		}
			for (let color of Object.keys(state.colors)) {
				if (color === action.newTheme) {
					return {
						...state,
						newTheme: state.colors[color]
					}
				}
			}
		default:
			return state;
	}
}

export default SettingsReducer;

export const ThemeChangeActionCreator = (color) => ({
	type: THEME_CHANGE, newTheme: color
})

