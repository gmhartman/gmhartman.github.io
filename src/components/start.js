import React, { useState, useEffect } from "react";

function Start() {
  const [sectionsVisible, setSectionsVisible] = useState([false, false, false]);
  useEffect(() => {
    setTimeout(() => {
      setSectionsVisible([true, false, false]);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSectionsVisible([true, true, false]);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setSectionsVisible([true, true, true]);
    }, 3000);
  }, []);

  return (
    <div className="intro-wrapper">
      <div className="intro">
        <h1
          className={`salutation setVisible ${
            sectionsVisible[0] ? "visible" : ""
          }`}
          style={{ opacity: sectionsVisible[0] ? 1 : 0 }}
        >
          Hi, I'm <span className="greg">Greg</span>.
        </h1>
        <br></br>
        <h2
          className={`intro-blurb setVisible ${
            sectionsVisible[1] ? "visible" : ""
          }`}
          style={{ opacity: sectionsVisible[1] ? 1 : 0 }}
        >
          I'm a dad, homebrewer, and full-stack web developer.
        </h2>
        <br></br>
        <h2
          className={`intro-blurb setVisible ${
            sectionsVisible[1] ? "visible" : ""
          }`}
          style={{ opacity: sectionsVisible[1] ? 1 : 0 }}
        >
          Thanks for stopping by.
        </h2>
        <a
          href="https://drive.google.com/file/d/1B4mrS7Z-RYi3BlIS13A0H_4MJY1aUznO/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{ opacity: sectionsVisible[2] ? 1 : 0 }}
            className={`resume-download setVisible ${
              sectionsVisible[2] ? "visible" : ""
            }`}
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Start;
