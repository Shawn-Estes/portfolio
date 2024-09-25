import React from "react";
import PROJECTS from "../data/projects";
import { Link } from "react-router-dom";

const Project = (props) => {
    const { title, image, description, link } = props.project;

    return (
        <div style={{ display: "inline-block", width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img
                src={image}
                alt="profile"
                style={{ width: "50%", height: "50%" }}
            />
            <p>{description}</p>
            <Link to={link}>{link}/</Link>
        </div>
    );
};

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {PROJECTS.map((PROJECT) => (
                <Project key={PROJECT.id} project={PROJECT} />
            ))}
        </div>
    </div>
);

export default Projects;
