import * as actionsTypes from '@constants/constatnts'

export const UpdateNewExpressionActionCreator = (text) => ({
	type: actionsTypes.UPDATE_NEW_EXPRESSION, newExpresion: text
})

export const DeleteAllHistoryActionCreator = () => ({
	type: actionsTypes.DELETE_ALL_HISTORY
})

export const ThemeChangeActionCreator = (color) => ({
	type: actionsTypes.THEME_CHANGE, newTheme: color
})