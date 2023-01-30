import s from './HistoryItem.module.css'

const HistoryItem = (props) => {
	// console.log(props);
	return (
		<div className={s.result}>
			<a className={s.resultText}>{props.props}</a>
		</div>
	)
}

export default HistoryItem;