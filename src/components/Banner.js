import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/personal-photo.jpeg";
import handImg from "../assets/img/hand.svg";
import "animate.css";

export const Banner = () => {
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const position = "Adriana Orellana";
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = position;
    let updatedText = text;

    if (updatedText === fullText) {
      setDelta(period);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
      setText(updatedText);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img className="profile-img" src={headerImg} alt="Banner"></img>
          </Col>
          <Col xs={12} md={4} xl={7}>
            <h3>
              <img
                className="greetings animate__animated animate__wobble"
                src={handImg}
                alt="Greeting"
              ></img>
              Welcome!
            </h3>
            <h1>
              {`I'm`}{" "}
              <span className="txt-rotate" dataperiod="1000">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am pursuing my Master's degree in Computer Science at the
              EPFL, Switzerland. I am passionate about technology, data science,
              and I want to use my programming and research skills to solve problems for the benefit
              of society.
            </p>
            <a href="CV-AdrianaOrellana-2024.pdf" download>
              <button>
                Download CV
                <Download size={25} />
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
