import c from './Index.module.css';
import History from './History/History';
import Screen from './Screen/Screen';
import Keyboard from './Keyboard/Keyboard';

const Calculator = (props) => {
	return (
		<div className={c.calc}>
			<Keyboard onNumClick={props.props.actions.onNumClick} onPlusClick={props.props.actions.onPlusClick} onMinusClick={props.props.actions.onMinusClick}
				onDivideClick={props.props.actions.onDivideClick} onMultiplyClick={props.props.actions.onMultiplyClick} onEqualClick={props.props.actions.onEqualClick}
				onClearAllClick={props.props.actions.onClearAllClick} onClearExpressionClick={props.props.actions.onClearExpressionClick} />

			<History allHistory={props.props.HomePage.history} />

			<Screen receiver={props.props.HomePage.receiver} value={props.props.HomePage.valueManager.value} isDot={props.props.HomePage.valueManager.dot} />
		</div>
	)
};

export default Calculator;