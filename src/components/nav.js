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
          <a href="#home">
            <img className="logo" src={Logo} alt="logo thumbnail"></img>
          </a>
        </div>
        <div className="nav-links">
          <ol className="main-nav">
            <li>
              <a href="#about" to="/">
                About
              </a>
            </li>
            <li>
              <a href="#projects" to="/">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" to="/">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" to="/">
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
