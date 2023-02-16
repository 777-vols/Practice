import * as actionsTypes from '@constants/constatnts'
import { FirstValue } from '@utils/FirstValue'
import { PlusCommand } from '@utils/PlusCommand'
import { MinusCommand } from '@utils/MinusCommand'
import { MultiplyCommand } from '@utils/MultiplyCommand'
import { DevideCommand } from '@utils/DevideCommand'
import { ValueManager } from '@utils/ValueManager'
import { Receiver } from '@utils/Receiver'

let initialState = {
	history: [
		{ id: 1, expression: "1+2*3" },
		{ id: 2, expression: "9/2*3" },
		{ id: 4, expression: "1-5/2" },
		{ id: 5, expression: "1-5/2" },
		// { id: 6, expression: "1-5/2" },
		// { id: 7, expression: "1-5/2" },
		// { id: 8, expression: "1-5/2" },
		// { id: 9, expression: "1-5/2" },
		// { id: 10, expression: "1-5/2" },
		// { id: 11, expression: "1-5/2" },
		// { id: 12, expression: "1-5/2" },
		// { id: 13, expression: "1-5/2" },
		// { id: 14, expression: "1-5/2" },
		// { id: 15, expression: "1-5/2" },
		// { id: 16, expression: "1-5/2" },
		// { id: 17, expression: "1-5/2" },
		// { id: 18, expression: "1-5/2" },
	],
	nowOperator: "",
	valueManager: new ValueManager(),
	receiver: new Receiver(),
	historyItem: '',
};

const HomeReducer = (state = initialState, action) => {
	const calcFac = {};

	calcFac["PLUS"] = () => {
		state.historyItem = state.historyItem + ' + ';
		const command = new PlusCommand(state.valueManager.value);
		return command;
	};
	calcFac["MINUS"] = () => {
		state.historyItem = state.historyItem + ' - ';
		const command = new MinusCommand(state.valueManager.value);
		return command;
	};
	calcFac["MULTIPLY"] = () => {
		state.historyItem = state.historyItem + ' * ';
		const command = new MultiplyCommand(state.valueManager.value);
		return command;
	};
	calcFac["DIVIDE"] = () => {
		state.historyItem = state.historyItem + ' / ';
		const command = new DevideCommand(state.valueManager.value);
		return command;
	};


	if (calcFac.hasOwnProperty(action.type)) {
		let command;
		if (state.nowOperator === "") {
			command = new FirstValue(state.valueManager.value);
		} else if (state.nowOperator === "EQUAL") {
			state.valueManager.value = 0;
			state.nowOperator = action.type;
			return { ...state };
		}
		else {
			command = calcFac[state.nowOperator]();
		}
		state.receiver.addCommand(command);
		state.receiver.showingResult = true;

		state.historyItem = state.historyItem + state.valueManager.value;

		state.valueManager.value = 0;
		state.nowOperator = action.type;
		return { ...state };
	} else {
		switch (action.type) {
			case actionsTypes.INPUT_NUMBER:
				state.receiver.showingResult = false;
				state.valueManager.inputValue(action.number);
				return { ...state };

			case actionsTypes.CLEAR_EXPRESSION:
				state.nowOperator = "";
				state.valueManager.value = 0;
				state.receiver.showingResult = false;
				return { ...state };

			case actionsTypes.CLEAR_ALL:
				state.nowOperator = "";
				state.valueManager.value = 0;
				state.receiver.showingResult = false;
				return { ...state, history: [] };

			case actionsTypes.EQUAL:
				state.receiver.addCommand(calcFac[state.nowOperator]());
				state.receiver.showingResult = true;
				state.nowOperator = action.type;
				state.historyItem = state.historyItem + state.valueManager.value;

				let obj = { id: 19, expression: state.historyItem };
				state.historyItem = '' + state.receiver.execute();
				return { ...state, history: [obj, ...state.history,] };

			case actionsTypes.DELETE_ALL_HISTORY: {
				return {
					...state,
					history: [],
				}
			}

			default:
				return state;
		}
	}
}


export default HomeReducer;