import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.scss';
const Footer = () => {
	return (
		<>
			<div className='form' id='connect'>
				<div className='form-elem'>
					<input type='text' name='name' placeholder='Name' />
					<input type='email' name='email' placeholder='Email' />
					<input
						type='number'
						name='phoneNumber'
						placeholder='Phone Number'
					/>
					<input
						type='text'
						name='message'
						placeholder='Message'
						className='message'
					/>
					<button type="submit" className='btn'><span className="btn-text">Submit</span></button>
				</div>
				<h2 className='or'>Or</h2>
				<div className='contact'>
					<h2 className='heading'>contact me:</h2>
					<h3 className='subheading'>Arpiitchugh@gmail.com</h3>
					<h3 className='subheading'>+91 9501478900</h3>
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
				
			</div>
		</>
	);
};

export default Footer;
