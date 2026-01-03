import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ariseLogo from "../images/ariseLogo.png";
import libraryLogo from "../images/libraryLogo2.PNG";
import uniLogo from "../images/uniLogo.PNG";

const CenteredHeader = styled.h1`
  text-align: center;
  font-family: "Zilla Slab Highlight", sans-serif;
`;

const LifeThumbnail = styled.img`
  width: 15%;
  height: 15%;
  display: block;
  margin: 0 auto;
  background-color: #ffffff;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
  text-align: center;
`;

const LifeRow = styled.div`
  margin: 20px -15px;
`;

class Life extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Here are some of my recent projects:</CenteredHeader>

        {/* ===== ROW 1 ===== */}
        <LifeRow className="row">
          {/* ===== Project 1 ===== */}
          <div className="col-md-6 col-sm-12">
            {/* Image → Project Details */}
            <Link to="/life/Project1">
              <LifeThumbnail src={ariseLogo} alt="ARise Education project" />
            </Link>

            {/* Title → External link */}
            <a
              href="https://drive.google.com/file/d/1s2DLcwPaywmuBbI-6_qffA_iNq-_Xn4L/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LifeHeader>ARise Education</LifeHeader>
            </a>

            <LifeProjectBlurb>
              ARise Education is a solution for grade 3 students that uses
              Augmented Reality (AR) to combine the real world with virtual
              objects viewed through the device’s camera. The app makes learning
              fun, interactive, and self-guided, follows the Lebanese curriculum,
              and provides instant feedback while helping teachers track student
              progress.
            </LifeProjectBlurb>
          </div>

          {/* ===== Project 2 ===== */}
          <div className="col-md-6 col-sm-12">
            {/* Image → Project Details */}
            <Link to="/life/project2">
              <LifeThumbnail src={libraryLogo} alt="E-Library project" />
            </Link>

            {/* Title → GitHub */}
            <a
              href="https://github.com/riwa-ah/E-Library-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LifeHeader>E-Library Management System</LifeHeader>
            </a>

            <LifeProjectBlurb>
              E-Library Management System is a Java-based application designed to
              manage books, users, and borrowing processes efficiently.
            </LifeProjectBlurb>
          </div>
        </LifeRow>

        {/* ===== ROW 2 ===== */}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {/* Image → Project Details */}
            <Link to="/life/project3">
              <LifeThumbnail src={uniLogo} alt="University Management System" />
            </Link>

            {/* Title → GitHub */}
            <a
              href="https://github.com/riwa-ah/University-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LifeHeader>University Management System</LifeHeader>
            </a>

            <LifeProjectBlurb>
              University Management System is a Java project that manages student
              records, courses, and administrative operations.
            </LifeProjectBlurb>
          </div>
        </div>
      </div>
    );
  }
}

export default Life;
