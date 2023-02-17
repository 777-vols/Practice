import Calculator from "@components/Calculator/Calculator";
import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Calculator props={this.props} />
			</div>
		)
	}
}

export default Home;