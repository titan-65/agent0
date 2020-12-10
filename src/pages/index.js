import {
  Banner,
  DynamicText,
  SectionTwo,
  SectionThree,
  SectionFour,
  FLexBoxIndex,
  TextWrapper,
  GenPara,
  GenHead2,
  FormSection
} from "../styles/indexStyles"
import Layout  from '../components/Layout/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import { fab, faHtml5, faJs, faReact, faCss3} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import React from "react"

library.add(faHeart, faCode, faGem, fas, fab)

export default function Home() {
  return (
    <Layout>
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
          <div className="title_section4">Technologies</div>
          <GenPara lessSize grey>
            Labore cillum nulla proident culpa incididunt esse magna labore
            commodo nostrud. Ipsum velit velit aliquip amet culpa nostrud tempor
            est ullamco enim sint. <br/> Reprehenderit aute voluptate et esse laboris
            enim ipsum ad ad mollit do.
          </GenPara>
        </div>
        {/*Item One*/}
        <div className="section4-grid">
          <div className="item1" style={{ backgroundColor: '#4D508E'}}>
            <div className="section4_flex">
              <FontAwesomeIcon icon={faReact} color="#00FFCC" fixedWidth/>
              <GenHead2>React</GenHead2>
            </div>
            <GenPara lessSize lessSpacing grey>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </GenPara>
          </div>
        {/*  Item Two*/}
          <div className="item2" style={{ backgroundColor: '#4D508E'}}>
            <div className="section4_flex">
              <FontAwesomeIcon icon="code" color="#00FFCC" fixedWidth/>
              <GenHead2>React</GenHead2>
            </div>
            <GenPara lessSize lessSpacing grey>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </GenPara>
          </div>
        {/*  Item Three*/}
          <div className="item3" style={{ backgroundColor: '#4D508E'}}>
            <div className="section4_flex">
              <FontAwesomeIcon icon={faJs} color="#00FFCC" fixedWidth/>
              <GenHead2>Javascript</GenHead2>
            </div>
            <GenPara lessSize lessSpacing grey>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </GenPara>
          </div>
        {/*  Item Four*/}
          <div className="item4" style={{ backgroundColor: '#4D508E'}}>
            <div className="section4_flex">
              <FontAwesomeIcon icon={faHtml5} color="#00FFCC" fixedWidth/>
              <GenHead2>Html5</GenHead2>
            </div>
            <GenPara lessSize lessSpacing grey>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </GenPara>
          </div>
        </div>
      </SectionFour>
      <section style={{ position: "relative"}}>
        <Banner parallax></Banner>
        <FormSection>
          <form name="contact" method="post" data-netlify="true">
            <div className="fields">
              <GenHead2>Contact Us</GenHead2>
              <input type="text" name="name" id="name" placeholder="Please Enter your Name"/>
              <input type="email" name="email" id="email" placeholder="Please Enter your Email"/>
              <textarea name="message" id="message"
                        placeholder="Enter your message" rows="7"></textarea>
              <div className="actions">
                <input className="button-primary" type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </FormSection>
      </section>

    </Layout>
  )
}
