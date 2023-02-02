import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HomeReducer from './reducers/HomeReducer';
import SettingsReducer from './reducers/SettingsReducer';

const rootReducer = combineReducers({
	HomePage: HomeReducer,
	SettingsPage: SettingsReducer
})

let store = configureStore({
	reducer: rootReducer
});

export default store;