import styled from 'styled-components'
import s from './Index.module.css'
import { Link } from 'react-router-dom';



const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.logo}>
				<a>Calculator App</a>
			</div>

			<div className={s.navi_bar}>
				<div>
					<Link className={s.navi_item} to="/">
						Home
					</Link>
				</div>

				<div>
					<Link className={s.navi_item} to="/settings">
						Settings
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header;