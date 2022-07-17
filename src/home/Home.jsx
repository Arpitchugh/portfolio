import { useState } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Canvas from '../canvas/Canvas';
import Footer from '../footer/Footer';
import Project from '../project/Project';
import Modal from '../modal/Modal';
import './home.scss';

const Home = () => {
	const [modal, setModal] = useState({
		opened: false,
		title: 'hi',
		link: '',
		src: '',
	});

	const modalHandler = (title, link, src) => {
		return () => {
			setModal({ opened: true, title, link, src });
		};
	};

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
						<a href='https://www.linkedin.com/in/arpit-chugh' target={'_blank'}>
							<FiInstagram />
						</a>
						<a href='https://www.linkedin.com/in/arpit-chugh' target={'_blank'}>
							<FiLinkedin />
						</a>
						<a href='https://github.com/arpitchugh' target={'_blank'}>
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
			<Modal modal={modal} setModal={setModal} />
			<section className='portfolio'>
				<h1 className='heading mg-r' id='projects'>
					Projects
				</h1>
				<ul className='portfolio-flex'>
					<li className='portfolio-flex__elem'>
						<img
							src='/images/shriproperty.png'
							alt=''
							onClick={modalHandler(
								'Shri Property',
								'https://shriproperty.com/',
								'/images/website/shriproperty.png'
							)}
						/>
					</li>
					<li className='portfolio-flex__elem'>
						<img
							src='/images/tourna.png'
							alt=''
							onClick={modalHandler(
								'TOURNA',
								'https://arpitchugh.github.io/TourNa/',
								'/images/website/tourna.png'
							)}
						/>
					</li>

					<li className='portfolio-flex__elem bg-white'>
						<img
							src='/images/estudy.svg'
							alt=''
							onClick={modalHandler(
								'ESTUDY',
								'http://estudy-client.herokuapp.com/',
								'/images/website/estudy.png'
							)}
						/>
					</li>
					<li className='portfolio-flex__elem'>
						<img
							src='/images/bankist.png'
							alt=''
							onClick={modalHandler(
								'BANKIST',
								'https://arpitchugh.github.io/Bankist/',
								'/images/website/bankist.png'
							)}
						/>
					</li>
					<li className='portfolio-flex__elem'>
						<img
							src='/images/WOODCASE.png'
							alt=''
							onClick={modalHandler(
								'WOODCASE',
								'https://github.com/Arpitchugh/WoodCase',
								'/images/website/woodcase.png'
							)}
						/>
					</li>
					<li className='portfolio-flex__elem'>
						<img
							src='/images/ACM.png'
							alt=''
							onClick={modalHandler(
								'ACM',
								'https://www.figma.com/file/ktkdLJXP4yMqZrVOonJYia/ACM-Website?node-id=0%3A1',
								'/images/website/acm.svg'
							)}
						/>
					</li>

					<li className='portfolio-flex__elem'>
						<img
							src='/images/NOTY.png'
							alt=''
							onClick={modalHandler(
								'NOTY',
								'https://arpitchugh.github.io/notyfornotes/',
								'/images/website/noty.png'
							)}
						/>
					</li>
				</ul>
				<br />
				<br />
			</section>
			{/*projects*/}
			<Project
				heading={'Github'}
				username={'Arpitchugh'}
				length={1}
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
