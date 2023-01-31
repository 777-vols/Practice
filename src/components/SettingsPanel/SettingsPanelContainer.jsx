// import { connect } from "react-redux";
// import { UpdateNewExpressionActionCreator } from '@store/reducers/HomeReducer';
// import Home from './Home'

// const MapStateToProps = (state) => {
// 	// console.log(state);
// 	return {
// 		HomePage: state.HomePage,
// 		newExpression: state.HomePage.newExpression
// 	}
// }
// const MapDispatchToProps = (dispatch) => {
// 	return {
// 		UpdateExpression: (text) => {
// 			let action = UpdateNewExpressionActionCreator(text);
// 			dispatch(action);
// 		}
// 	}
// }

// const HomeContainer = connect(MapStateToProps, MapDispatchToProps)(Home);

// export default HomeContainer;