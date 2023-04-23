import React, {useRef, useEffect} from "react";
import publicapi from "../projectimages/publicapi.png";
import reactgallery from "../assets/react-gallery-app.png";
import sqllibrary from '../assets/sql-library-manager.png';

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current ? ref.current.getBoundingClientRect().top : 0;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        ref.current.classList.add('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="projects-wrapper">
      <div>
        <h1 id="projects">Work I've Done</h1>
        <ul className="projects-ul">
          <li className="list-item">
            <a
              href="https://guarded-atoll-04866.herokuapp.com/books"
              target="_blank"
              rel="noreferrer"
              className="img1"
            >
              <img
                className="screenshot-1"
                src={sqllibrary}
                alt="public API screenshot"
              ></img>
            </a>
            <div className="project-content-wrapper">
              <h2>SQL Library Manager</h2>
              <p>
                Sequelize/SQLite library database where a user can create, update, and
                delete books upon request.
              </p>
              <p>Node/Express - SQL - Pug</p>
              <div className="links">
                <a
                  href="https://github.com/gmhartman/sql_library_manager-v1"
                  target="_blank"
                  rel="noreferrer"
                  className="github-svg-project"
                >
                  <svg
                    width="70px"
                    height="70px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="project-svg"
                  >
                    <title>github</title>
                    <rect width="24" height="24" fill="none" />
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                </a>
                <button className="live-link">
                  <a
                    href="https://guarded-atoll-04866.herokuapp.com/books"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </button>
              </div>
            </div>
          </li>
          <hr></hr>
          <li className="list-item-2">
            <a
              href="https://react-gallery-appgh.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="right-image"
            >
              <img
                className="screenshot-2"
                src={reactgallery}
                alt="public API screenshot"
              ></img>
            </a>
            <div className="project-content-wrapper">
              <h2>React Photo Gallery</h2>
              <p>
                Built using React JS - a photo gallery using the Flickr API with
                Axios to generate a gallery of photos by user request.
              </p>
              <p>React - Axios - JavaScript</p>
              <div className="links">
                <a
                  href="https://github.com/gmhartman/react-gallery-app"
                  target="_blank"
                  rel="noreferrer"
                  className="github-svg-project"
                >
                  <svg
                    width="70px"
                    height="70px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="project-svg"
                  >
                    <title>github</title>
                    <rect width="24" height="24" fill="none" />
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                </a>
                <button className="live-link">
                  <a
                    href="https://react-gallery-appgh.netlify.app/cats"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </button>
              </div>
            </div>
          </li>
          <hr></hr>
          <li className="list-item">
            <a
              href="https://gmhartman.github.io/public-api-requests/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="screenshot"
                src={publicapi}
                alt="public API screenshot"
              ></img>
            </a>
            <div className="project-content-wrapper">
              <h2>Employee Directory</h2>
              <p>
                Randomly generated employee director utilizing a public API
                request. Search bar for easy filtering.
              </p>
              <p>JavaScript - CSS - Fetch API</p>
              <div className="links">
                <a
                  href="https://github.com/gmhartman/public-api-requests"
                  target="_blank"
                  rel="noreferrer"
                  className="github-svg-project"
                >
                  <svg
                    width="70px"
                    height="70px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="project-svg"
                  >
                    <title>github</title>
                    <rect width="24" height="24" fill="none" />
                    <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
                  </svg>
                </a>
                <button className="live-link">
                  <a
                    href="https://gmhartman.github.io/public-api-requests/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <h1 className="projects-end">...and more on <a href='https://github.com/gmhartman' className="bigger-link">GitHub!</a></h1>
      </div>
    </div>
  );
}

export default Projects;
