import s from './Index.module.css'
import { NavLink } from 'react-router-dom';



const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.logoWrapper}>
				<NavLink className={s.logo} to="/">Calculator App</NavLink>
			</div>

			<div className={s.navi_bar}>
				<div>
					<NavLink className={({ isActive }) => isActive ? s.activeClassName : s.navi_item}
						to="/">
						Home
					</NavLink>
				</div>

				<div>
					<NavLink className={({ isActive }) => isActive ? s.activeClassName : s.navi_item} to="/settings">
						Settings
					</NavLink>
				</div>
			</div>
		</header>
	)
}

export default Header;