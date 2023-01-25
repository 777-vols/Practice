import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";

const AppWrapper = styled.div`
	max-width:100%;
	/* max-height: 100%; */
	height: 100vh;
	background: gray;
`
const AppWrapperContent = styled.div`
	/* max-width:100%;
	height: 100vh;
	background: gray; */
`

const App = () => {
	return (
		<AppWrapper>
			<Header />

			<AppWrapperContent>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={'/settings'} element={<Settings />} />
				</Routes>
			</AppWrapperContent>

		</AppWrapper>
	)
}

export default App;