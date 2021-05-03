import React, { useEffect , useRef, createRef } from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
} from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import $ from 'jquery';
import 'bootstrap';

function Header() {

  const mainNavRef = useRef<HTMLElement>(null);

  function onScroll(this: Window, ev: Event){
    if(!mainNavRef.current) return;
    if (this.pageYOffset > 20) {
      mainNavRef.current.classList.add("navbar-shrink");
    } else {
      mainNavRef.current.classList.remove("navbar-shrink");
    }
  }

  function onClick(this: Window, ev: MouseEvent) {
    if(!mainNavRef.current) return;
    if(ev.screenY > mainNavRef.current.clientHeight) {
      $(".navbar-collapse").collapse("hide")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('click', onClick)
    $("body").scrollspy({ target: "#mainNav", offset: 100 });
    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('click', onClick);
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" ref={mainNavRef}>
      <div className="container">
        <HashLink smooth className="navbar-brand js-scroll-trigger" to="/portfolio#masthead">Portfolio</HashLink>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <HashLink smooth className="nav-link js-scroll-trigger" to="/portfolio#projects">Projects</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link js-scroll-trigger" to="/portfolio#contacts">Contact</HashLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="personalProjectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                React Projects
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