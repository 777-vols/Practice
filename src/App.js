import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import Header from "@components/Header/Header";
import Settings from "@pages/Settings/Settings";
import HomeContainer from "@pages/Home/HomeContainer";

const AppWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	font-family: 'Open Sans', sans-serif;
	max-width:100%;
	height: 100vh;
	/* background: gray; */
	background-color: ${props => props.theme.colors.colored.BgColor};
	color:${props => props.theme.colors.dark.text};
	
`

const App = () => {
	return (
		<AppWrapper>
			<Header />

			<Routes>
				<Route path="/" element={<HomeContainer />} />
				<Route path={'/settings'} element={<Settings />} />
			</Routes>

		</AppWrapper>
	)
}

export default App;