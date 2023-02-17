import c from './Index.module.css';
import History from './History/History';
import Screen from './Screen/Screen';
import Keyboard from './Keyboard/Keyboard';
import React from 'react';

class Calculator extends React.Component {

	render() {
		return (
			<div className={c.calc}>
				<Keyboard onNumClick={this.props.props.actions.onNumClick} onPlusClick={this.props.props.actions.onPlusClick} onMinusClick={this.props.props.actions.onMinusClick}
					onDivideClick={this.props.props.actions.onDivideClick} onMultiplyClick={this.props.props.actions.onMultiplyClick} onEqualClick={this.props.props.actions.onEqualClick}
					onClearAllClick={this.props.props.actions.onClearAllClick} onClearExpressionClick={this.props.props.actions.onClearExpressionClick} />

				<History allHistory={this.props.props.HomePage.history} />

				<Screen receiver={this.props.props.HomePage.receiver} value={this.props.props.HomePage.valueManager.value} isDot={this.props.props.HomePage.valueManager.dot} />
			</div>
		)
	}
};

export default Calculator;