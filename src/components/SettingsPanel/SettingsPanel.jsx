import React from "react";
import { useState, useEffect } from "react";
import s from './SettingsPanel.module.css'
import PropTypes from 'prop-types';


const SettingsPanel = ({ DeleteAllHistory, NewColor, newTheme }) => {

	function DeleteHistory() {
		DeleteAllHistory();
	}

	function toggleTheme() {
		let select = document.querySelector('select');
		NewColor(select.value)
		setTheme(select.value);
	}

	const [theme, setTheme] = useState(newTheme);

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);


	return (
		<div className={s.container} >
			<div className={s.header_block}>
				<a>Settings</a>
			</div>

			<div className={s.panel}>
				<div className={s.select_container}>
					<a className={s.select_header}>Switch Theme</a>
					<div className={s.select_wrapper}>
						<select value={newTheme} onChange={toggleTheme} className={s.select}>
							<option value="light">Light Theme</option>
							<option value="colored">Colored Theme</option>
							<option value="dark">Dark Theme</option>
						</select>
					</div>
				</div>

				<div className={s.button_block}>
					<button onClick={DeleteHistory} className={s.btn}>Clear All History</button>
				</div>
			</div>
		</div>
	)
}

SettingsPanel.propTypes = {
	newTheme: PropTypes.string
}

export default SettingsPanel;