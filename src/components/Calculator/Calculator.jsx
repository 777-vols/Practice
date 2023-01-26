import c from './Index.module.css';
import Keyboard from './Keyboard/Keyboard';
import History from './History/History';
import Screen from './Screen/Screen';

const Calculator = () => {
	return (
		<div className={c.calc}>
			{/* <div className={c.keyboard_wrapper}> */}
			<Keyboard />
			{/* </div> */}
			{/* <div className={c.history_wrapper}> */}
			<History />
			{/* </div> */}
			{/* <div className={c.screen_wrapper}> */}
			<Screen />
			{/* </div> */}
		</div>
	)
};

export default Calculator;