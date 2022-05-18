import React from 'react';
import './skills.scss';
// { skillName, proficiency; }

const Skills = () => {
	return (
		// <div className='content'>
		// 	<b style={{ width: '95%' }}>Html/ Css</b>
		// 	<div className='progress'>
		// 		<span
		// 			className='progress-bar cool fill-1'
		// 			style={{ width: '95%' }}
		// 		></span>
		// 	</div>
		// 	<b style={{ width: '90%' }}>JavaScript</b>
		// 	<div className='progress'>
		// 		<span
		// 			className='progress-bar cool fill-2'
		// 			style={{ width: '90%' }}
		// 		></span>
		// 	</div>
		// 	<b style={{ width: '85%' }}>React</b>
		// 	<div className='progress'>
		// 		<span
		// 			className='progress-bar cool fill-3 '
		// 			style={{ width: '85%' }}
		// 		></span>
		// 	</div>
		//     <b style={{ width: '90%' }}>UI/UX</b>
		// 	<div className='progress'>
		// 		<span
		// 			className='progress-bar cool fill-2'
		// 			style={{ width: '90%' }}
		// 		></span>
		// 	</div>
		// 	<b style={{ width: '85%' }}>NodeJs</b>
		// 	<div className='progress'>
		// 		<span
		// 			className='progress-bar cool fill-3 '
		// 			style={{ width: '85%' }}
		// 		></span>
		// 	</div>

		// </div>

		<section id='skill-section'>
			<div className='header skill-head'>
				<h3>Here are my skills which represent my Expertise</h3>
			</div>
			<div className='skill-main'>
				<div className='skill-bar'>
					<div className='info'>
						<p>JavaScript</p>
						<p className='percent'>90%</p>
					</div>
					<div className='bar'>
						<span className='javascript'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>nodeJs</p>
						<p className='percent'>80%</p>
					</div>
					<div className='bar'>
						<span className='nodejs'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>React</p>
						<p className='percent'>85%</p>
					</div>
					<div className='bar'>
						<span className='react'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>Monog DB</p>
						<p className='percent'>80%</p>
					</div>
					<div className='bar'>
						<span className='mongo'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>HTML</p>
						<p className='percent'>90%</p>
					</div>
					<div className='bar'>
						<span className='html'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>Sql</p>
						<p className='percent'>80%</p>
					</div>
					<div className='bar'>
						<span className='sql'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>DataStructure</p>
						<p className='percent'>90%</p>
					</div>
					<div className='bar'>
						<span className='ds'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>HTML</p>
						<p className='percent'>95%</p>
					</div>
					<div className='bar'>
						<span className='html'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>CSS</p>
						<p className='percent'>95%</p>
					</div>
					<div className='bar'>
						<span className='html'></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
