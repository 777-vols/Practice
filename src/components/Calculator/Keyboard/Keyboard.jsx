import Button from '@components/Button/Button';
import k from './Keyboard.module.css'
import PropTypes from 'prop-types';
import React from 'react';


class Keyboard extends React.Component {
	render() {
		return (
			<div className={k.keyboard_wrapper}>
				<Button name={'C'} event={() => this.props.onClearExpressionClick()} />
				<Button name={'7'} event={() => this.props.onNumClick(7)} />
				<Button name={'8'} event={() => this.props.onNumClick(8)} />
				<Button name={'9'} event={() => this.props.onNumClick(9)} />
				<Button name={'*'} event={() => this.props.onMultiplyClick('*')} />
				<Button name={'-'} event={() => this.props.onMinusClick('-')} />
				<Button name={'4'} event={() => this.props.onNumClick(4)} />
				<Button name={'5'} event={() => this.props.onNumClick(5)} />
				<Button name={'6'} event={() => this.props.onNumClick(6)} />
				<Button name={'/'} event={() => this.props.onDivideClick('/')} />
				<Button name={'+'} event={() => this.props.onPlusClick('+')} />
				<Button name={'1'} event={() => this.props.onNumClick(1)} />
				<Button name={'2'} event={() => this.props.onNumClick(2)} />
				<Button name={'3'} event={() => this.props.onNumClick(3)} />
				<Button name={'='} event={() => this.props.onEqualClick()} />
				<Button name={'.'} event={() => this.props.onNumClick('.')} />
				<Button name={'('} event={() => this.props.onBracketClick('(')} />
				<Button name={'0'} event={() => this.props.onNumClick(0)} />
				<Button name={')'} event={() => this.props.onBracketClick(')')} />
				<Button name={'CE'} event={() => this.props.onClearAllClick()} />
			</div>
		)
	}
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