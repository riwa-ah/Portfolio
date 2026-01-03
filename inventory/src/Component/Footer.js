import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../themes/styleConstants';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';

const FooterDiv = styled.div`
  padding-top: 0rem;
  padding-bottom: 0;
  background-color: #bec3dfff;
  text-align: center;
  height: 60px;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
  
`;

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateY(-5px);
    transition: all 0.3s ease;
  }
`;


class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <div className="row social" style={{ margin: 0, marginTop: '0px' }}>
          <div className="col-lg-12">
            <SocialIconList>
             <SocialIcon>
                <a href="mailto:riwaabouhosn@gmail.com" target="_blank" rel="noreferrer">
                <IconImage src={email} alt="Email"  />
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="http://www.linkedin.com/in/riwaaboulhosn" target="_blank" rel="noreferrer">
                <IconImage src={linkedin} alt="LinkedIn"  />
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://github.com/riwa-ah" target="_blank" rel="noreferrer">
                <IconImage src={github} alt="GitHub"  />
                </a>
              </SocialIcon>
              
            </SocialIconList>
           <div  id= "copyright" style={{ margin: 0,  backgroundColor: '#eff1ffff' }}>
             <p style={{ marginTop: 5,textAlign: 'center', padding: 10 }}>©2025 Riwa Abou Hosn</p>
            </div>
        </div>
        </div>
      </FooterDiv>
    );
  }
}

export default Footer;
