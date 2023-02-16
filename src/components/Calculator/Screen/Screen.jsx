import s from './Screen.module.css'
import React from 'react';
import PropTypes from 'prop-types';

// const Screen = ({ receiver, value, isDot }) => {

// 	let isDotFunc = () => {
// 		let Val = value;
// 		if (isDot === true)
// 			Val += '.'
// 		return Val
// 	}

// 	return (
// 		<div className={s.screen_wrapper}>
// 			<a className={s.result}>{receiver.showingResult ? receiver.execute() : isDotFunc()}</a>
// 		</div>
// 	)
// }

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