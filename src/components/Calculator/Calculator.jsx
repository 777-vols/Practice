import c from './Index.module.css';
import Keyboard from './Keyboard/Keyboard';
import History from './History/History';
import Screen from './Screen/Screen';

const Calculator = (props) => {
	// console.log(props.props);
	return (
		<div className={c.calc}>
			<Keyboard props={props.props} />
			<History props={props.props} />
			<Screen props={props.props} />
		</div>
	)
};

export default Calculator;