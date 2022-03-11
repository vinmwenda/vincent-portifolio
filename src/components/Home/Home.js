import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vincent.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                It's
                <strong className="main-name"> Vincent </strong>
              </h1>

              <p className="heading-description blockquote">
                A Passionate Javascript (React library and Node Backend) and
                it's other Libraries developer.web developer for webs with great
                user experiences . Over two years of experience in JavaScript
                programmingng using the latest front-end and back-end
                technologies.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Lets Connect</h1>
              <p>
                {" "}
                For More information let connect and share more about web
                development
                <br />
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
