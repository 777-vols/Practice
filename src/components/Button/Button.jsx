import s from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({ name, event }) => {
	return (
		<div className={s.button_container}>
			<button onClick={event} className={s.button}>{name}</button>
		</div>
	)
}

Button.propTypes = {
	name: PropTypes.string,
	event: PropTypes.func,
}

export default Button;