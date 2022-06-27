import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseDb from '../firebase';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './footer.scss';
const Footer = () => {
	const [state, setState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const handleSubmit = e => {
		e.preventDefault();
		if (!state.name || !state.email || !state.subject || !state.message) {
			toast.error('pls fill all the details');
		}else{
			firebaseDb.child("contacts").push(state);
			setState({ name: '', email: '', subject: '', message: '' });
			toast.success("Form Submitted yayy")
		}
	};
	const handleInputChange = e => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	return (
		<>
			<ToastContainer position='top-center' />
			<form className='form' id='connect' onSubmit={handleSubmit}>
				<div className='form-elem'>
					<input
						type='text'
						name='name'
						placeholder='Name'
						onChange={handleInputChange}
						value={state.name}
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						onChange={handleInputChange}
						value={state.email}
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						onChange={handleInputChange}
						value={state.subject}
					/>
					<input
						type='text'
						name='message'
						placeholder='Message'
						className='message'
						onChange={handleInputChange}
						value={state.message}
					/>
					<button type='submit' className='btn'>
						<span className='btn-text'>Submit</span>
					</button>
				</div>
				<h2 className='or'>Or</h2>
				<div className='contact'>
					<h2 className='heading'>contact me:</h2>
					<a href='mailto:arpiitchugh@gmail.com' className='subheading'>
						Arpiitchugh@gmail.com
					</a>
					<br />
					<br />
					<a href='tel://9501478900' className='subheading'>
						+91 9501478900
					</a>
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
			</form>
		</>
	);
};

export default Footer;
