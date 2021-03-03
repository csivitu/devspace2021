import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import Testimonials from './sections/Testimonials';

const Navigation = React.lazy(() => import('./components/Navigation'));
const DiscordButton = React.lazy(() => import('./components/DiscordButton'));
const Home = React.lazy(() => import('./sections/Home'));
const About = React.lazy(() => import('./sections/About'));
const Workshop = React.lazy(() => import('./sections/workshop'));
const Talks = React.lazy(() => import('./sections/talks'));
const Hackathon = React.lazy(() => import('./sections/Hackathon'));
const Tracks = React.lazy(() => import('./sections/Tracks'));
const RegisterNow = React.lazy(() => import('./sections/RegisterNow'));
const Gallery = React.lazy(() => import('./sections/Gallery'));
const Footer = React.lazy(() => import('./sections/footer'));
const Collabs = React.lazy(() => import('./sections/PastCollab'));
const FAQ = React.lazy(() => import('./sections/FAQ'));
const Currentcollab = React.lazy(() => import('./sections/currentCollab'));
// const Timeline = React.lazy(() => import('./sections/Timeline'));
const CodeOfConduct = React.lazy(() => import('./sections/CodeOfConduct'));
const Badge = React.lazy(() => import('./sections/Badge'));
// const Testimonials = React.lazy(()=>import('./sections/Testimonials'))

const App = () => (
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Navigation />
                    <Home />
                    <About />
                    <Workshop />
                    <Talks />
                    <Hackathon />
                    <Tracks />
                    {/* <Timeline /> */}
                    <RegisterNow />
                    <Badge />
                    <Testimonials />
                    <FAQ />
                    <Currentcollab />
                    <Collabs />
                    <Gallery />
                    <Footer />
                    <DiscordButton />
                </Route>
                <Route path="/codeofconduct">
                    <CodeOfConduct />
                </Route>
            </Switch>
        </BrowserRouter>
    </Suspense>
);

export default App;
