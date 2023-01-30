import s from './Button.module.css'

const Button = (props) => {
	// console.log(props.props);
	return (
		<div className={s.button_container}>
			<button className={s.button}>{props.props.name}</button>
		</div>
	)
}

export default Button;