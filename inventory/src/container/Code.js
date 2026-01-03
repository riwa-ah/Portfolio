import React, { Component } from "react";
import styled from "styled-components";
import { ColorScheme } from "../themes/styleConstants";

/* ---------- Layout ---------- */

const SkillsWrapper = styled.div`
  max-width: 1100px;
  margin: 80px auto;
  margin-top:0px;
  padding: 0 20px;
`;

const CenteredHeader = styled.h1`
  text-align: center;
  font-family: 'Fredoka One', cursive;
  font-weight: 600;
  margin-bottom: 50px;
 
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
`;

/* ---------- Card ---------- */

const SkillCard = styled.div`
  position: relative;
  height: 300px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
  }

  &:hover .front {
    opacity: 0;
    transform: scale(0.95);
  }

  &:hover .back {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ---------- Front (Title) ---------- */

const CardFront = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka One', cursive;
  font-size: 1.3rem;
  font-weight: 600;
  flex-direction: column; /* stack vertically */
   text-align: center;
  color: #111827;
  background-color: #214b79ff
;
  transition: all 0.3s ease;
  .icon {
    font-size: 2rem; /* make the emoji bigger */
    margin-bottom: 8px; /* space between icon and text */
  }
`;

/* ---------- Back (Skills) ---------- */

const CardBack = styled.div`
  position: absolute;
  inset: 0;
  padding: 24px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #184c7eff;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 10px;
    margin-top: 10px;
  }

  li {
    font-family: 'poppins', sans-serif;
    font-size: 1rem;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
`;

/* ---------- Component ---------- */

class Code extends Component {
  render() {
    return (
      <SkillsWrapper>
        <CenteredHeader>Skills</CenteredHeader>
        <SkillsGrid>
          <SkillCard>
            <CardFront className="front">
              <span className="icon">🌐</span> 
               Web Technologies 
            </CardFront>
            <CardBack className="back">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>JSON</li>
                <li>jQuery</li>
                <li>JSP</li>
              </ul>
            </CardBack>
          </SkillCard>

          <SkillCard>
            <CardFront className="front">
            <span className="icon">👩‍💻</span> 
              Programming Languages
            </CardFront>
            <CardBack className="back">
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>C#</li>
                <li>Lua</li>
              </ul>
            </CardBack>
          </SkillCard>

          <SkillCard>
            <CardFront className="front">
            <span className="icon">🛠️</span>
               Tools & Platforms
            </CardFront>
            <CardBack className="back">
              <ul>
                <li>Visual Studio</li>
                <li>Android Studio</li>
                <li>SQL Server Management Studio</li>
                <li>Unity</li>
                <li>Jupyter Notebook</li>
                <li>Power BI</li>
                <li>Eclipse</li>
                <li>Roblox Studio</li>
                <li>Cisco Packet Tracer</li>
              </ul>
            </CardBack>
          </SkillCard>
        </SkillsGrid>
      </SkillsWrapper>
    );
  }
}

export default Code;
