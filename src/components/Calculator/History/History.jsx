import HistoryItem from '@components/HistoryItem/HistoryItem';
import s from './History.module.css'
import PropTypes from 'prop-types';
import React from 'react';


class History extends React.Component {
	render() {
		let HistoryItems = this.props.allHistory.map(el => <HistoryItem key={el.id} props={el.expression} />);
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
}

History.propTypes = {
	allHistory: PropTypes.array
}

export default History;