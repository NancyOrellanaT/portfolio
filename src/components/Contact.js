import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/mail.png";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import "animate.css";

export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_sn0c06w",
        "template_31uzuvh",
        form.current,
        "cSn6a1ZRhsAweUk1G"
      )
      .then(
        (result) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          alert("Message sent successfully.");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Message wasn't sent.");
          alert("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={4} md={4}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col size={12} md={8}>
            <div>
              <TrackVisibility>
                {({ isVisible }) => (
                  <h2
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    Get In Touch
                  </h2>
                )}
              </TrackVisibility>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="p-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      name="firstName"
                      required
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="p-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      name="lastName"
                      required
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={12} className="p-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      name="email"
                      required
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="p-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      name="message"
                      required
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={handleSubmit}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
