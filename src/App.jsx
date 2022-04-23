import './app.scss';
import Home from './home/Home';
import Nav from './nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './cursor/Cursor';

const App = () => {
	return (
		<Router>
			<Cursor/>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;
