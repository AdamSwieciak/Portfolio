import React from "react";
import "./Portfolio.scss";
import Gallery from "react-grid-gallery";
import { Container, Row, Col } from "react-bootstrap";
import page from "../img/Przechwytywanie.JPG";
import pageM from "../img/PrzechwytywanieM.JPG";
import page1 from "../img/Przechwytywanie1.JPG";
import page1M from "../img/Przechwytywanie1M.JPG";
import page2 from "../img/Przechwytywanie2.JPG";
import page2M from "../img/Przechwytywanie2M.JPG";
import page3 from "../img/Przechwytywanie3.JPG";
import page3M from "../img/Przechwytywanie3M.JPG";
import page4 from "../img/Przechwytywanie4.JPG";
import page4M from "../img/Przechwytywanie4M.JPG";
import page5 from "../img/Przechwytywanie5.JPG";
import page5M from "../img/Przechwytywanie5M.JPG";
import Bounce from "react-reveal/Bounce";

const IMAGES = [
  {
    src: page,
    thumbnail: pageM,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a
        href="https://github.com/AdamSwieciak/Exchange-based-on-react-with-axiosapi"
        target="blank"
      >
        Application for converting currencies from PLN into various currencies
        with the current exchange rate from the NBP API based on React and
        Axios.
      </a>
    )
  },
  {
    src: page1,
    thumbnail: page1M,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a
        href="https://adamswieciak.github.io/Toyota-finance-service-page/"
        target="blank"
      >
        Page for employees Toyota Bank Poland.
      </a>
    )
  },
  {
    src: page2,
    thumbnail: page2M,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a href="https://adamswieciak.github.io/Dice-Game/" target="blank">
        Game for two players, based on dominos.
      </a>
    )
  },
  {
    src: page3,
    thumbnail: page3M,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a
        href="https://adamswieciak.github.io/form_Toyota_to_email/"
        target="blank"
      >
        Form for entering notifications of unavailability systems, with
        notification on e-mail.
      </a>
    )
  },
  {
    src: page4,
    thumbnail: page4M,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a
        href="https://adamswieciak.github.io/Page-about-traveling/"
        target="blank"
      >
        Page about traveling based on bootstrap grid.
      </a>
    )
  },
  {
    src: page5,
    thumbnail: page5M,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: (
      <a
        href="https://adamswieciak.github.io/Budgety-controller/"
        target="blank"
      >
        Application to calculate budget
      </a>
    )
  }
];

function Portfolio() {
  return (
    <div id="projects" className="certPage bord margiTB">
      <div className="heading">
        <h5 className="upperAndSpac">see mine</h5>
        <h2>
          <span>Few</span> Project
        </h2>
      </div>
      <Container className="mb-5">
        <Bounce>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={8}>
              <Gallery images={IMAGES} />
            </Col>
          </Row>
        </Bounce>
      </Container>
    </div>
  );
}

export default Portfolio;
