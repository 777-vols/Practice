import c from './Index.module.css';
import History from './History/History';
import Screen from './Screen/Screen';
import KeyboardContainer from './Keyboard/KeyboardContainer';

const Calculator = (props) => {
	return (
		<div className={c.calc}>
			<KeyboardContainer />
			<History allHistory={props.props.HomePage.history} />
			<Screen newExpression={props.props.newExpression} UpdateExpression={props.props.UpdateExpression} />
		</div>
	)
};

export default Calculator;