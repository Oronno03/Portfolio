import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./motion";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "./styles/contact.css";

const contactDetails = [
  {
    iconClass: "bx bxs-map",
    title: "Address",
    info: "Dhaka, Bangladesh",
  },
  {
    iconClass: "bx bxs-phone",
    title: "Phone",
    info: "Not Available",
  },
  {
    iconClass: "bx bxs-envelope",
    title: "Email",
    info: "iz.oronno@gmail.com",
  },
];

const ContactSection = () => {
  const formInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(formInitialValues);
  const [buttonText, setButtonText] = useState("Send");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      toast.error("Please verify the captcha", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: 0,
        theme: "dark",
        transition: Bounce,
        style: {
          fontSize: "2rem",
        },
      });
    } else {
      setButtonText("Sending...");

      const templateParams = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phone: formValues.phone,
        message: formValues.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          () => {
            setButtonText("Send");
            setFormValues(formInitialValues);
            toast.success(
              "Thanks for reaching me out! I will contact you asap!",
              {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: 0,
                theme: "dark",
                transition: Bounce,
                style: {
                  fontSize: "2rem",
                },
              }
            );
          },
          () => {
            setButtonText("Send");
            toast.error("Failed to send message. Please try again later.", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: 0,
              theme: "dark",
              transition: Bounce,
              style: {
                fontSize: "2rem",
              },
            });
          }
        );
    }
  };

  return (
    <motion.section id="contact" variants={staggerContainer()}>
      <motion.h2
        className="heading"
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        Get in <span>touch</span>
      </motion.h2>

      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <motion.div
              className="names"
              variants={fadeIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="input-box first-name">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required={true}
                  value={formValues.firstName}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input-box last-name">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required={true}
                  value={formValues.lastName}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </motion.div>

            <motion.div
              className="email-phone"
              variants={fadeIn("right", "tween", 0.25, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="input-box email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required={true}
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  autoComplete="email"
                />
              </div>

              <div className="input-box phone">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  autoComplete="phone"
                />
              </div>
            </motion.div>

            <motion.div
              className="input-box message"
              variants={fadeIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <textarea
                name="message"
                placeholder="Message"
                value={formValues.message}
                required={true}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              ></textarea>
            </motion.div>

            <motion.div
              className="input-box recaptcha"
              variants={fadeIn("up", "tween", 0.35, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </motion.div>

            <motion.div
              className="input-box submit"
              variants={fadeIn("up", "tween", 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <button type="submit" className="btn btn-blue">
                {buttonText}
              </button>
            </motion.div>
          </form>
        </div>
        <div className="contact-info">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={fadeIn("right", "tween", 0.3 + index * 0.1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <a>
                <i className={contact.iconClass}></i>
              </a>
              <h3>{contact.title}</h3>
              <p>{contact.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </motion.section>
  );
};

export default ContactSection;
