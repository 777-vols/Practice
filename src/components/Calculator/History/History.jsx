import HistoryItem from '@components/HistoryItem/HistoryItem';
import s from './History.module.css'

const History = (props) => {
	// console.log(props.props.HomePage.history);

	let HistoryItems = props.props.HomePage.history.map(el => <HistoryItem key={el.id} props={el.expression} />);

	return (
		<div className={s.history_wrapper}>
			<div className={s.header_history_wrapper}>
				<a className={s.header_history}>History</a>
			</div>
			<div className={s.results_cont}>
				{HistoryItems}
			</div>
		</div>
	)
}

export default History;