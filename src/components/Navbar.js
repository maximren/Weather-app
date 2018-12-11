import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends PureComponent {
	render() {
		return (
			<nav>
				<div>
					<div>Weather App</div>
					<ul>
						<li><Link to="/">My city</Link></li>
						<li><Link to="/other">Other city</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;
