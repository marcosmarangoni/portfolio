import React from 'react';
import './App.css';
import './utils/scripts';

import { Header, Footer } from './pages/portfolio';

import MastheadBg from './img/bg-masthead.jpg';
import HimarketLogo from './img/himarket-logo.png';
import HimarketPortalDemonstration from './img/himarket-portal-demonstration.gif';

import { DataStructureVisualizer } from './pages/data_structure_visualizer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dijkstra">
          <Dijkstra />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <React.Fragment>
      {/* Masthead */}
      <header className="masthead" id="masthead" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url(${MastheadBg})` }}>
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Marcos Marangoni</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Ruby and Rails developer, with 2 years of experience in full stack development.</h2>
            <a className="btn btn-primary js-scroll-trigger" href="/Resume.docx" download>Download Resume</a>
          </div>
        </div>
      </header>
      {/* Projects */}
      <section className="projects-section bg-light" id="projects">
        <div className="container">
          {/* Project One Row */}
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6 justify-content-center"><img className="img-fluid" src={HimarketPortalDemonstration} alt="" /></div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Tecnologies Used</h4>
                    <div className="row mb-5">
                      <div className="badge badge-pill badge-primary m-1">Vue.js</div>
                      <div className="badge badge-pill badge-primary m-1">Ruby on Rails</div>
                      <div className="badge badge-pill badge-primary m-1">Google Cloud</div>
                      <div className="badge badge-pill badge-primary m-1">Kubernetes</div>
                      <div className="badge badge-pill badge-primary m-1">Docker</div>
                    </div>
                    <h4 className="text-white">HiMarket (2018-2020)</h4>
                    <p className="mb-0 text-white-50">
                      Worked in a project with Ruby and Rails, for the backend, and Vue.js, for the frontend.
                      The project was based on building a portal to provide automated data analysis to clients.
                      I had to build a dynamic filter, and work with a third party graph library called Metabase.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function Dijkstra() {
  return (
    <DataStructureVisualizer></DataStructureVisualizer>
  );
}

export default App;
