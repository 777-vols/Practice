import React from "react";
import s from './SettingsPanel.module.css'

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
							<select className={s.select} name='select_theme' id=''>
								<option value="1">Light Theme</option>
								<option value="2">Colored Theme</option>
								<option value="3">Dark Theme</option>
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