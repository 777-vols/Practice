import s from './Screen.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ newExpression, UpdateExpression }) => {

	let newPostElement = React.createRef();

	let OnPostChange = () => {
		let text = newPostElement.current.value;
		UpdateExpression(text);
	}

	return (
		<div className={s.screen_wrapper}>
			<input id='Input' onChange={OnPostChange} value={newExpression} ref={newPostElement} />
		</div>
	)
}

Screen.propTypes = {
	newExpression: PropTypes.string,
	UpdateExpression: PropTypes.func,
}

export default Screen;