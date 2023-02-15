import Button from '@components/Button/Button';
import k from './Keyboard.module.css'
import PropTypes from 'prop-types';

const Keyboard = ({ onClearClickSumbol, onDivideClick, onEqualClick, onNumClick, onPlusClick, onMinusClick, onMultiplyClick, onClearExpressionClick, onDotClick, onBracketClick }) => {
	// console.log(onNumClick);
	// console.log(onPlusClick);
	// console.log(onEqualClick);

	return (
		<div className={k.keyboard_wrapper}>
			<Button name={'C'} event={() => onClearClickSumbol()} />
			<Button name={'7'} event={() => onNumClick(7)} />
			<Button name={'8'} event={() => onNumClick(8)} />
			<Button name={'9'} event={() => onNumClick(9)} />
			<Button name={'*'} event={() => onMultiplyClick()} />
			<Button name={'-'} event={() => onMinusClick()} />
			<Button name={'4'} event={() => onNumClick(4)} />
			<Button name={'5'} event={() => onNumClick(5)} />
			<Button name={'6'} event={() => onNumClick(6)} />
			<Button name={'/'} event={() => onDivideClick()} />
			<Button name={'+'} event={() => onPlusClick()} />
			<Button name={'1'} event={() => onNumClick(1)} />
			<Button name={'2'} event={() => onNumClick(2)} />
			<Button name={'3'} event={() => onNumClick(3)} />
			<Button name={'='} event={() => onEqualClick()} />
			<Button name={'.'} event={() => onDotClick('.')} />
			<Button name={'('} event={() => onBracketClick('(')} />
			<Button name={'0'} event={() => onNumClick(0)} />
			<Button name={')'} event={() => onBracketClick(')')} />
			<Button name={'CE'} event={() => onClearExpressionClick()} />
		</div>
	)
}

Keyboard.propTypes = {
	onClearClickSumbol: PropTypes.func,
	onDivideClick: PropTypes.func,
	onEqualClick: PropTypes.func,
	onNumClick: PropTypes.func,
	onPlusClick: PropTypes.func,
	onMinusClick: PropTypes.func,
	onMultiplyClick: PropTypes.func,
	onClearExpressionClick: PropTypes.func,
	onDotClick: PropTypes.func,
	onBracketClick: PropTypes.func,
}

export default Keyboard;