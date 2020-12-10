import {
  Banner,
  DynamicText,
  SectionTwo,
  SectionThree,
  SectionFour,
  FLexBoxIndex,
  TextWrapper,

} from "../styles/indexStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import React from "react"

library.add(faHeart, faCode, faGem, fas)

export default function Home() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <Banner></Banner>
        <TextWrapper>
          <div>
            <h2>Secret Agent</h2>
            <p>Games are not just for kids</p>
            <Link to="/mode">Our work</Link>
          </div>
        </TextWrapper>
        <DynamicText>Learn More</DynamicText>
      </section>
      <SectionTwo>
        <div>
          <h2>our Mission</h2>
          <p>
            Great programmers take on a new mission with every console.log()
          </p>
          <h5>- Vantol Bennett</h5>
        </div>
        <span>
          <FontAwesomeIcon
            icon="gem"
            color="#04f5c6"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="heart"
            color="#00F0FF"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="code"
            color="#73DBFD"
            size="6x"
            fixedWidth
            border
          />
        </span>
      </SectionTwo>
      <SectionThree>
        <FLexBoxIndex>
          <div className="image">
            <img src="pic01.jpg" alt="pic01" />
          </div>
          <div className="text_section3">
            <h2>Code Development</h2>
            <p>
              Commodo reprehenderit qui sit esse magna enim sit esse dolore
              proident eu deserunt nostrud. Officia ut id consectetur officia
              sint minim sint sit occaecat duis ipsum sit. Ad voluptate tempor
              nulla esse nisi. Culpa proident nulla irure reprehenderit aute
              laboris aute.
            </p>
          </div>
        </FLexBoxIndex>
        <FLexBoxIndex inverse>
          <div className="text_section3">
            <h2>Code Development</h2>
            <p>
              Commodo reprehenderit qui sit esse magna enim sit esse dolore
              proident eu deserunt nostrud. Officia ut id consectetur officia
              sint minim sint sit occaecat duis ipsum sit. Ad voluptate tempor
              nulla esse nisi. Culpa proident nulla irure reprehenderit aute
              laboris aute.
            </p>
          </div>
          <div className="image">
            <img src="pic02.jpg" alt="pic02" />
          </div>
        </FLexBoxIndex>
        <FLexBoxIndex>
          <div className="image">
            <img src="pic03.jpg" alt="pic03" />
          </div>
          <div className="text_section3">
            <h2>Code Development</h2>
            <p>
              Commodo reprehenderit qui sit esse magna enim sit esse dolore
              proident eu deserunt nostrud. Officia ut id consectetur officia
              sint minim sint sit occaecat duis ipsum sit. Ad voluptate tempor
              nulla esse nisi. Culpa proident nulla irure reprehenderit aute
              laboris aute.
            </p>
          </div>
        </FLexBoxIndex>
      </SectionThree>
      <SectionFour>
        <div className="header_section4">
          <div className="title_section4">
            Technologies
          </div>
        </div>
      </SectionFour>
    </>
  )
}
