import React from "react";

function Skills() {


  return (
      <div className="skills-wrapper">
        <div>
          <h1 id="skills">Skills</h1>
        </div>
        <div className="skills-cards">
          <div className="language-card">
            <h2>Languages</h2>
            <p>HTML</p>
            <p>CSS/SASS</p>
            <p>JavaScript</p>
            <p>Pug</p>
          </div>
          <div className="framework-card">
            <h2>Frameworks and Libraries</h2>
            <p>React JS</p>
            <p>Node</p>
            <p>Express</p>
            <p>Bootstrap</p>
          </div>
          <div className="tech-card">
            <h2>Technologies</h2>
            <p>Git/GitHub</p>
            <p>NPM</p>
            <p>Rest API</p>
            <p>SQL</p>
          </div>
        </div>
      </div>
  );
}

export default Skills;
