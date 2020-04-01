import React from "react";
import "./MainPage.scss";
import { Navbar, Nav } from "react-bootstrap";
import Particles from "react-particles-js";

function MainPage() {
  return (
    <div id="main" className="mainPage">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home" className="brand mr-auto upperAndSpac">
            <i class="fab fa-connectdevelop"></i>
            <div className="myBrand">
              <p>adam</p> <p>Święciak</p>
            </div>
          </Navbar.Brand>
          <Nav className="textnav mr-4">
            <Nav.Link href="#main">Home</Nav.Link>
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certificat">Certificates</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <section className="mainPage__section">
        <Particles
          params={{
            particles: {
              number: {
                value: 80
              },
              size: {
                value: 2
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
      </section>
    </div>
  );
}

export default MainPage;
