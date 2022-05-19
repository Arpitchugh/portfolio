import React from 'react';
import './skills.scss';

const Skills = props => {
	return (
		<section id='skill-section'>
			<div className='header skill-head'>
				<h3>Here are my skills which represent my Expertise</h3>
			</div>
			<div className='skill'>
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
						<span className='nodejs'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>Figma</p>
						<p className='percent'>85%</p>
					</div>
					<div className='bar'>
						<span className='react'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>Sql</p>
						<p className='percent'>80%</p>
					</div>
					<div className='bar'>
						<span className='nodejs'></span>
					</div>
				</div>
				<div className='skill-bar'>
					<div className='info'>
						<p>DataStructure</p>
						<p className='percent'>90%</p>
					</div>
					<div className='bar'>
						<span className='javascript'></span>
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
