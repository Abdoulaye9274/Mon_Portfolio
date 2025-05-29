import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: flex-start;
  background-color: #0a192f;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
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

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
`;

const SubSectionTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '▹';
    color: #64ffda;
  }
`;

const ProfileHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Name = styled.h1`
  color: #ccd6f6;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h2`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  color: #8892b0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 2px solid #64ffda;
`;

const ExperienceTitle = styled.h4`
  color: #ccd6f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.div`
  color: #64ffda;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.div`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.ul`
  color: #8892b0;
  list-style-type: none;
  padding-left: 1rem;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #64ffda;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillCategoryTitle = styled.h4`
  color: #ccd6f6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.div`
  color: #8892b0;
  background-color: rgba(100, 255, 218, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
    color: #64ffda;
  }
`;

const Text = styled.div`
  color: #8892b0;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À propos de moi
        </SectionTitle>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileHeader>
            <Name>Abdoulaye DOUMBIA</Name>
            <JobTitle>DÉVELOPPEUR WEB FULLSTACK EN ALTERNANCE</JobTitle>
            <ContactInfo>
              <ContactItem>📱 +33753325409</ContactItem>
              <ContactItem>📧 abdoulaye.doumbia1501@gmail.com</ContactItem>
              <ContactItem>📍 75018 Paris, France</ContactItem>
            </ContactInfo>
            <Text>
              Admis à Sup de Vinci pour la rentrée 2025, je recherche une alternance à partir d'août/septembre dans le
              développement web (frontend, backend ou fullstack). Passionné par l'informatique, rigoureux et motivé, je
              souhaite intégrer un environnement stimulant où je pourrai continuer à progresser et contribuer activement à
              des projets concrets et innovants.
            </Text>
          </ProfileHeader>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SubSectionTitle>Expériences Professionnelles</SubSectionTitle>
            <ExperienceItem>
              <ExperienceTitle>Développeur Web</ExperienceTitle>
              <ExperienceCompany>Ikoula</ExperienceCompany>
              <ExperienceDate>Depuis janvier 2025 - Paris, France</ExperienceDate>
              <ExperienceDescription>
                <li>Développer et intégrer de nouvelles pages web en HTML, CSS, JavaScript et PHP</li>
                <li>Optimiser les performances et le référencement SEO des sites</li>
                <li>Implémenter des solutions de maintenance et corriger les bugs</li>
                <li>Collaborer avec l'équipe sur des projets en utilisant GitHub</li>
              </ExperienceDescription>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceTitle>Webdesigner</ExperienceTitle>
              <ExperienceCompany>Freelance</ExperienceCompany>
              <ExperienceDate>Depuis janvier 2023 - Paris</ExperienceDate>
              <ExperienceDescription>
                <li>Développer des sites vitrines et e-commerce pour associations et particuliers</li>
                <li>Intégrer des CMS comme WordPress et Drupal</li>
                <li>Participer à un bootcamp de développement web</li>
              </ExperienceDescription>
            </ExperienceItem>

            <ExperienceItem>
              <ExperienceTitle>Gérant</ExperienceTitle>
              <ExperienceCompany>Cyber Café familial</ExperienceCompany>
              <ExperienceDate>Mai 2021 à septembre 2022</ExperienceDate>
              <ExperienceDescription>
                <li>Gérer et assurer la maintenance du parc informatique</li>
                <li>Organiser des tournois de jeux en réseau</li>
                <li>Fournir un support technique aux utilisateurs</li>
              </ExperienceDescription>
            </ExperienceItem>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SubSectionTitle>Formation</SubSectionTitle>
            <ExperienceItem>
              <ExperienceTitle>Bachelor 3 • Conception Développement Application</ExperienceTitle>
              <ExperienceCompany>ESIIA Paris</ExperienceCompany>
              <ExperienceDate>En cours</ExperienceDate>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>DUT • Informatique et Gestion</ExperienceTitle>
              <ExperienceCompany>Sup Management</ExperienceCompany>
              <ExperienceDate>2024</ExperienceDate>
            </ExperienceItem>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SubSectionTitle>Compétences</SubSectionTitle>
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Développement et langages</SkillCategoryTitle>
                <SkillList>
                  <SkillItem>WordPress</SkillItem>
                  <SkillItem>JavaScript</SkillItem>
                  <SkillItem>PHP</SkillItem>
                  <SkillItem>HTML</SkillItem>
                  <SkillItem>CSS</SkillItem>
                  <SkillItem>Vue.js</SkillItem>
                  <SkillItem>Java</SkillItem>
                  <SkillItem>jQuery</SkillItem>
                  <SkillItem>Bootstrap</SkillItem>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>DevOps et outils</SkillCategoryTitle>
                <SkillList>
                  <SkillItem>GitHub</SkillItem>
                  <SkillItem>Jenkins</SkillItem>
                  <SkillItem>Postman</SkillItem>
                  <SkillItem>Docker</SkillItem>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Base de données</SkillCategoryTitle>
                <SkillList>
                  <SkillItem>SQL</SkillItem>
                  <SkillItem>MySQL</SkillItem>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Méthodologie</SkillCategoryTitle>
                <SkillList>
                  <SkillItem>Agile - Scrum</SkillItem>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <SkillCategoryTitle>Langues</SkillCategoryTitle>
                <SkillList>
                  <SkillItem>Français</SkillItem>
                  <SkillItem>Anglais</SkillItem>
                </SkillList>
              </SkillCategory>
            </SkillsGrid>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SubSectionTitle>Centres d'intérêt</SubSectionTitle>
            <SkillList>
              <SkillItem>Veille technologique</SkillItem>
              <SkillItem>Participation à des communautés tech</SkillItem>
              <SkillItem>Musculation</SkillItem>
              <SkillItem>Bénévolat en soutien scolaire</SkillItem>
            </SkillList>
          </Section>
        </Content>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 