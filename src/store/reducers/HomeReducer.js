let UPDATE_NEW_EXPRESSION = 'UPDATE_NEW_EXPRESSION';

let initialState = {
	history: [
		{ id: 1, expression: "1+2*3" },
		{ id: 2, expression: "9/2*3" },
		{ id: 3, expression: "1-5/2" },
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
		}
			return {
				...state,
				newExpression: action.newExpresion,
			}
		default:
			return state;
	}
}

export default HomeReducer;

export const UpdateNewExpressionActionCreator = (text) => ({
	type: UPDATE_NEW_EXPRESSION, newExpresion: text
})