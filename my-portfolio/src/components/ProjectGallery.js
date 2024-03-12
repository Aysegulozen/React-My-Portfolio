import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData'; // Projelerinizi içeren JSON dosyası

function ProjectGallery() {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-gallery">
        {projectsData.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
