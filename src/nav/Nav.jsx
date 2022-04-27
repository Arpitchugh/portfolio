import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
const Nav = () => {
	return (
		<nav>
			<div className='brand-logo'>
				ArpitChugh
			</div>
			<ul className='nav-list'>
				<Link to='/'>
					{' '}
					<li className='nav-list__elem'>Resume</li>{' '}
				</Link>
				<Link to='/'>
					<li className='nav-list__elem'>Projects</li>
				</Link>
				<Link to='/'>
					<li className='nav-list__elem'>About</li>
				</Link>
				<Link to='/'>
					<li className='nav-list__elem'>Let's Connect</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
