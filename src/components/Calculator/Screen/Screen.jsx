import s from './Screen.module.css'
import React from 'react';


const Screen = (props) => {
	// console.log(props.props);

	let newPostElement = React.createRef();

	let OnPostChange = () => {
		let text = newPostElement.current.value;
		props.props.UpdateExpression(text);
	}

	return (
		<div className={s.screen_wrapper}>
			<input onChange={OnPostChange} value={props.props.newExpression} ref={newPostElement} />
		</div>
	)
}

export default Screen;