import React from 'react';
import { ProjectCardStyled, TechSpan, Link } from './ProjectCardStyle';

const ProjectCard = ({ image, technologies, githubLink, deployLink }) => {
  return(
    <ProjectCardStyled>
      <img src={ image } alt="project" />
      <section className="techs">
        {technologies.map((techText) => (
          <TechSpan key={ techText }>
            {techText}
          </TechSpan>
        ))}
      </section>
      <section className="links">
        <Link href={ githubLink } target="_blank" rel='noreferrer'>
          GitHub
        </Link>

        <Link href={ deployLink } target="_blank" rel='noreferrer'>
          Website
        </Link>
      </section>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
