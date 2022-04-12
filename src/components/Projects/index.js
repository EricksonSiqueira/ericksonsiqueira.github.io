import React from 'react';
import { StyledProjects } from './projectsStyle';
import SectionDivider from '../SectionDivider';
import GradientText from '../GradientText';
import ProjectCard from '../ProjectCard';
import projects from '../../data/projects';

const Projects = () => {
  return(
    <StyledProjects id="projects" className="section-spacing">
      <SectionDivider />
      <GradientText text={'Projetos'} classes={'tech-heading'} />
      <section className="cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.deployLink}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
            description={project.description}
          />
        ))}
      </section>
    </StyledProjects>
  )
}

export default Projects;
