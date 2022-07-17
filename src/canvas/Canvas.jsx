import { useEffect, useRef } from 'react';
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
	'Canva',
	'UI',
	'UX',
	'Figma',
];
const Canvas = () => {
	const canvasHeight = window.innerHeight - 200;
	
	return (
		<>
			<div id='myCanvasContainer'>
				<canvas width='550' height={canvasHeight} id='myCanvas'>
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
