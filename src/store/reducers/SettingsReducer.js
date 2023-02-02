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
			// console.log(action.newTheme);
			for (let color of Object.keys(state.colors)) {
				// console.log(color);
				if (color === action.newTheme) {
					// console.log(state.colors[color]);
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