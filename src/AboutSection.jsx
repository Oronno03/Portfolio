import img from "./assets/about.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./motion";
import "./styles/about.css";

const AboutSection = () => {
  return (
    <motion.section id="about" variants={staggerContainer()}>
      <motion.h2
        className="heading"
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        About <span>Me</span>
      </motion.h2>
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>I am Intiser Zaman (Oronno)</h3>
          <p>
            I am a 9th Grade student who is passionate about programming and
            technology living in Bangladesh. I am always looking for new
            challenges and experiences. I am interested in both frontend and
            backend development and have a good understanding of the latest
            technologies and tools. I am a quick learner and collaborate closely
            with clients. Let&apos;s work together to bring your ideas to life!
          </p>
        </motion.div>
        <motion.div
          className="about-img"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={img} alt="about" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
