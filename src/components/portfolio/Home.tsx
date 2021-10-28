import React, { useEffect, useState } from 'react';

import MastheadBg from '../../img/bg-masthead.jpg';

import HimarketPhotos from '../../img/himarket';
import PostTrackingPhotos from '../../img/posttracking';
import AssetsPhotos from '../../img/assets';
import WarehouseManagerPhotos from '../../img/warehouse_manager';

import Project from './components/Project';

function Home() {

  const workExperience = [
    {
      tecnologies: ['Vue.js', 'Ruby on Rails', 'Google Cloud', 'Kubernetes', 'Docker', 'Bootstrap'],
      title: 'HiMarket (2018-2020)',
      mainLink: 'https://portal.himarket.club/',
      description: `Worked in a project with Ruby and Rails, for the backend, and Vue.js, for the frontend.
      The project was based on building a portal to provide automated data analysis to clients.
      I had to build a dynamic filter, and work with a third party graph library called Metabase.`,
      images: HimarketPhotos
    }
  ]

  const personalProjects = [
    {
      tecnologies: ['Node.js', 'JWT', 'Android', 'MongoDB', 'Bootstrap', 'NPM', 'React.js', 'Express.js'],
      title: 'IRR Assets Calculator',
      description: `This project was made to calculate the IRR (Internal Rate of Return),
      which is used to calculate the profitability of potential investments. It's separated in frontend and backend,
      with a cherry on the top using android.`,
      images: AssetsPhotos,
      backendLink: 'https://github.com/marcosmarangoni/assets',
      frontendLink: 'https://github.com/marcosmarangoni/Assets_React',
      androidLink: 'https://github.com/marcosmarangoni/Assets_Mobile'
    },
    {
      tecnologies: ['Java', 'Spring Boot', 'Maven', 'ThymeLeaf', 'JQuery'],
      title: 'PostTracking',
      description: `In this project we made kind of a logistics management. In addition, the manager would assign new packages, putting the
      size, weight and their destination. The final action would be to calculate the best way to transport the package, which would choose 
      the best vehicle available for that based on a series of algorithms.`,
      images: PostTrackingPhotos,
      backendLink: 'https://github.com/marcosmarangoni/PostTracking'
    },
    {
      tecnologies: ['Java', 'Firebase', 'Android', 'MySQL', 'Node.js', 'Retrofit', 'Express.js'],
      title: 'WarehouseManager',
      description: `This project had 3 contexts: Client, Warehouse Workers and Administrators. Firstly, the administrator would
       make the orders for the Warehouse. Secondly, the warehouse workers would check if the products are inside the 
      warehouse or not. Finally, after the products were inside the werehouse the administrator could sell those products to the clients. The clients
      could put the products on a shopping cart and then order it. We saved the images of the project inside Firebase, by transforming
      the image bytes into a Base64 string.`,
      images: WarehouseManagerPhotos,
      backendLink: 'https://github.com/marcosmarangoni/WarehousemanagerNode',
      androidLink: 'https://github.com/cesarreboucas/WarehouseManager'
    }
  ]

  return (
    <React.Fragment>
      {/* Masthead */}
      <header className="masthead" id="masthead" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%), url(${MastheadBg})` }}>
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Marcos Marangoni</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Ruby and Rails developer, with 2 years of experience in full stack development.</h2>
            {/* <a className="btn btn-primary js-scroll-trigger" href="/Resume.docx" download>Download Resume</a> */}
          </div>
        </div>
      </header>
      {/* Projects */}
      <section className="projects-section bg-light" id="projects">
        <div className="container">
          <div className="row justify-content-center project-group-text">
            <div style={{ width: 'fit-content' }}>
              <div>
                <h2 className="text-center d-inline-flex">WORK EXPERIENCE</h2>
                <i className="fas fa-briefcase fa-2x"></i>
              </div>
              <hr/>
            </div>
          </div>
          {/* Project One Row */}
          { workExperience.map((v, i) => <Project {...v} key={`workExperience[${i}]`} />) }
          <div className="row justify-content-center project-group-text">
            <div style={{ width: 'fit-content' }}>
              <div>
                <h2 className="text-center d-inline-flex">PERSONAL PROJECTS</h2>
                <i className="fas fa-graduation-cap fa-2x"></i>
              </div>
              <hr/>
            </div>
          </div>
          <div>
            { personalProjects.map((v, i) => <Project {...v} key={`personalProjects[${i}]`} />) }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;