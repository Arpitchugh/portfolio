import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Skills from '../skills/Skills';
import Canvas from '../canvas/Canvas';
import Footer from '../footer/Footer';
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
						<a href='#'>
							<FiInstagram />
						</a>
						<a href='#'>
							<FiLinkedin />
						</a>
						<a href='#'>
							<FiGithub />
						</a>
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
				<h1 className='portfolio-heading' id='projects'>
					Projects
				</h1>
				<ul className='portfolio-flex'>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/acm.png' alt='acm' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/woodcase.png' alt='woodcase' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/tourna.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/trvl.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/tourna.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/bankist.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/shriproperty.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<a href='https://www.canva.com/design/DAE-5cSztjU/ROjP6YMaW4mqARemsXre7Q/edit'>
							<img src='/images/noty.png' alt='' />
						</a>
					</a>
				</ul>
			</section>

			{/* Skills Section */}
			<section className='skills'>
				<h1 className='skills-heading'>Skills</h1>
				<Skills />
			</section>
			<footer>
				<h1 className='skills-heading'>Footer</h1>
				<Footer />
			</footer>
		</>
	);
};
export default Home;
