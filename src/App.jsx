import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About'
import Hackathon from './sections/Hackathon';


const App = () => (
	<>
		<Navigation />
		<Home />
		<About />
		<Hackathon />
	</>
)

export default App;