import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  var today = new Date(),
    year = today.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className="copyright">Copyright {year}. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <span className="email">adriana.orellana.torrico@gmail.com</span>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/adriana-orellana-42568620b/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/aorellanat"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
