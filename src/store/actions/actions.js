import * as actionTypes from '@constants/constatnts'

export const UpdateNewExpressionActionCreator = (text) => ({
	type: actionTypes.UPDATE_NEW_EXPRESSION, newExpresion: text
})

export const DeleteAllHistoryActionCreator = () => ({
	type: actionTypes.DELETE_ALL_HISTORY
})

export const ThemeChangeActionCreator = (color) => ({
	type: actionTypes.THEME_CHANGE, newTheme: color
})



export const onNumClick = (number) => ({
	type: actionTypes.INPUT_NUMBER,
	number,
});

export const onPlusClick = () => ({
	type: actionTypes.PLUS,
});

export const onMinusClick = () => ({
	type: actionTypes.MINUS,
});

export const onMultiplyClick = () => ({
	type: actionTypes.MULTIPLY,
});

export const onDivideClick = () => ({
	type: actionTypes.DIVIDE,
});

export const onEqualClick = () => ({
	type: actionTypes.EQUAL,
});

export const onBracketClick = (bracket) => ({
	type: actionTypes.BRACKET,
	bracket
});

export const onDotClick = () => ({
	type: actionTypes.DOT,
});

export const onClearClickSumbol = () => ({
	type: actionTypes.CLEAR_SUMBOL,
});

export const onClearExpressionClick = () => ({
	type: actionTypes.CLEAR_EXPRESSION,
});
