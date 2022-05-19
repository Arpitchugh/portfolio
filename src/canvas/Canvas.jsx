import React from 'react';
import { Link } from 'react-router-dom';

const Canvas = () => {
	return (
		<>
			<div className='skills-charts'>
				<div id='myCanvasContainer'>
					
					<canvas width='600' height='600' id='myCanvas'>
						<ul id='tags'>
							<li>
								<Link to='/'>HTML</Link>
							</li>
							<li>
								<Link to='/'>CSS</Link>
							</li>
							<li>
								<Link to='/'>ES5</Link>
							</li>
							<li>
								<Link to='/'>TypeScript</Link>
							</li>

							<li>
								<Link to='/'>JSON</Link>
							</li>

							<li>
								<Link to='/'>C++</Link>
							</li>
							<li>
								<Link to='/'>C</Link>
							</li>
							<li>
								<Link to='/'>PHP</Link>
							</li>

							<li>
								<Link to='/'>Node JS</Link>
							</li>
							<li>
								<Link to='/'>Git</Link>
							</li>

							<li>
								<Link to='/'>SASS</Link>
							</li>

							<li>
								<Link to='/'>SQL</Link>
							</li>
							<li>
								<Link to='/'>MongoDb</Link>
							</li>
							<li>
								<Link to='/'>npm</Link>
							</li>
							<li>
								<Link to='/'>UI</Link>
							</li>
							<li>
								<Link to='/'>Canva</Link>
							</li>
							<li>
								<Link to='/'>UX</Link>
							</li>
							<li>
								<Link to='/'>Linux</Link>
							</li>
							<li>
								<Link to='/'>Windows</Link>
							</li>
							<li>
								<Link to='/'>MacOS</Link>
							</li>

							<li>
								<Link to='/'>Figma</Link>
							</li>
						</ul>
					</canvas>
				</div>
			</div>
		</>
	);
};

export default Canvas;
