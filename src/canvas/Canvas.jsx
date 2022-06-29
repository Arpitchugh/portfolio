import React from 'react';
import { Link } from 'react-router-dom';
const canvasList = [
	'HTML',
	'CSS',
	'ES5',
	'TypeScript',
	'Node JS',
	'PHP',
	'C',
	'C++',
	'Git',
	'SASS',
	'MongoDB',
	'SQL',
	'npm',
	'Canva',
	'UI',
	'UX',
	'Figma',
	'Windows',
	'MacOS',
	'Ubuntu',
];
const Canvas = () => {
	return (
		<>
			<div id='myCanvasContainer'>
				<canvas width='550' height='550' id='myCanvas'>
					<ul id='tags'>
						<li>
							{canvasList.map(element => (
								<Link to='/'>{element}</Link>
							))}
						</li>
					</ul>
				</canvas>
			</div>
		</>
	);
};

export default Canvas;
