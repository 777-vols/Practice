import Button from '@components/Button/Button';
import k from './Keyboard.module.css'
import PropTypes from 'prop-types';

const Keyboard = ({ allButtons }) => {
	// let buttons = allButtons.map(el => <Button key={el.id} props={el} />)
	return (
		<div className={k.keyboard_wrapper}>
			<Button name={'C'} />
			<Button name={'7'} />
			<Button name={'8'} />
			<Button name={'9'} />
			<Button name={'*'} />
			<Button name={'-'} />
			<Button name={'4'} />
			<Button name={'5'} />
			<Button name={'6'} />
			<Button name={'/'} />
			<Button name={'+'} />
			<Button name={'1'} />
			<Button name={'2'} />
			<Button name={'3'} />
			<Button name={'='} />
			<Button name={'.'} />
			<Button name={'('} />
			<Button name={'0'} />
			<Button name={')'} />
			<Button name={'CE'} />
		</div>
	)
}

// Keyboard.propTypes = {
// 	allButtons: PropTypes.array
// }

export default Keyboard;