import React, { useEffect, useState } from 'react';

function Footer() {
  return (
    <React.Fragment>
      < section className="contact-section bg-black" id="contacts" >
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
            <a className="mx-2" href="https://github.com/marcosmarangoni"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section >
      {/* Footer */}
      < footer className="footer bg-black small text-center text-white-50" > <div className="container">Copyright © Marcos Marangoni 2021</div></footer >
    </React.Fragment>
  );
}

export default Footer;