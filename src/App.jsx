import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import About from './sections/About'
import Workshop from './sections/workshop';
import Talks from './sections/talks'
import Hackathon from './sections/Hackathon';
import Tracks from './sections/Tracks';
import RegisterNow from './sections/RegisterNow';
import Gallery from './sections/Gallery';
import Footer from './sections/footer';
import Collabs from './sections/PastCollab';
import FAQ from './sections/FAQ';
const App = () => (
	<>
		<Navigation />
		<Home />
		<About/>
		<Workshop/>
		<Talks/>
		<Hackathon />
		<Tracks/>
		<RegisterNow />
		<FAQ />
		<Collabs/>
		<Gallery/>
		<Footer />
	</>
)

export default App;