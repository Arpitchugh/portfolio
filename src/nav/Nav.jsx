import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export const HamNav = () => {
	return <nav className='hamnav'>HIO</nav>;
};
export const Nav = () => {
	return (
		<nav className='nav'>
			<div className='brand-logo'>ArpitChugh</div>
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
