import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Realtor CRM",
      technologies: "Vue & Vuetify",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg1,
    },
    {
      title: "Spectrometry Remote Lab",
      technologies: "Angular & Angular Material",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg2,
    },
    {
      title: "Booking System",
      technologies: "Angular & Angular Material",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg3,
    },
    {
      title: "Spectra UPB",
      technologies: "Flutter",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg1,
    },
    {
      title: "Spectra PI",
      technologies: "Raspberry Pi & Python",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imgUrl: projImg2,
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
