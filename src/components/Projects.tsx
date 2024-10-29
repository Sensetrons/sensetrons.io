import React from 'react';
import './projects.css'; 


interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'This is a description of project one.',
    technologies: ['React', 'TypeScript'],
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    technologies: ['Node.js', 'Express'],
    link: 'https://github.com/yourusername/project-two',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
