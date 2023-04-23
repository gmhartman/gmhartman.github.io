import React from "react";
import Logo from "../assets/ghlogo.png";

function Nav() {
  let prevScroll = window.pageYOffset;

  window.onscroll = function () {
    const currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll) {
      document.querySelector(".navbar").classList.remove("hidden");
    } else {
      document.querySelector(".navbar").classList.add("hidden");
    }

    prevScroll = currentScroll;
  };

  return (
    <div id="home">
      <div className="navbar">
        <div className="logo">
          <a href="#home" className="nav-a">
            <img className="logo" src={Logo} alt="logo thumbnail"></img>
          </a>
        </div>
        <div className="nav-links">
          <ol className="main-nav">
            <li className="nav-li">
              <a href="#about" to="/" className="nav-a">
                About
              </a>
            </li>
            <li className="nav-li">
              <a href="#projects" to="/" className="nav-a">
                Projects
              </a>
            </li>
            <li className="nav-li">
              <a href="#skills" to="/" className="nav-a">
                Skills
              </a>
            </li>
            <li className="nav-li">
              <a href="#contact" to="/" className="nav-a">
                Contact
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Nav;
