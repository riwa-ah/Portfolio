import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // FIXED: use react-router-dom
import styled from 'styled-components';

const ProfileTitle = styled.h1`
  color: black;
  font-family: 'fredoka one', cursive;
  font-size: 2.5rem;
`;

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'poppins' , sans-serif;
  color: black;
 
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileTitle>Riwa Abou Hosn</ProfileTitle>
        </Link>
        <div>
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/code">SKILLS</NavLink>
          <NavLink to="/life">PROJECTS</NavLink>
           <NavLink to="/certificates">CERTIFICATES</NavLink>  
          <NavLink to="/contact">CONTACT</NavLink>
         
        </div>
        <hr />
      </HeaderDiv>
    );
  }
}

export default Header;
