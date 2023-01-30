import React from "react";
import s from './SettingsPanel.module.css'

let foo = () => {
	let select = document.querySelector('select');
	console.log(select.value)
}

class SettingsPanel extends React.Component {
	render() {
		return (
			<div className={s.container} >
				<div className={s.header_block}>
					<a>Settings</a>
				</div>

				<div className={s.panel}>

					<div className={s.select_container}>
						<a className={s.select_header}>Switch Theme</a>
						<div className={s.select_wrapper}>
							<select onChange={foo} className={s.select}>
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
}

export default SettingsPanel;