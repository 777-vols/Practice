import React from "react";
import { useState, useEffect } from "react";
import s from './SettingsPanel.module.css'


const SettingsPanel = (props) => {

	function toggleTheme() {
		let select = document.querySelector('select');

		(function newTheme() {
			props.NewColor(select.value)
		})();
		(function test() {
			setTheme(select.value);
		})();
	}

	const [theme, setTheme] = useState(props.SettingsPage.newTheme);

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
						<select onChange={toggleTheme} className={s.select}>
							<option value="light">Light Theme</option>
							<option value="colored">Colored Theme</option>
							<option value="dark">Dark Theme</option>
						</select>
					</div>
				</div>

				<div className={s.button_block}>
					<button className={s.btn}>Clear All History</button>
				</div>
			</div>
		</div>
	)
}

export default SettingsPanel;