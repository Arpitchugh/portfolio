import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import Canvas from '../canvas/Canvas';
import './home.scss';
const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<section className='hero_wrapper'>
				<div className='hero'>
					<h1 className='hero-greeting'>Hi</h1>
					<h3 className='hero-about'>
						I’m <span className='hero-about__name'>Arpit</span>, 3rd Year
						Computer Science Student, UI/UX Designer and Web Developer located
						in Chandigarh, India, looking to work around the globe.
					</h3>
					<div className='hero-icons'>
						<Link to='/'>
							<FiInstagram />
						</Link>
						<Link to='/'>
							<FiLinkedin />
						</Link>
						<Link to='/'>
							<FiGithub />
						</Link>
					</div>
				</div>
				<div className='hero-contact'>
					<Canvas />
				</div>
				<div class='scroll-down'>
					<span>scroll down</span>
					<HiOutlineArrowNarrowRight />
				</div>
			</section>

			{/* Portfolio Section */}
			<section className='portfolio'>
				<h1 className='portfolio-heading'>Projects</h1>
				<ul className='portfolio-flex'>
					<li className='portfolio-flex__elem'>
						<img src='/images/img1.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img2.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img3.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img4.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img5.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img3.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img2.jpg' alt='' />
					</li>
					<li className='portfolio-flex__elem'>
						<img src='/images/img5.jpg' alt='' />
					</li>
				</ul>
			</section>

			{/* Skills Section */}
			<section className='skills'>
				<h1 className='skills-heading'>Skill'ls</h1>
				
			</section>
		</>
	);
};

export default Home;
