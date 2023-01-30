import Button from '../../Button/Button';
import k from './Keyboard.module.css'

const Keyboard = (props) => {
	let buttons = props.props.HomePage.buttons.map(el => <Button key={el.id} props={el} />)
	// console.log(props.props.HomePage.buttons);
	return (
		<div className={k.keyboard_wrapper}>
			{buttons}
		</div>
	)
}

export default Keyboard;