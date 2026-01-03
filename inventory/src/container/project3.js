import React, { useState, useEffect } from "react";
import styled from "styled-components";

import sysDesign from "../images/library System Design.png";
import uniAdd from "../images/uniAddStu.PNG";
import uniCourse from "../images/uniCourse.PNG";
import uniFaculty from "../images/uniFaculty.PNG";


const images = [uniAdd, uniCourse, uniFaculty];

const Screenshot = styled.img`
  width: 250px;
  hieght: 500px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;

const Grid = styled.div`
  display: flex;
  height:100px;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Carousel = styled.div`
  position: relative;
`;

const FullImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 10px;
`;
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;

  ${(props) => (props.left ? "left: -70px;" : "right: -70px;")}

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }`;
const CloseButton = styled.button`
  position: absolute;
  top: -55px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const System = styled.div`
  display: flex;
  gap: 30px;
  
`;


const Project2 = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setCurrentIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div>
      <h1>E-Library Management System</h1>

      {/* Interface */}
      <h3>Interface</h3>
      <Grid>
        {images.map((img, index) => (
          <Screenshot
            key={index}
            src={img}
            alt={`E-Library screenshot ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Grid>

      {currentIndex !== null && (
        <Overlay onClick={() => setCurrentIndex(null)}>
          <Carousel onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setCurrentIndex(null)}>✕</CloseButton>

            <NavButton left onClick={prevImage}>‹</NavButton>

            <FullImage src={images[currentIndex]} />

            <NavButton onClick={nextImage}>›</NavButton>
          </Carousel>
        </Overlay>
      )}
      <br></br>
<br></br>
      {/* Tech Stack */}
      <h3>Tech Stack</h3>
      <p>
        Java</p>
      
      {/* System Architecture */}
      <h3>System Architecture</h3>
      
        <p>
         A Java-based application that manages students, courses, and faculty. 
         <br></br>The system allows adding, updating, and deleting student records, course assignments, and faculty details. 
         <br></br>The GUI is integrated within the main driver class for user interaction, providing an intuitive interface for performing all management tasks.
        </p>
      {/* Core Modules */}
      <System>
      <div>
      <h3>Core Functional Modules</h3>
      <p>
        Add, update, delete students, courses, and faculty
        <br></br>
        Assign courses to students and faculty
        <br></br>
        Interactive GUI embedded in driver class
      </p>
      
     
      </div>
      </System>
    </div>
  );
};

export default Project2;
