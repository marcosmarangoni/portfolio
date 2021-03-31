import React, { useEffect, useState } from 'react';
import {
  Link,
} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/portfolio#masthead">Portfolio</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio#contacts">Contact</Link></li>
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
  );
}

export default Header;