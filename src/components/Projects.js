import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spectrometryLab.jpeg";
import projImg2 from "../assets/img/booking.jpg";
import projImg3 from "../assets/img/spectraUPB2.jpeg";
import projImg4 from "../assets/img/spectraPi2.jpeg";
import projImg5 from "../assets/img/escapeToReading.png";
import projImg6 from "../assets/img/realtorApp.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Spectrometry Remote Lab",
      technologies: "Angular & Angular Material",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg1,
      infoLink: "https://eubbc-digital.upb.edu/spectrometry-remote-lab/"
    },
    {
      title: "Booking System",
      technologies: "Angular & Angular Material",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg2,
      infoLink: "https://eubbc-digital.upb.edu/remote-lab-booking/"
    },
    {
      title: "Spectra UPB",
      technologies: "Flutter",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg3,
      infoLink: "https://upb-edu.gitlab.io/spectraupb/"
    },
    {
      title: "Spectra PI",
      technologies: "Raspberry Pi & Python",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg4,
      infoLink: "https://eubbc-digital.upb.edu/wp-content/uploads/2023/04/RIAO-OPTILAS2023-Ormachea-et-al-02.pptx"
    },
    {
      title: "Escape to reading",
      technologies: "Unity",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg5,
      infoLink: "https://drive.google.com/file/d/13mv21gu_g7QeXv9yxTLqC6UbvwzcyaRV/view?usp=sharing"
    },
    {
      title: "Realtor CRM",
      technologies: "Vue & Vuetify",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg6,
      infoLink: ""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
        {({ isVisible }) => <h2 className={isVisible ? "animate__animated animate__fadeIn" : ""}>Projects</h2>}
        </TrackVisibility>
        <p className="presentation">
          I have participated in the development of several projects that aim to
          improve education and automate tasks. Here are some examples of my
          work:
        </p>

        <Row>
          <Col size={12}>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
