import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Canvas from '../canvas/Canvas';
import './home.scss';
const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<section className='hero_wrapper'>
				<div className='hero'>
					<h1 className='hero-greeting'>
						{/* <AiOutlineMinus /> */}
						Hi
					</h1>
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
			</section>
		</>
	);
};

export default Home;
