import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink, faTimes } from '@fortawesome/free-solid-svg-icons';

// Example images for projects (replace with your own)
// import MinefieldImg from '../../assets/images/minefield.png';
// import GopherGradesImg from '../../assets/images/gophergrades.png';
// import DBFLImg from '../../assets/images/dbfl.png';
import streamverseImg from '../../assets/images/streamverse.png';
import portfolioImg from '../../assets/images/portfolio.png';
import trophoImg from '../../assets/images/tropho-project.png';
import graphcsImg from '../../assets/images/asgn6.png';
import dbflbotImg from '../../assets/images/dbfl-bot.png';
import canvasImg from '../../assets/images/canvas.png';

const projectsData = [
  {
    title: 'Tropho App',
    description: 'An app to allow users to find allergy-free options at restaurants',
    details: 'Built front-end using React Native. Integrated a back-end using Firebase (Authentication, Firestore, Storage). Beta will be released by early 2026',
    completed: 'Jun 2025 - Present',
    github: null,
    live: null,
    image: trophoImg
  },
  {
    title: 'StreamVerse',
    description: 'A JavaScript based website for blog posting about movies and tv shows',
    details: 'Built front-end using ExpressJs and PUG templating language. Integrating a mySQL database to store user accounts, blog posts, and comments. **Supports**: User Accounts | Posting | Commenting',
    completed: 'Dec 2025',
    github: 'https://github.com/mikeyfera1/blog-posting-website',
    live: null,
    image: streamverseImg,
  },
  {
    title: 'Personal Portfolio',
    description: 'This website that displays everything about me!',
    details: 'Built front-end using React, as well as utilized animations from GSAP and SCSS to improve user experience.',
    completed: 'Apr 2024 - Dec 2025',
    github: 'https://github.com/mikeyfera/gophergrades',
    live: 'https://mikeyfera.com',
    image: portfolioImg
  },
  {
    title: 'Harold Project',
    description: "Recreated Harold and the Purple Crayon, using GopherGFX in CSCI 4611 class",
    details: "Built this application using gopherGFX, which uses typescript. Implemented different features, such as Ray Casting onto 3D models and generating 3D graphics",
    completed: 'Dec 2025',
    github: null,
    live: 'https://pages.github.umn.edu/CSCI4611-Fall25/Asgn6-fera0011/',
    image: graphcsImg,
  },
  {
    title: 'DBFL Discord Bot',
    description: "Discord bot automating scheduling, stat tracking, and game management for a football league",
    details: "Built using Node.js and Google Sheets API to automate scheduling and stat track for over 30+ members within the league. Also integrated real-time data updates and user commands, imporving engagement.",
    completed: 'Oct 2021 - July 2025',
    github: 'https://github.com/mikeyfera1/DBFL-Bot',
    live: null,
    image: dbflbotImg,
  },
  {
    title: 'CanvasApp',
    description: "Basic app to draw using different colors",
    details: "Used the ExpressJS framework to make a basic server, while using HTML and Javascript to implement functions for users to draw using different colors. Also includes light and dark mode!",
    completed: 'Mar 2025',
    github: 'https://github.com/mikeyfera1/CanvasApp/',
    live: null,
    image: canvasImg,
  }
];

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>

          <div className="projects-grid">
            {projectsData.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="completed">{project.completed}</span>
                </div>

                <div className="project-image">
                  <img src={project.image} alt={`${project.title} screenshot`}/>
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="View GitHub">
                      <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" title="View Live">
                      <FontAwesomeIcon icon={faExternalLink} color="4d4d4e" />
                    </a>
                  )}
                </div>

                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
