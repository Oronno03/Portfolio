import { motion } from "framer-motion";
import {
  css,
  html,
  javascript,
  mongodb,
  node,
  python,
  react,
  tailwind,
  typescript,
  go,
  java,
} from "./assets/tech";
import { fadeIn, staggerContainer, textVariant } from "./motion";
import "./styles/tech.css";

const techItems = [
  { src: css, alt: "CSS" },
  { src: html, alt: "HTML" },
  { src: javascript, alt: "JavaScript" },
  { src: mongodb, alt: "MongoDB" },
  { src: node, alt: "Node.js" },
  { src: python, alt: "Python" },
  { src: react, alt: "React" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: typescript, alt: "TypeScript" },
  { src: go, alt: "GO" },
  { src: java, alt: "Java" },
];

const Tech = () => {
  return (
    <motion.section id="tech" variants={staggerContainer()}>
      <motion.h2
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        My <span>Tech Stack</span>
      </motion.h2>
      <div className="tech-container">
        {techItems.map(({ src, alt }, index) => (
          <motion.div
            key={alt}
            className="tech-item"
            variants={fadeIn("up", "tween", index * 0.15, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={src} alt={alt} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
