import * as actionsTypes from '@constants/constatnts'

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
		case actionsTypes.THEME_CHANGE: {
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



