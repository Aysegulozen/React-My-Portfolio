import React from 'react';
import { Card, Button } from 'react-bootstrap';
import projectsData from '../details.json';

function Projects() {
  return (
    <div className="container">
      <div className="row">
        {projectsData.projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <Card>
            <Card.Img variant="top" src={`/images/${project.image}`} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.github_link}>GitHub Repo</Button>
                <Button variant="primary" href={project.demo_link} className="ml-2">Demo</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;