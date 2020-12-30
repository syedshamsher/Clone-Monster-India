import React from "react";
import JobSeekers from "./JobSeekers";
import Employers from "./Employers";
import Monster from "./Monster";
import StayConnected from "./StayConnected";
import Legal from "./Legal";
import styled from "styled-components";

const FooterStyles = styled.div`
  background-color: #5d4da8;
  display: flex;
  flex-direction: row;
  color: white;
`;

const FooterWrap = styled.div`
  margin-left: 100px;
`;

function Footer() {
  return (
    <FooterStyles>
      <FooterWrap>
        <div>
          <h3>Job Seekers</h3>
          <p>Job Search</p>
          <p>Job Seekers Login</p>
          <p>Upload Resume</p>
          <p>Search Tips</p>
          <p>Find Companies</p>
          <p>Career Advice</p>
          <p>Free Job Alert</p>
          <p>Help</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div>
          <h3>Employers</h3>
          <p>Employers Login</p>
          <p>Access Resume Database</p>
          <p>Adverise with us</p>
          <p>Buy Online</p>
          <p>Job Posting</p>
          <p>Join mRecuriters</p>
          <p>Research Reports</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div>
          <h3>Monster</h3>
          <p>About Us</p>
          <p>Career With Us</p>
          <p>Testimonials</p>
          <p>XML Sitemap</p>
          <p>Contact Us</p>
          <p>Send Feedback</p>
          <p>Html Sitemap</p>
          <p>Jobs App</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div>
          <h3>Stay Connected</h3>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div>
          <h3>Legal</h3>
          <p>Security & Fraud</p>
          <p>Terms of Use</p>
          <p>Complaints</p>
          <p>Privacy Policy</p>
          <p>Be Safe</p>
        </div>
      </FooterWrap>
    </FooterStyles>
  );
}

export default Footer;
