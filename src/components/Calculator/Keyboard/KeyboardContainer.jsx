// import { connect } from "react-redux";
// import Keyboard from "./Keyboard";
// import * as actions from '@store/actions/actions'



// const MapStateToProps = (state) => {
// 	return {

// 	}
// }
// const MapDispatchToProps = (dispatch) => {
// 	return {
// 		onNumClick: (num) => {
// 			let action = actions.onNumClick(num);
// 			dispatch(action);
// 		},

// 		onMultiplyClick: () => {
// 			let action = actions.onMultiplyClick();
// 			dispatch(action);
// 		},
// 		onDivideClick: () => {
// 			let action = actions.onDivideClick();
// 			dispatch(action);
// 		},
// 		onPlusClick: () => {
// 			let action = actions.onPlusClick();
// 			dispatch(action);
// 		},
// 		onMinusClick: () => {
// 			let action = actions.onMinusClick();
// 			dispatch(action);
// 		},
// 		onEqualClick: () => {
// 			let action = actions.onEqualClick();
// 			dispatch(action);
// 		},
// 		onDotClick: () => {
// 			let action = actions.onDotClick();
// 			dispatch(action);
// 		},
// 		onBracketClick: (bracket) => {
// 			let action = actions.onBracketClick(bracket);
// 			dispatch(action);
// 		},

// 		onClearClickSumbol: () => {
// 			let action = actions.onClearClickSumbol();
// 			dispatch(action);
// 		},

// 		onClearExpressionClick: () => {
// 			let action = actions.onClearExpressionClick();
// 			dispatch(action);
// 		},
// 	};
// };

// const KeyboardContainer = connect(MapStateToProps, MapDispatchToProps)(Keyboard);

// export default KeyboardContainer;