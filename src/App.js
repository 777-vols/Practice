import React from "react";
import { Route } from "react-router-dom";
import styled from 'styled-components'

const AppWrapper = styled.div`
	width:140vh;
	min-height: 70vh;
	padding: 2rem;
	border-radius: 10px;
	background: grey;
	margin-top: 110px;
`

const App = () => {
	return (
		<AppWrapper>
			{/* <Header/> */}
			{/* <Calculator/> */}
		</AppWrapper>
	)
}

export default App;