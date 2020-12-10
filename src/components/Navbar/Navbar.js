import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GenHead2, GenPara } from "../../styles/indexStyles"

export default function Navbar() {

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    width: 100%;
    background-color: #ffff;
    padding: 3rem 0;
    box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);
    .nav_items {
      display: flex;
    }
    .nav_items > * {
      margin-right: 1rem;
    }
`
  return (
  <Header>
    <GenHead2 none>
    Agent
  </GenHead2>

    <div className="nav_items">
        <Link to="/jobs"><GenPara lessSize lessSpacing grey>Jobs</GenPara></Link>
        <Link to="/contact"><GenPara lessSize lessSpacing grey>Contact</GenPara></Link>
    </div>
  </Header>
  )
}