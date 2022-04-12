import React from 'react';
import { ProjectCardStyled, TechSpan, Link } from './ProjectCardStyle';
import * as bsIcons from 'react-icons/bs'
import * as mdIcons from 'react-icons/md'

const ProjectCard = ({ image, technologies, githubLink, deployLink, description }) => {
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
      <article>
        <p>{description}</p>
      </article>
      <section className="links">
        <Link href={ githubLink } target="_blank" rel='noreferrer'>
          <bsIcons.BsGithub className="icon"/>
          GitHub
        </Link>
        <Link href={ deployLink } target="_blank" rel='noreferrer'>
          <mdIcons.MdWeb className="icon"/>
          Website
        </Link>
      </section>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
