import React from "react";
import "./AboutMe.scss";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

function AboutMe() {
  return (
    <div id="aboutme" className="SecPage bord margiTB">
      <div className="heading">
        <h5 className="upperAndSpac">Few words about me</h5>
        <h2>
          Adam Święciak <span>Frontend Developer</span>
        </h2>
      </div>
      <section>
        <Container>
          <Row className="align-items-center mb-4">
            <Col xs={12} md={4}>
              <Bounce>
                <div className="SecPage__MyPhoto"></div>
              </Bounce>
            </Col>
            <Col xs={12} md={7}>
              <Fade right>
                <p>
                  I have graduated technical studies. In my BEng thesis I have
                  built a model and programmed the arduino module. Since a long
                  time I've been creating my own projects in front-end
                  development. Some of them can be seen on the git-hub. One of
                  my projects that is commercially used is about a set of
                  websites for employees of the bank where I currently work. I
                  would like to take a job as a programmer so I could develop my
                  programming skills and get experienced with commercial
                  projects. Being a part of a development team is my current
                  goal.{" "}
                </p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Zoom bottom>
                <h3>Main Technology</h3>
                <ul>
                  <li>JS/jquery</li>
                  <li>Angular</li>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>React Basic</li>
                  <li>CSS</li>
                  <li>HTML 5</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                  <li>RWD (Responsive Web Design)</li>
                  <li>Node.js</li>
                </ul>
              </Zoom>
            </Col>
            <Col xs={12} md={4}>
              <Zoom left>
                <h3>Other Technology</h3>
                <ul>
                  <li>SEO</li>
                  <li>SASS</li>
                  <li>Flexbox</li>
                  <li>Webpack</li>
                  <li>BEM</li>
                  <li>DRY</li>
                  <li>Gulp.js</li>
                  <li>Ajax/Axios</li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutMe;
