import './app.scss';
import Home from './home/Home';
import Nav from './nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;
