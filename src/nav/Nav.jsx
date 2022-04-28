import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export const HamNav = () => {
	return (
		<>
			<div className='brand-logo'>ArpitChugh</div>
			<nav className='navigation'>
				<input
					type='checkbox'
					className='navigation__checkbox'
					id='navi-toogle'
				/>
				<label for='navi-toogle' className='navigation__button'>
					<span className='navigation__icon'>&nbsp;</span>
				</label>
				<div className='navigation__background'>&nbsp;</div>

				<nav className='navigation__nav-ham'>
					<ul className='navigation__list'>
						<li
							className='navigation__item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#' className='navigation__link'>
								Resume
							</a>
						</li>
						<li
							className='navigation__item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#projects' className='navigation__link'>
								Projects
							</a>
						</li>
						<li
							className='navigation__item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#' className='navigation__link'>
								About
							</a>
						</li>
						<li
							className='navigation__item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a href='#connect' className='navigation__link'>
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
