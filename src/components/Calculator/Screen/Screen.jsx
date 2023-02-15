import s from './Screen.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ receiver, value }) => {
	return (
		<div className={s.screen_wrapper}>
			<a className={s.result}>{receiver.showingResult ? receiver.execute() : value}</a>
		</div>
	)
}

Screen.propTypes = {
	receiver: PropTypes.object,
	value: PropTypes.number,
}

export default Screen;