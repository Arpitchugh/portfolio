import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.scss';
const Footer = () => {
	return (
		<>
			<div className='form' id='connect'>
				<div className='form-elem'>
					<textarea type='text' name='name' placeholder='Name' />
					<textarea type='email' name='email' placeholder='Email' />
					<textarea
						type='number'
						name='phoneNumber'
						placeholder='Phone Number'
					/>
					<textarea
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
				{/* <div className='map'>
					<iframe
						title='Office'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.3892949371862!2d76.71191805823159!3d30.696505101800494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee937b00594f%3A0x2cceea0ed2d4157a!2sMPW6%2BCVH%2C%20Sector%2070%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1651043665509!5m2!1sen!2sin'
						width='100%'
						height='700'
						style={{
							border: 'none',
						}}
						class='absolute inset-0'
						frameborder='0'
						scrolling='no'
						loading='lazy'
					></iframe>
				</div> */}
			</div>
		</>
	);
};

export default Footer;
