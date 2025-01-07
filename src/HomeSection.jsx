import { ReactTyped } from "react-typed";
import img from "./assets/home_pic.jpg";
import resume from "./assets/resume.pdf";
import "react-typed";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./motion";
import "./styles/home.css";

const socials = [
  {
    link: "https://www.facebook.com/profile.php?id=100006045614897",
    icon: "bx bxl-facebook",
  },
  { link: "https://github.com/Oronno03", icon: "bx bxl-github" },
  {
    link: "https://www.linkedin.com/in/intiser-zaman-oronno-511127319/",
    icon: "bx bxl-linkedin",
  },
];

const buttons = [
  { link: "#contact", text: "Contact Me", className: "btn-blue" },
  { link: resume, text: "Resume", className: "btn-blue" },
];

const HomeSection = () => {
  return (
    <section id="home">
      <motion.div
        className="home-img"
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img src={img} alt="home" />
      </motion.div>
      <div className="home-content">
        <motion.h3
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Hey there, I&apos;m
        </motion.h3>
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Intiser Zaman
        </motion.h1>
        <motion.h3
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A{" "}
          <span>
            <ReactTyped
              strings={["Student", "Fullstack Dev"]}
              typeSpeed={150}
              backSpeed={50}
              loop={true}
              cursorChar=">"
            />
          </span>
        </motion.h3>
        <motion.h3
          style={{ fontSize: "2rem" }}
          className="home-txt"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Crafting bespoke web experiences tailored to your vision
        </motion.h3>

        <div className="socials">
          {socials.map(({ link, icon }, index) => (
            <motion.a
              href={link}
              target="_blank"
              key={icon}
              variants={fadeIn("", "tween", index * 0.3, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <i className={icon}></i>
            </motion.a>
          ))}
        </div>

        <div className="btn-container">
          {buttons.map(({ link, text, className }, index) => (
            <motion.a
              href={link}
              className={`btn ${className}`}
              key={text}
              variants={fadeIn("left", "", index * 0.3, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
