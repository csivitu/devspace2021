import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About'


const App = () => (
	<>
		<Navigation />
		<Home />
		<About/>
	</>
)

export default App;