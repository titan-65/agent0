import { Banner, DynamicText, TextWrapper } from '../styles/indexStyles'

import { Link } from 'gatsby'
import React from "react"

export default function Home() {
  return (
    <div style={{ position: "relative"}}>
      <Banner>
      </Banner>
      <TextWrapper>
        <div>
          <h2>Secret Agent</h2>
          <p>Games are not just for kids</p>
          <Link to="/mode">Our work</Link>
        </div>
      </TextWrapper>
      <DynamicText>Learn More</DynamicText>
    </div>
  )
}
