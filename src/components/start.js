import React from "react";
import FileSaver from "file-saver";
import document from "../assets/GHR23.docx";

function Start() {
  const handleDownload = () => {
    FileSaver.saveAs(document, 'GHR23.docx' );
  };

  return (
    <div className="intro-wrapper">
      <div className="intro">
        <h1 className="salutation">Hi, I'm Greg.</h1>
        <br></br>
        <h2 className="intro-blurb">
          I'm a dad, homebrewer, and full-stack web developer.
        </h2>
        <br></br>
        <h2 className="intro-blurb">Thanks for stopping by.</h2>
        <button className="resume-download" onClick={handleDownload}>Resume</button>
      </div>
    </div>
  );
}

export default Start;
