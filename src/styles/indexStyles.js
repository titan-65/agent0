import styled from "styled-components"

const Banner = styled.div`
  &:after {
    content: "";
    display: block;
    height: 100vh;
    width: 100%;
    background-image: url("banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(1px);
  }
`

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 5rem;
    opacity: 1;
    padding: 0.3em 1em;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.22em;
    font-size: 2.5rem;
  }
  a {
    background-color: #ed4933;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.225em;
    padding: 1.5rem 0.8em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const DynamicText = styled.div`
  position: absolute;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.5rem;
  z-index: 1;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  &:after {
    content: "";
    display: block;
    height: 2rem;
    width: 2rem;
    left: 50%;
    position: absolute;
    margin: 1em 0 0 -0.75em;
    background-image: url("down-arrow12.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const SectionTwo = styled.section`
  background-color: #21b2a6;
  text-align: center;
  padding: 10rem 0;
  div {
    width: 66%;
    margin: 0 auto;
  }

  h2 {
    font-size: 3rem;
    padding: 2rem 0;
    color: #ffffff;
    border-bottom: 1.5px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 1rem;
  }
  h5 {
    font-size: 1.4em;
    line-height: 2rem;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    font-weight: 800;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`

const SectionThree = styled.section`
  background-color: #2b2b2b;
  color: #ffff;
`

const FLexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "60%" : "40%")};
  }
  img {
    width: 100%;
  }
  .text_section3 {
    width: ${props => (props.inverse ? "40%" : "60%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 3rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.225rem;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.075em;
    font-size: 1.5rem;
  }
`
const GenPara = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "#c8ece9" : "#ffffff")};
`
const GenHead2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  letter-spacing: 0.225rem;
  margin: 0;
`
const SectionFour = styled.section`
    background-color: #505393;
    color: #ffffff;
    text-align: center;
    .header_section4 {
    width: 66%;
    margin: 0 auto;
    }
    .title_section4 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #ffffff;
    border-bottom: 2px solid #464981;
    text-transform: uppercase;
    letter-spacing: 0.225em;
    margin: 0;
    }
    `
export {
  Banner,
  TextWrapper,
  DynamicText,
  SectionTwo,
  SectionThree,
  FLexBoxIndex,
  GenPara,
  GenHead2,
  SectionFour,
}
