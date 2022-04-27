import React from 'react';
import './skills.scss';
// { skillName, proficiency; }

const Skills = () => {
	return (
		<div className='content'>
			<b style={{ width: '95%' }}>Html/ Css</b>
			<div className='progress'>
				<span
					className='progress-bar cool fill-1'
					style={{ width: '95%' }}
				></span>
			</div>
			<b style={{ width: '90%' }}>JavaScript</b>
			<div className='progress'>
				<span
					className='progress-bar cool fill-2'
					style={{ width: '90%' }}
				></span>
			</div>
			<b style={{ width: '85%' }}>React</b>
			<div className='progress'>
				<span
					className='progress-bar cool fill-3 '
					style={{ width: '85%' }}
				></span>
			</div>
            <b style={{ width: '90%' }}>UI/UX</b>
			<div className='progress'>
				<span
					className='progress-bar cool fill-2'
					style={{ width: '90%' }}
				></span>
			</div>
			<b style={{ width: '85%' }}>NodeJs</b>
			<div className='progress'>
				<span
					className='progress-bar cool fill-3 '
					style={{ width: '85%' }}
				></span>
			</div>
			
		</div>
	);
};

export default Skills;
