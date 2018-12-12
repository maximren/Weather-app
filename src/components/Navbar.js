import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends PureComponent {
	render() {
		return (
			<nav className="nav-wrapper #64b5f6 blue lighten-2">
				<div className="container">
					<div className="brand-logo">Weather App</div>
					<ul className="right">
						<li><Link to="/">My city</Link></li>
						<li><Link to="/other">Other city</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;
