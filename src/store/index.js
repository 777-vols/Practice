import { combineReducers } from "redux";
import HomeReducer from './reducers/HomeReducer';
import SettingsReducer from './reducers/SettingsReducer';
import { createStore } from "redux";


const reducer = combineReducers({
	HomePage: HomeReducer,
	SettingsPage: SettingsReducer
})

const store = createStore(reducer);

export default store;