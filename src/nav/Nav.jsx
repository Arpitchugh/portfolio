import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export const HamNav = () => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className='navigation-logo'>ArpitChugh</div>
			<nav className='navigation'>
				<input
					type='checkbox'
					className='navigation-checkbox'
					id='navi-toogle'
					defaultChecked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<label for='navi-toogle' className='navigation-button'>
					<span className='navigation-icon'>&nbsp;</span>
				</label>
				<div className='navigation-background'>&nbsp;</div>

				<nav className='navigation-nav-ham'>
					<ul
						className='navigation-list'
						style={checked ? { display: 'block' } : { display: 'none' }}
					>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a
								href='https://drive.google.com/file/d/1QA9TQvNayAjE7pvjMRZVkoyguZ9iybnB/view?usp=sharing'
								className='navigation-link'
								target={'_blank'}
							>
								Resume
							</a>
						</li>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a
								href='https://github.com/arpitchugh'
								className='navigation-link'
								target={'_blank'}
							>
								Github
							</a>
						</li>
						<li
							className='navigation-item'
							style={{ width: '400px', margin: '3rem' }}
						>
							<a
								href='https://www.linkedin.com/in/arpit-chugh'
								className='navigation-link'
								target={'_blank'}
							>
								Linkedin
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
				<a
					href='https://drive.google.com/file/d/1QA9TQvNayAjE7pvjMRZVkoyguZ9iybnB/view?usp=sharing'
					target='_blank'
				>
					<li className='nav-list__elem'>Resume</li>{' '}
				</a>
				<a href='#projects'>
					<li className='nav-list__elem'>Projects</li>
				</a>

				<a href='#connect'>
					<li className='nav-list__elem'>Let's Connect</li>
				</a>
			</ul>
		</nav>
	);
};
