import React, { useState,  useEffect  } from "react";
import styled from "styled-components";

import HomeScene from "../images/chapters.jpg";
import SubjectScene from "../images/heart.jpg";
import QuizScene from "../images/5 coins.jpg";
import sysDesign from "../images/System Design IEEE paper.png";
import sysArch from "../images/Sys Ar (1).png";

const images = [HomeScene, SubjectScene, QuizScene];

const Screenshot = styled.img`
 width: 250px;
  height: 160px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.08);
  }
`;

const Grid = styled.div`
  display: flex;
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
      <h1>ARise Education App</h1>

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

      {/* Tech Stack */}
      <h3>Tech Stack</h3>
      <p>
        Unity, C#, AR Foundation, TextMeshPro, Google Forms, .NET backend
      </p>

      {/* System Architecture */}
      <h3>System Architecture</h3>
      <System>
        <div>
        <p >
        <b>Curriculum Integration:</b> Learning content based on the Lebanese Grade 3 math and science curriculum.<br></br>
        <b>AR Engine:</b> Educational concepts transformed into interactive AR scenes using 3D models.<br></br>
        <b>ARise Education App:</b> Students explore lessons, interact with AR content, and complete activities.<br></br>
        <b>Assessment & Data Collection:</b> Student performance is recorded through quizzes and evaluations.<br></br>
        <b>Teacher Access:</b> Results are collected via Google Forms and downloadable by teachers for review.
        </p>
        </div>
        <img src={sysArch} alt="System Architecture" width="265px" height={250}  />
      </System>

      {/* Core Modules */}
      <h3>Core Functional Modules</h3>
      <System>
      <div>
      <p>
        <b>Curriculum/ AR Learning Activities: </b>
      Content is organized into learning objectives, topics, and question banks.
      Students engage with this content through interactive AR learning activities using 3D models and virtual scenes.<br></br>
      <b>Virtualization/ Subject Navigation & Chapter Selection: </b>
      Educational content is transformed into immersive AR experiences.
      Students can navigate through subjects and chapters via an interactive GUI, exploring lessons in a structured way.
      <br></br><b>Assessment/ Quiz & Performance Reporting: </b>
      Students complete quizzes and assessments in the system.
      Their scores and learning outcomes are recorded and processed.
      Teachers can access detailed performance reports through a dashboard.
      </p>
     </div>
      {/*   <img src={sysDesign} alt="System Design" width="105%" height={300}  />*/}
    </System>
    </div>
  );
};

export default Project2;
