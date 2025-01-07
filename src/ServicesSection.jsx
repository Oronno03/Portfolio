import "@flaticon/flaticon-uicons/css/all/all.css";
import { fadeIn, staggerContainer, textVariant } from "./motion";
import { motion } from "framer-motion";
import "./styles/services.css";

const services = [
  {
    icon: "bx bx-code-alt",
    title: "Fullstack Web Development",
    description:
      "I create customized websites tailored to your needs, whether for personal use, business, or corporate purposes. Starting with HTML, CSS, and JavaScript, I can develop a fully interactive site using ReactJS. For backend solutions, I utilize Python (Django/Flask).",
  },
  {
    icon: "bx bxl-discord-alt",
    title: "Discord Bot Development",
    description:
      "I specialize in developing highly customizable Discord bots using Python, NodeJS, and MongoDB. These bots allow you to personalize features such as the bot name and profile picture via commands.",
  },
  {
    icon: "fi fi-rr-api",
    title: "API Development",
    description:
      "I develop robust APIs using Python and MongoDB, ensuring they are fully functional and secure. These APIs can power your website.",
  },
  {
    icon: "bx bx-cog",
    title: "Automation",
    description:
      "I can automate repetitive tasks and workflows to save time and increase efficiency using tools like Python, Selenium, and various automation frameworks.",
  },
];

const ServicesSection = () => {
  return (
    <motion.section id="services" variants={staggerContainer()}>
      <motion.h2
        className="heading"
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        My <span>Services</span>
      </motion.h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-box"
            key={index}
            variants={fadeIn("", "", 0.2 * index, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
