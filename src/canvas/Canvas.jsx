import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './canvas.scss';

const Canvas = () => {
	
	return (
		<>
			<div className='skills-charts'>
				<div id='myCanvasContainer'>
					<canvas width='500' height='500' id='myCanvas'>
						<ul id='tags'>
							<li>
								<Link to='/'>
									HTML
								</Link>
							</li>
							<li>
								<Link to='/'>
									CSS
								</Link>
							</li>
							<li>
								<Link to='/'>
									ES5
								</Link>
							</li>
							<li>
								<Link to='/'>
									TypeScript
								</Link>
							</li>
							<li>
								<Link to='/'>
									REST
								</Link>
							</li>
							<li>
								<Link to='/'>
									JSON
								</Link>
							</li>
							<li>
								<Link to='/'>
									GSAP
								</Link>
							</li>
							<li>
								<Link to='/'>
									Data Science
								</Link>
							</li>
							<li>
								<Link to='/'>
									Wordpress
								</Link>
							</li>
							<li>
								<Link to='/'>
									PHP
								</Link>
							</li>
							<li>
								<Link to='/'>
									Python
								</Link>
							</li>
							<li>
								<Link to='/'>
									Node JS
								</Link>
							</li>
							<li>
								<Link to='/'>
									Git
								</Link>
							</li>
							<li>
								<Link to='/'>
									_lodash
								</Link>
							</li>
							<li>
								<Link to='/'>
									SASS
								</Link>
							</li>
							<li>
								<Link to='/'>
									JQuery
								</Link>
							</li>
							<li>
								<Link to='/'>
									SQI
								</Link>
							</li>
							<li>
								<Link to='/'>
									Gulp
								</Link>
							</li>
							<li>
								<Link to='/'>
									npm
								</Link>
							</li>
							<li>
								<Link to='/'>
									BEM
								</Link>
							</li>
						</ul>
					</canvas>
				</div>
			</div>
		</>
	);
};

export default Canvas;
