import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Testimonials from './sections/Testimonials';

const Navigation = React.lazy(() => import('./components/Navigation'));
const Home = React.lazy(() => import('./sections/Home'))
const About = React.lazy(() => import('./sections/About'))
const Workshop = React.lazy(() => import('./sections/workshop'))
const Talks = React.lazy(() => import('./sections/talks'))
const Hackathon = React.lazy(() => import('./sections/Hackathon'))
const Tracks = React.lazy(() => import('./sections/Tracks'))
const RegisterNow = React.lazy(() => import('./sections/RegisterNow'))
const Gallery = React.lazy(() => import('./sections/Gallery'))
const Footer = React.lazy(() => import('./sections/footer'))
const Collabs = React.lazy(() => import('./sections/PastCollab'))
const FAQ = React.lazy(() => import('./sections/FAQ'))
const Currentcollab = React.lazy(() => import('./sections/currentCollab'))
// const Testimonials = React.lazy(()=>import('./sections/Testimonials'))

const App = () => (
	<Suspense fallback={<Loading />}>
		<Navigation />
		<Home />
		<About/>
		<Workshop/>
		<Talks/>
		<Hackathon />
		<Tracks/>
		<RegisterNow />
		<Testimonials />
		<FAQ />
		<Currentcollab />
		<Collabs/>
		<Gallery/>
		<Footer />
	</Suspense>
)

export default App;