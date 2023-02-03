let UPDATE_NEW_EXPRESSION = 'UPDATE_NEW_EXPRESSION';
let DELETE_ALL_HISTORY = 'DELETE_ALL_HISTORY';

let initialState = {
	history: [
		{ id: 1, expression: "1+2*3" },
		{ id: 2, expression: "9/2*3" },
		{ id: 4, expression: "1-5/2" },
		{ id: 5, expression: "1-5/2" },
		{ id: 6, expression: "1-5/2" },
		{ id: 7, expression: "1-5/2" },
		{ id: 8, expression: "1-5/2" },
		{ id: 9, expression: "1-5/2" },
		{ id: 10, expression: "1-5/2" },
		{ id: 11, expression: "1-5/2" },
		{ id: 12, expression: "1-5/2" },
		{ id: 13, expression: "1-5/2" },
		{ id: 14, expression: "1-5/2" },
		{ id: 15, expression: "1-5/2" },
		{ id: 16, expression: "1-5/2" },
		{ id: 17, expression: "1-5/2" },
		{ id: 18, expression: "1-5/2" },
	],
	buttons: [
		{ id: 0, name: "C" },
		{ id: 1, name: "7" },
		{ id: 2, name: "8" },
		{ id: 3, name: "9" },
		{ id: 4, name: "*" },
		{ id: 5, name: "-" },
		{ id: 6, name: "4" },
		{ id: 7, name: "5" },
		{ id: 8, name: "6" },
		{ id: 9, name: "/" },
		{ id: 10, name: "+" },
		{ id: 11, name: "1" },
		{ id: 12, name: "2" },
		{ id: 13, name: "3" },
		{ id: 14, name: "=" },
		{ id: 15, name: "." },
		{ id: 16, name: "(" },
		{ id: 17, name: "0" },
		{ id: 18, name: ")" },
		{ id: 19, name: "CE" },
	],
	newExpression: ''
};

const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_EXPRESSION: {
			return {
				...state,
				newExpression: action.newExpresion,
			}
		}
		case DELETE_ALL_HISTORY: {
			return {
				...state,
				history: [],
				newExpression: ''
			}
		}
		default:
			return state;
	}
}

export default HomeReducer;

export const UpdateNewExpressionActionCreator = (text) => ({
	type: UPDATE_NEW_EXPRESSION, newExpresion: text
})

export const DeleteAllHistoryActionCreator = () => ({
	type: DELETE_ALL_HISTORY
})