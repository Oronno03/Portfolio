import pycreations from "./assets/Project 1.png";
import spacexapi from "./assets/Project 2.png";
import statuscycler from "./assets/statuscycler.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./motion";
import "./styles/projects.css";

const projects = [
  {
    title: "Space X API",
    description: "Fetch and display data from the SpaceX API",
    image: `${spacexapi}`,
    sourceCode: "https://github.com/Oronno03/SpaceX-API",
    categories: ["Web Dev", "Python", "Flask", "API"],
  },
  {
    title: "PyCreations",
    description: "A collection of fun and useful Python projects!",
    image: `${pycreations}`,
    sourceCode: "https://github.com/Oronno03/PyCreations/",
    categories: ["Python"],
  },
  {
    title: "Discord Status Cycler",
    description:
      "A python script to change your status automatically at a specific interval",
    image: `${statuscycler}`,
    sourceCode: "https://github.com/Oronno03/Discord-Status-Cycler",
    categories: ["Python", "Automation", "Discord"],
  },
];

const ProjectsSection = () => {
  return (
    <motion.section id="projects" variants={staggerContainer()}>
      <motion.h2
        className="heading"
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        My <span>Projects</span>
      </motion.h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Tilt
            className="project-card-wrapper"
            key={index}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            transitionSpeed={100}
            perspective={1000}
          >
            <motion.div
              className="project-card-wrapper green-pink-gradient"
              variants={fadeIn("right", "ease", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-links">
                  {project.sourceCode && (
                    <a
                      className="project-link green-text-gradient"
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SourceCode
                    </a>
                  )}
                </div>
                <div className="project-categories">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="project-category blue-text-gradient"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
