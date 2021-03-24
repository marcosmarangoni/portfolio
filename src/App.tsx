import React from 'react';
import './App.css';
import './utils/scripts';

import MastheadBg from './img/bg-masthead.jpg';
import HimarketLogo from './img/himarket-logo.png';

import { DataStructureVisualizer } from './data_structure_visualizer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Portfolio</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/portfolio#masthead">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/portfolio#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/portfolio#contacts">Contact</a></li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="personalProjectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Personal Projects
                          </a>
                          <div className="dropdown-menu" aria-labelledby="personalProjectsDropdown">
                            <Link to="/portfolio/dijkstra" className="dropdown-item">Dijkstra</Link>
                          </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Switch>
          <Route path="/portfolio/dijkstra">
            <Dijkstra />
          </Route>
          <Route path="/portfolio">
            <Home />
          </Route>
        </Switch>
        
        {/* Contact */}
        <section className="contact-section bg-black" id="contacts">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">marcosmarangoni2@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (236) 991-8915</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="https://www.linkedin.com/in/marcos-eduardo-marangoni-6927318b/"><i className="fab fa-linkedin"></i></a>
                    <a className="mx-2" href="https://www.facebook.com/marcos.marangoni.904/"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="https://github.com/marcosmarangoni"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="footer bg-black small text-center text-white-50"><div className="container">Copyright © Marcos Marangoni 2021</div></footer>
    </Router>
  );
}

function Home() {
  return(
    <React.Fragment>
      {/* Masthead */}
      <header className="masthead" id="masthead" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url(${MastheadBg})` }}>
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Marcos Marangoni</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Ruby and Rails developer, with 2 years of experience in full stack development. With a huge interesnt in learning Web Development.</h2>
                    <a className="btn btn-primary js-scroll-trigger" href="/Resume.docx" download>Download Resume</a>
                </div>
            </div>
        </header>
        {/* Projects */}
        <section className="projects-section bg-light" id="projects">
            <div className="container">
                {/* Project One Row */}
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6"><img className="img-fluid" src={HimarketLogo} alt="" /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">HiMarket (2018-2020)</h4>
                                    <p className="mb-0 text-white-50">
                                      Worked in a project with Ruby and Rails, for the backend, and Vue.js, for the frontend.
                                      The project was based on building a portal to provided automated data analysis to clients.
                                      I had to build dynamic filter, and work with a third party graph library called Metabase.
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
