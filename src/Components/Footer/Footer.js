import React from "react";
import "./Footer.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer" className="footer bord ">
      <Container>
        <div className="heading">
          <h5 className="upperAndSpac">i invite to contact</h5>
          <h2>
            <span>Write</span> to me
          </h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Form action="https://formspree.io/adam_10@vp.pl" method="POST">
              <Row>
                <Col>
                  <Form.Control placeholder="Name" name="Name" />
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="E-mail"
                  />
                </Col>
              </Row>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="mt-2"
              >
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Text"
                  name="text"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center p-5 mt-5 media">
          <Col xs={12} md={12}>
            <i class="fab fa-connectdevelop"></i>
            <p>adam Święciak, frontend developer</p>
            <a
              href="https://github.com/AdamSwieciak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adam-%C5%9Bwi%C4%99ciak-7a571a188/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center p-4 copyright">
          <Col xs={12} md={12}>
            <p className="upperAndSpac">
              Adam Święciak &copy; 2020 All rights reserved
            </p>
            <p className="upperAndSpac">
              Page builded in react-bootstrap technology
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
