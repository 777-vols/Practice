import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import Header from "@components/Header/Header";
import Home from "@pages/Home/Home";
import Settings from "@pages/Settings/Settings";

const AppWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	font-family: 'Open Sans', sans-serif;
	max-width:100%;
	height: 100vh;
	/* background: gray; */
`

const App = () => {
	return (
		<AppWrapper>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path={'/settings'} element={<Settings />} />
			</Routes>

		</AppWrapper>
	)
}

export default App;