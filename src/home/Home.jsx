import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Skills from '../skills/Skills';
import Canvas from '../canvas/Canvas';
import Footer from '../footer/Footer';
import Project from '../project/Project';

import './home.scss';
const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<section className='hero_wrapper'>
				<div className='hero'>
					<h1 className='heading'>Hi</h1>
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
				<h1 className='heading mg-r' id='projects'>
					Projects
				</h1>
				<ul className='portfolio-flex'>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/shriproperty.png' alt='' />
					</a>

					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/woodcase.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/acm.png' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem bg-white'>
						<img src='/images/estudy.svg' alt='' />
					</a>
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/tourna.png' alt='' />
					</a>
					
					<a href='#' className='portfolio-flex__elem'>
						<img src='/images/bankist.png' alt='' />
					</a>

					<a href='#' className='portfolio-flex__elem'>
						<a href='https://www.canva.com/design/DAE-5cSztjU/ROjP6YMaW4mqARemsXre7Q/edit'>
							<img src='/images/noty.png' alt='' />
						</a>
					</a>
				</ul>
				<br />
				<br />
			</section>
			{/*projects*/}
			<Project
				heading={'Github'}
				username={'Arpitchugh'}
				length={2}
				specfic={['WoodCase', 'Ecommerce-Website']}
				
			/>
			{/* Skills Section */}

			<footer>
				<h1 className='heading'>Footer</h1>
				<Footer />
			</footer>
		</>
	);
};
export default Home;
