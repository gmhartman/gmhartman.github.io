import React, {useRef, useEffect} from "react";
import photo from "../assets/predsfam.png";

function About() {
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
      <div ref={ref} className='about-wrapper'>
        <div className="about-text">
          <h1 id="about">About <span className="greg">Greg</span></h1>
          <p className="about-p">
            I'm a supply chain manager with 9 years of experience, and an
            aspiring full-stack web developer. I'm a proud dad, craft beer and
            homebrew enthusiast, and local sports-goer.
          </p>
          <p className="about-p">
            Here you will find several projects that demonstrate my knowledge in
            front-end and back-end development, as well as my ability to work
            with frameworks, databases, APIs, and more.
          </p>
          <p className="about-p">Thanks for stopping by. </p>
        </div>
        <div className="famphoto">
          <img
            src={photo}
            alt="family at preds game"
            className="predsphoto"
          ></img>
        </div>
      </div>
  );
}

export default About;
