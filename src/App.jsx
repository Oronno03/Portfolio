import "boxicons";
import Header from "./Header";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import Tech from "./Tech";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currPage, setCurrPage] = useState("home");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home"; // Default section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setCurrPage(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <HashLoader
          color="#6366F1"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
        />
        <h2>
          <span style={{ fontSize: "5rem" }}>Welcome</span>
        </h2>
      </div>
    );
  }

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <Header currentPage={currPage} />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Tech />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default App;
