import styled from 'styled-components'

const Banner = styled.div`
    &:after {
        content: "";
        display: block;
        height: 100vh;
        width: 100%;
        background-image: url('banner.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: blur(2px)
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

export {Banner, TextWrapper, DynamicText}