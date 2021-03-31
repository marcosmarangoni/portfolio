import React, { useEffect, useState } from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/portfolio#masthead">Portfolio</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/portfolio#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/portfolio#contacts">Contact</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="personalProjectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Personal Projects
                  </a>
              <div className="dropdown-menu" aria-labelledby="personalProjectsDropdown">
                <a href="/portfolio/dijkstra" className="dropdown-item">Dijkstra</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;