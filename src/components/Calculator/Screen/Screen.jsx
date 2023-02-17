import s from './Screen.module.css'
import React from 'react';
import PropTypes from 'prop-types';


class Screen extends React.Component {
	render() {
		let isDotFunc = () => {
			let Val = this.props.value;
			if (this.props.isDot === true)
				Val += '.'
			return Val
		}
		return (
			<div className={s.screen_wrapper} >
				<a className={s.result}>{this.props.receiver.showingResult ? this.props.receiver.execute() : isDotFunc()}</a>
			</div>
		)
	}
}




Screen.propTypes = {
	receiver: PropTypes.object,
	value: PropTypes.number,
}

export default Screen;