import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './sections/Home';


const App = () => (
	<>
		<Navigation />
		<Home />
	</>
)

export default App;