import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, technologies, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={4}>
      <div className="proj-img img-hover-zoom">
        <img src={imgUrl} alt="Project"/>
      </div>
      <div className="proj-text">
        <h4>{title}</h4>
        <span>{technologies}</span>
        <p>{description}</p>
      </div>
    </Col>
  );
};
