import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About'
import Workshop from './sections/workshop';
import Talks from './sections/talks'
const App = () => (
	<>
		<Navigation />
		<Home />
		<About/>
		<Workshop/>
		<Talks/>
	</>
)

export default App;