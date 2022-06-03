
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import { Routes, Route } from 'react-router-dom'
import BeerList from './pages/beerList/BeerList';
import Connection from './pages/connection/Connection';
import Event from './pages/event/Event';
import Home from './pages/home/Home';



function App() {
	return (

		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/beers' element={<BeerList />} />
				<Route path='/events' element={<Event />} />
				<Route path='/signin' element={<Connection />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
