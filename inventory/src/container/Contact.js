import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../themes/styleConstants'; // optional, for consistent colors

/* ---------- Layout ---------- */
const ContactWrapper = styled.div`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  margin-top:0px;
`;

const CenteredHeader = styled.h1`
  text-align: center;
  font-family: 'Fredoka One', cursive; /* playful bubble font */
  font-size: 2rem;
  margin-bottom: 20px;
  
`;

/* ---------- Text ---------- */
const EmailMe = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #000000ff;
  margin-bottom: 40px;

  a {
    color: ${ColorScheme.mine || 'rgba(1, 0, 83, 1)'};
    font-weight: 550;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    margin-top: 12px;
  }
`;

/* ---------- Form ---------- */
const FormDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-family: 'Fredoka One', cursive; /* playful bubble font */
  color: #000000ff;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${ColorScheme.primary || '#2563EB'};
    box-shadow: 0 0 8px rgba(37, 99, 235, 0.2);
  }
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${ColorScheme.primary || '#2563EB'};
    box-shadow: 0 0 8px rgba(37, 99, 235, 0.2);
  }
`;

/* ---------- Buttons ---------- */
const PortButton = styled.a`
  display: inline-block;
  width:350px;
  hight:10px;
  padding: 12px 24px;
  margin: 0.5em 0;
  background-color: ${ColorScheme.primary || '#2563EB'};
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${ColorScheme.mine|| '#1D4ED8'};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  
  padding: 12px 0;
  background-color: ${ColorScheme.primary || '3c65d6ff'};
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${ColorScheme.mine || '#3c65d6ff'};
  }
`;

/* ---------- Component ---------- */
class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <CenteredHeader>Get in Touch with Me!</CenteredHeader>
        <CenteredHeader>
          <PortButton
            href="https://drive.google.com/file/d/18bB6XHs_cNgbZssjdITQS60qXtgeTaS4/view?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </PortButton>
        </CenteredHeader>
        <EmailMe>
          Email me directly at{" "}
          <a
            href="mailto:riwaabouhosn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>riwaabouhosn@gmail.com</strong>
          </a>
          <div>Or add a note below:</div>
        </EmailMe>

        <FormDiv>
          <form action="https://..." method="POST" id="contactform">
            <FormGroup>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" placeholder=" Your Name"  />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" name="_replyto" placeholder="Your Email" />
            </FormGroup>

            <FormGroup>
              <FormLabel>Note:</FormLabel>
              <CommentInput name="comment" placeholder="Your message..." />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormDiv>
      </ContactWrapper>
    );
  }
}

export default Contact;
