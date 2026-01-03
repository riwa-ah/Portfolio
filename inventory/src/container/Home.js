import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  margin: 4% 10%;
  text-align: center;
  line-height: 1.7;
`;

const Title = styled.h1`
  font-family: 'Fredoka One', cursive;
  font-size: 2.5rem;
  margin-bottom: 1rem;
 
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  color: #000000ff;
  margin-bottom: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #000000ff;
`;

const Highlight = styled.span`
  color: rgba(1, 0, 83, 1);
  font-weight: 600;
`;

const Link = styled.a`
  color:rgba(1, 0, 83, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

class Home extends Component {
  render() {
    return (
      <Body>
        <Title font-color="#000000">Hi, I’m Riwa </Title>

        <Subtitle>
         Computer Science graduate turning <Highlight>ideas into experiences</Highlight>,
        <Highlight> code into interaction</Highlight>, and <Highlight>learning into play</Highlight>

        </Subtitle>

        <Paragraph>
          I build interactive experiences that combine <Highlight>technology</Highlight>,
          <Highlight> creativity</Highlight>, and <Highlight> education</Highlight>.
          My main focus is front-end development, immersive applications, and turning
          complex ideas into engaging digital experiences.
        </Paragraph>

        <Paragraph>
          Beyond development, I enjoy teaching and mentoring. I’ve taught
            {' '}game development using Roblox Studio
          to high-school students at the university level, helping them learn by building. 
        </Paragraph>
      </Body>
    );
  }
}

export default Home;
