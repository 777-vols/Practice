import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HomeReducer from './reducers/HomeReducer';

const rootReducer = combineReducers({
	HomePage: HomeReducer,
})

let store = configureStore({
	reducer: rootReducer
});

export default store;