import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const handleClick = () => {
    window.open("www.fakejumia.netlify.app");
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text className="purple">
          Technology: {props.technologyUsed}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <a
          target="_blank"
          href="https://fakejumia.netlify.app"
          rel="noreferrer"
        >
          <Button variant="primary" className="download-button">
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
