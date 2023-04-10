import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/mail.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    let message = {
      user_name: formDetails.firstName + formDetails.lastName,
    };
    e.preventDefault();
    setButtonText("Sending...");
    console.log(formDetails);
    /*emailjs
      .sendForm(
        "service_sn0c06w",
        "template_31uzuvh",
        JSON.stringify(formDetails),
        "cSn6a1ZRhsAweUk1G"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          if (result.code === 200) {
            setStatus({ succes: true, message: "Message sent successfully" });
          }
        },
        (error) => {
          console.log(error.text);
          setButtonText("Message wasn't sent");
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );*/
    setButtonText("Send");
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
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="p-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="p-1">
                    <input
                      type="text"
                      value={formDetails.lasttName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={12} className="p-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="p-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={handleSubmit}>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
