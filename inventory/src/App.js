import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// Import your container pages
import Home from './container/Home';
import Life from './container/Life';
import Code from './container/Code';
import Contact from './container/Contact';
import Certificates from './container/Certificates';
import Project1 from './container/Project1';
import Project2 from './container/project2';
import Project3 from './container/project3';  

// Header and Footer (assuming they are already styled)
import Header from './Component/Header';
import Footer from './Component/Footer';

// Styled container
const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
  background: linear-gradient(180deg, #5762faff, #c596fcff);
  
`;

const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`;

// Optional: Simple Navigation if Header is not handling it
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(1, 0, 83, 1);
  font-weight: bold;
  &:hover {
    color:rgba(1, 0, 83, 1);
  }
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Header />

        {/* Optional navigation 
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/life">Life</NavLink>
          <NavLink to="/code">Code</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
*/}
        <ContainerDiv>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
            <Route path="/code" element={<Code />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates/>}/>
            <Route path="Life/Project1" element={<Project1/>}/>
            <Route path="Life/project2" element={<Project2/>}/>
            <Route path="Life/project3" element={<Project3/>}/>
          </Routes>
        </ContainerDiv>

        <Footer />
      </AppDiv>
    );
  }
}

export default App;
