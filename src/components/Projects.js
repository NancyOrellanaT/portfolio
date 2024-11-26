import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spectrometryLab.jpeg";
import projImg2 from "../assets/img/booking.jpg";
import projImg3 from "../assets/img/spectraUPB2.jpeg";
import projImg4 from "../assets/img/spectraPi2.jpeg";
import projImg5 from "../assets/img/escapeToReading.png";
import projImg6 from "../assets/img/realtorApp.jpg";
import projImg7 from "../assets/img/mnlpProject.png";
import projImg8 from "../assets/img/datavizProject.png";
import projImg9 from "../assets/img/roboticsProject.png";
import projImg10 from "../assets/img/semesterProject.png";
import projImg11 from "../assets/img/mlProject.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Structuring Argumentation in Online Debate Using Large Language Models",
      technologies: "Unsloth, LLMs, Python",
      description:
        "I explored evaluating argument quality using two approaches: theoretical and practical. The theoretical approach allowed me to analyze an argument's quality based on its internal characteristics, such as how logical and reasonable it is. The practical approach, on the other hand, involved comparing two arguments to see which one was more persuasive. I fine-tuned Llama 3 8B and Mistral 7B v0.2 to test these approaches. The results showed these models outperformed baselines in both approaches and that the practical approach works best for concise arguments, while the theoretical approach is more effective with more detailed ones.",
      imgUrl: projImg10,
      infoLink: "https://drive.google.com/file/d/1fnHse-9OUOpjdLHJsEdROk9YfzEJHMp_/view?usp=sharing",
    },
    {
      title: "Alpaca-Tutor: A LLM-Based Chatbot for Assisting Students in STEM Courses",
      technologies: "PyTorch, Transformers, DPO and Quantization",
      description:
        "Alpaca Tutor is a specialized AI assistant designed to support college students in STEM fields. Current large language models struggle to address the complex mathematical and reasoning concepts required in these fields. To overcome this limitation, a new dataset was created using chain-of-thought and large language models with strong reasoning skills. Then, after finetuning a base model using this dataset, Direct Preference Optimization (DPO) was applied to align the model's responses with human preferences. The result is an AI assistant that can provide step-by-step solutions to complex problems.",
      imgUrl: projImg7,
      infoLink: "https://drive.google.com/file/d/1c5eLuRb01Q6eyHEpyCDOVGjcdCM83MNa/view?usp=sharing",
    },
    {
      title: "Wild Guard",
      technologies: "React",
      description:
        "A website that helps raise awareness about protecting endangered species through interactive visuals and tools. Using data from the IUCN database and its website, this project shows detailed information on individual endangered animals, as well as a statistical overview of the global status of endangered species. This allows users to quickly understand the current situation of endangered animals worldwide. ",
      imgUrl: projImg8,
      infoLink: "https://com-480-data-visualization.github.io/project-2024-group-era/",
    },
    {
      title: "Computer vision for map and robot detection",
      technologies: "OpenCV, Python",
      description:
        "I developed a computer vision component using OpenCV to detect a map, correct its perspective, and identify obstacles, start, and goal points. To achieve this, I employed contour detection to identify obstacles and Aruco marker recognition to identify the map and apply a perspective transformation. Additionally, this component can detect a Thymio robot in real-time, tracking its heading and x, y coordinates as it moves above the map.",
      imgUrl: projImg9,
      infoLink: "",
    },
    {
      title: "Fine-tuning open-source LLMs for argument detection",
      technologies: "litgpt, Python",
      description:
        "This project involves identifying arguments within articles, which is achieved by fine-tuning large language models such as Llama-2-7B, Mistral-7B, and Phi-1.5 using the Low-Rank Adaption (LoRA) technique. The best-performing model, Mistral-7B, achieved an accuracy of 84.24% and F1-Score of 82.23% in detecting arguments in news articles.",
      imgUrl: projImg11,
      infoLink: "https://drive.google.com/file/d/1xHIflDvZsi8NuH3MPSGy5KBxefDE5YXF/view?usp=sharing",
    },
    {
      title: "Spectra UPB",
      technologies: "Flutter",
      description:
        "Spectra UPB is a mobile spectrometry app that allows users to analyze spectral data from various light sources. I redesigned it and implemented new features such as exposure and focus controls, calibrating a low-cost spectrometer with a mercury or neon lamp.",
      imgUrl: projImg3,
      infoLink: "https://upb-edu.gitlab.io/spectraupb/",
    },
    {
      title: "Spectrometry Remote Lab",
      technologies: "Angular & Angular Material",
      description:
        "I developed a Spectrometry Remote Lab using Angular, enabling users to remotely obtain spectra from various light sources, including LED and fluorescent lamps, through the SpectraUPB application. This remote lab allows users to calibrate a low-cost spectrometer, modify exposure settings, collect data, and analyze spectral information. This lab not only makes spectrometry experiments more accessible but also enhances remote learning by providing an immersive, hands-on experience.",
      imgUrl: projImg1,
      infoLink: "https://eubbc-digital.upb.edu/spectrometry-remote-lab/",
    },
    {
      title: "Booking System",
      technologies: "Angular & Angular Material",
      description:
        "Book4RLab is an open source booking system designed for remote laboratories. I developed an intuitive and responsive user interface. Thus, instructors can effortlessly create labs, kits, and time frames, allowing students to quickly and easily reserve their preferred time slots. The system ensures that only available time slots are displayed to the students, preventing double booking or scheduling conflicts. Additionally, institutions can easily integrate this system with their labs.",
      imgUrl: projImg2,
      infoLink: "https://github.com/eubbc-digital/Book4RLab/wiki",
    },
    {
      title: "Spectra Pi",
      technologies: "Raspberry Pi & Python",
      description:
        "Spectra Pi is a Raspberry Pi software that allows users to process, calibrate, and transmit data from a low-cost spectrometer. In this project, I have implemented features that enable the real-time processing of spectral images using OpenCV, integrating models to detect elements such as neon and mercury and calibrating a low-cost spectrometer using a neon lamp. This setup is highly portable and compact, making it an ideal solution for various applications in the spectrometry field.",
      imgUrl: projImg4,
      infoLink: "",
    },
    {
      title: "Escape to reading",
      technologies: "Unity",
      description:
        '"Escape to Reading" is a virtual reality game that was a finalist in the "Dive Into Reading Hackathon" sponsored by the US Embassy in Bolivia. This game divides a story into various parchments, allowing users to unlock the next part of the narrative by solving reading comprehension questions. Through this approach, "Escape to Reading" combines traditional reading with immersive gameplay, allowing users to escape into the world of the story and enjoy a unique and interactive experience.',
      imgUrl: projImg5,
      infoLink:
        "https://drive.google.com/file/d/13mv21gu_g7QeXv9yxTLqC6UbvwzcyaRV/view?usp=sharing",
    },
    {
      title: "Realtor CRM",
      technologies: "Vue & Vuetify",
      description:
        "I implemented a Customer Relationship Management system for a real estate company. This CRM provides a centralized platform for managing customer data more efficiently, allowing real estate agents to maintain detailed records of all interactions with clients and prospects. Also, the company can better engage with potential clients and keep track of transactions.",
      imgUrl: projImg6,
      infoLink: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <h2
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              Projects
            </h2>
          )}
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
