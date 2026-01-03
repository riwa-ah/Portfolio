import React, { Component } from "react";
import styled from "styled-components";
import { ColorScheme } from "../themes/styleConstants"; // Make sure folder is "themes"

const CenteredHeader = styled.h1`
  text-align: center;
  font-family: 'Fredoka One', cursive;
`;
const SkillsWrapper = styled.div`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  margin-top:0px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const SkillCard = styled.div`
  background: #bebafaff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h5`
  font-family: 'Fredoka One', cursive;
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #111827;
  border-bottom: 2px solid ${ColorScheme.primary};
  padding-bottom: 8px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: #111d30ff;
    margin-bottom: 8px;
  }
`;


export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }
`;

class Code extends Component {
  render() {
    return (
      <div>
        <SkillsWrapper>
  <CenteredHeader>Certifications:</CenteredHeader>

  <SkillsGrid>
    <SkillCard>
      <CardTitle>From CISCO Networking Academy:</CardTitle>
      <SkillList>
      <li>Artificial Intelligence Fundamentals</li>
      <li>Network Technician Career Path </li>
      <li>Introduction to Data Science </li>
      <li>Python Essentials 1 </li>
      <li>CCNAv7: Introduction to Networks </li>
      <li>CCNA: Switching, Routing, and Wireless Essentials</li>

      </SkillList>
    </SkillCard>

    <SkillCard>
      <CardTitle>Other Certificates:</CardTitle>
      <SkillList>
        <li>Certificate of Participation_ Mentor Game Development and Animation Course</li>
        <li>Certificate of Participation_ Business Modeling and Commercialization Capacity Building</li>
        <li>Database System 1st place winner in Database System Laboratory </li>
      </SkillList>
    </SkillCard>
  </SkillsGrid>
</SkillsWrapper>

      </div>
    );
  }
}

export default Code;
