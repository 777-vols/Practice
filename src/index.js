import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/index'
import theme from '@constants/constatnts'


const Global = createGlobalStyle`
*{
	margin:0;
	padding:0;
	box-sizing:border-box;
}

body[data-theme='light'] {
   background-color: #fff;
	color: black;
}
body[data-theme='dark'] {
   background-color: rgb(30, 30, 30);
	color: white;
}
body[data-theme='colored'] {
   background-color: rgb(119, 74, 164);
	color: #FFD700;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Provider store={store}>
				<Global />
				<App />
			</Provider>
		</BrowserRouter>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
