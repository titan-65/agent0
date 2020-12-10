import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components'




export default function Footer() {
  const Footer = styled.footer`
   padding: 6em 0 4em 0;
   background-color: #1d242a;
   text-align: center;
   .icons > * {
    cursor: pointer;
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.5);
   }
   .copyright {
     color: rgba(255, 255, 255, 0.5);
     font-size: 1.2rem;
     letter-spacing: 0.225em;
     padding: 0;
     text-transform: uppercase;
     margin-top: 1rem; 
   }
`
  return (
    <Footer>
        <div className="icons">
          <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth/>
          <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth/>
          <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth/>
        </div>
      <div className="copyright">
        <span>&copy; 2020, Titan</span>
      </div>
    </Footer>
  )
}

