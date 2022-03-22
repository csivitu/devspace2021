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
const Workshops = React.lazy(() => import('./sections/workshops'));
const Talks = React.lazy(() => import('./sections/talks'));
const Hackathon = React.lazy(() => import('./sections/Hackathon'));
const Tracks = React.lazy(() => import('./sections/Tracks'));
const RegisterNow = React.lazy(() => import('./sections/RegisterNow'));
const Gallery = React.lazy(() => import('./sections/Gallery'));
const Footer = React.lazy(() => import('./sections/footer'));
// const Collabs = React.lazy(() => import('./sections/PastCollab'));
const FAQ = React.lazy(() => import('./sections/FAQ'));
const Collaborations = React.lazy(() => import('./sections/Collaborations'));
const TitleSponsors = React.lazy(() => import('./sections/TitleSpons'));
const IndustrialPartner = React.lazy(() => import('./sections/IndustrialPartner'));
const Sponsors = React.lazy(() => import('./sections/Sponsors'));
const CommunityPartners = React.lazy(() => import('./sections/CommunityPartners'));
// const Timeline = React.lazy(() => import('./sections/Timeline'));
const CodeOfConduct = React.lazy(() => import('./sections/CodeOfConduct'));
const Badge = React.lazy(() => import('./sections/Badge'));
const OnlineLearningPartners = React.lazy(() => import('./sections/OnlineLearningPartners'));
// const Testimonials = React.lazy(()=>import('./sections/Testimonials'))

const App = () => (
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Navigation />
                    <Home />
                    <About />
                    <Talks />
                    <Workshops />
                    <Hackathon />
                    <Tracks />
                    {/* <Timeline /> */}
                    {/* <RegisterNow /> */}
                    {/* <Badge /> */}
                    <Testimonials />
                    <FAQ />
                    <TitleSponsors />
                    <IndustrialPartner />
                    <Sponsors />
                    <Collaborations />
                    <OnlineLearningPartners />
                    <CommunityPartners />
                    {/* <Collabs /> */}
                    <Gallery />
                    <Footer />
                    <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" style="width:100%"></a>
	</Route>
                <Route path="/codeofconduct">
                    <CodeOfConduct />
                </Route>
            </Switch>
        </BrowserRouter>
    </Suspense>
);

export default App;
