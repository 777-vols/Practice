import s from './Button.module.css'

const Button = () => {
	return (
		<div className={s.button_container}>
			<button className={s.button}>C</button>
		</div>
	)
}

export default Button;