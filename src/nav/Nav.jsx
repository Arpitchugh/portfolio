import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export const HamNav = () => {
	return (
		<>
			<div className='navigation-logo'>ArpitChugh</div>
			<nav className='navigation'>
				<input
					type='checkbox'
					className='navigation-checkbox'
					id='navi-toogle'
				/>
				<label for='navi-toogle' className='navigation-button'>
					<span className='navigation-icon'>&nbsp;</span>
				</label>
				<div className='navigation-background'>&nbsp;</div>

				<nav className='navigation-nav-ham'>
					<ul className='navigation-list'>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#' className='navigation-link'>
								Resume
							</a>
						</li>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#projects' className='navigation-link'>
								Projects
							</a>
						</li>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#' className='navigation-link'>
								About
							</a>
						</li>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#connect' className='navigation-link'>
								Let's Connect
							</a>
						</li>
					</ul>
				</nav>
			</nav>
		</>
	);
};
export const Nav = () => {
	return (
		<nav className='nav'>
			<div className='brand-logo'>ArpitChugh</div>
			<ul className='nav-list'>
				<Link to='/'>
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
