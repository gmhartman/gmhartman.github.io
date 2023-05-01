import React, {useRef, useEffect} from "react";

function Skills() {
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
      <div ref={ref} className="skills-wrapper">
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
            <p>Mongo DB</p>
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
