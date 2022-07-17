import './app.scss';
import Home from './home/Home';
import { Nav, HamNav } from './nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './cursor/Cursor';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
	return (
		<Router>
			{/* <Cursor /> */}
			<HamNav />
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;
