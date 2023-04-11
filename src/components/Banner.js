import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/personal-photo.jpeg";
import handImg from "../assets/img/hand.svg";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const position = "Research Assistant";
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
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h3>
              <img className="greetings animate__animated animate__wobble" src={handImg} alt="Greeting"></img>
              Welcome!
            </h3>

            <h1>
              {`I'm Adriana Orellana`}{" "}
              <span className="txt-rotate" dataperiod="1000">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I studied Computer Systems Engineering, and I want to use my
              programming and research skills to solve problems for the benefit
              of society.
            </p>
            <a href="/files/CV-AdrianaOrellana.pdf" download>
              <button>
                Download CV
                <Download size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="profile-img" src={headerImg} alt="Banner"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
