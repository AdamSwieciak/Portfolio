import React from "react";
import "./Certificate.scss";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import cert from "../img/certificate/Adam cert.jpg";
import cert1 from "../img/certificate/Adam cert1.jpg";
import cert2 from "../img/certificate/UC-8d9f6f99-6b01-4e54-a726-cc506e7e7b60.jpg";
import cert3 from "../img/certificate/UC-09YWBJTY.jpg";
import cert4 from "../img/certificate/UC-MZ3RJIS8.jpg";
import cert5 from "../img/certificate/cert3.jpg";
import cert6 from "../img/certificate/UC-f66.jpg";
import Bounce from "react-reveal/Bounce";

function Certificate() {
  return (
    <div id="certificat" className="certPage bord margiTB">
      <div className="heading">
        <h5 className="upperAndSpac">see mine</h5>
        <h2>
          <span>Certificates</span>
        </h2>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Bounce right>
              <Carousel className="carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert5}
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert6}
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert3}
                    alt="Fourth slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert4}
                    alt="Fifte slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert2}
                    alt="Secound slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cert1}
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={cert} alt="First slide" />
                </Carousel.Item>
              </Carousel>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Certificate;
