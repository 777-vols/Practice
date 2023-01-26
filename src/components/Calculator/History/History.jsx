import s from './History.module.css'

const History = () => {
	return (
		<div className={s.history_wrapper}>
			<div className={s.header_history}>
				<h4>History</h4>
			</div>
			<div className={s.results_cont}>
				<a className={s.result}>12345</a>
				<a className={s.result}>12345</a>
				<a className={s.result}>12345</a>
				<a className={s.result}>12345</a>
			</div>
		</div>
	)
}

export default History;