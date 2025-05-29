import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #64ffda;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  color: #64ffda;
  font-size: 0.9rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #8892b0;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const projects = [
  {
    title: 'Portfolio Personnel',
    description: 'Un portfolio moderne et responsive créé avec React, mettant en valeur mes compétences et projets.',
    tech: ['React', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/votre-username/portfolio',
    live: 'https://votre-portfolio.com'
  },
  {
    title: 'Application de Gestion de Tâches',
    description: 'Une application web de gestion de tâches avec authentification et stockage en temps réel.',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/votre-username/todo-app',
    live: 'https://votre-todo-app.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/votre-username/ecommerce',
    live: 'https://votre-ecommerce.com'
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Projets
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <Tech key={i}>{tech}</Tech>
                ))}
              </TechStack>
              <Links>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </Link>
              </Links>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 