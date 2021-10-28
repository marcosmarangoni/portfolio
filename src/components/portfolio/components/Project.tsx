import React, { useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Carousel } from 'react-bootstrap';

interface ProjectProps {
  tecnologies: Array<string>
  title: string,
  description: string,
  images: Array<string>,
  frontendLink?: string,
  backendLink?: string,
  androidLink?: string,
  mainLink?: string,
}

function Project(props: ProjectProps) {

  const projectRef = useRef<HTMLDivElement>(null);
  const observer = new IntersectionObserver(([entry]) => {
    if(!projectRef.current) return;
    if(!projectRef.current.classList.contains('start') && entry.isIntersecting) {
      projectRef.current.classList.add('start');
    }
  }, {
    threshold: 0.5
  });

  useEffect(() => {
    // if(projectRef.current) observer.observe(projectRef.current);
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <div ref={projectRef} className="horizontal-project-grid shadow-lg mt-2 mb-4">
      <Row noGutters className="justify-content-center">
        {props.images.length <= 1 ?
          <img
            className="d-flex"
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            src={props.images[0]}
          />
          :
          <Carousel interval={null} className="w-100">
            {props.images.map((v, i) =>
              <Carousel.Item key={`carouselImg[${i}]`}>
                <img
                  src={v}
                  style={{ height: '576px' }}
                  className="w-100"
                />
              </Carousel.Item>
            )
            }
          </Carousel>
        }
      </Row>
      <div>
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-white">Tecnologies Used</h4>
              <Row className="mb-5">
                {props.tecnologies.map((v, i) => <div className="badge badge-pill badge-primary m-1" key={`${i}`}>{v}</div>)}
              </Row>
              <h4 className="text-white">{props.title}</h4>
              <p className="mb-0 text-white-50">
                {props.description}
              </p>
              <hr className="d-none d-lg-block mb-0 ml-0" />
              {(props.frontendLink || props.backendLink || props.androidLink || props.mainLink) &&
                <div className="social d-flex justify-content-center code-tag-border mt-2">
                  {props.backendLink &&
                    <React.Fragment>
                      <a className="mx-2" href={props.backendLink} target="_blank" data-tip="Back end code"><i className="fas fa-hdd"></i></a>
                      <ReactTooltip />
                    </React.Fragment>
                  }
                  {props.frontendLink &&
                    <React.Fragment>
                      <a className="mx-2" href={props.frontendLink} target="_blank" data-tip="Front end code"><i className="fas fa-desktop"></i></a>
                      <ReactTooltip />
                    </React.Fragment>
                  }
                  {props.androidLink &&
                    <React.Fragment>
                      <a className="mx-2" href={props.androidLink} target="_blank" data-tip="Mobile code"><i className="fab fa-android"></i></a>
                      <ReactTooltip />
                    </React.Fragment>
                  }
                  {props.mainLink &&
                    <React.Fragment>
                      <a className="mx-2" href={props.mainLink} target="_blank" data-tip="Main Website"><i className="fa fa-link"></i></a>
                      <ReactTooltip />
                    </React.Fragment>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;