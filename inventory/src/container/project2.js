import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LibraryHome from "../images/libraryHome.PNG";
import LibraryBook from "../images/libraryBooks.PNG";
import LibraryRegister from "../images/libraryRegister.PNG";
import sysDesign from "../images/library System Design.png";

const images = [LibraryHome, LibraryBook, LibraryRegister];

/* ---------- STYLES ---------- */

const Grid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

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

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
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
  }
`;

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

/* ---------- COMPONENT ---------- */

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

      {/* Carousel Modal */}
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

      <br />

      {/* Tech Stack */}
      <h3>Tech Stack</h3>
      <p>
        <b>Backend:</b> ASP.NET Web Forms (C#)
        <br />
        <b>Frontend:</b> HTML, CSS, Bootstrap
        <br />
        <b>Database:</b> Microsoft SQL Server
      </p>

      {/* System Architecture */}
      <h3>System Architecture</h3>
      <p>
        The system follows a three-layer architecture where user and admin
        requests are handled through the presentation layer, processed by
        server-side application logic, and stored in a centralized database.
        This ensures scalability, security, and maintainability.
      </p>

      {/* Core Modules & Design */}
      <System>
        <div>
          <h3>Core Functional Modules</h3>
          <p>
            • Book search and filtering
            <br />
            • Member registration and profile management
            <br />
            • Borrowing and return tracking
            <br />
            • Administrative control over books and users
          </p>

          <h3>Database Design</h3>
          <p>
            Relational schema designed in SQL Server with tables for books,
            members, and transactions using secure local connections.
          </p>
        </div>

        <img
          src={sysDesign}
          alt="System Design Diagram"
          width="250"
          height="250"
        />
      </System>
    </div>
  );
};

export default Project2;
