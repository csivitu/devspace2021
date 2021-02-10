import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About'
import Workshop from './sections/workshop';
import Talks from './sections/talks'
import Hackathon from './sections/Hackathon';
import RegisterNow from './sections/RegisterNow';

const App = () => (
	<>
		<Navigation />
		<Home />
		<About/>
		<Workshop/>
		<Talks/>
		<Hackathon />
		<RegisterNow/>
	</>
)

export default App;