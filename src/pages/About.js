import React from "react";
import SplitText from "react-pose-text";
import { useGlobalContext } from "../context";

const About = () => {
  const { language } = useGlobalContext();
  const charPoses = {
    exit: { opacity: 0, y: 0 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 50,
    },
  };
  return (
    <section className="section about-section">
      <h1 className="section-title">
        {language === "english" && "About Us"}
        {language === "germany" && "Über Uns"}
        {language === "italy" && "Chi Siamo"}
      </h1>
      <p
        style={{
          color: "white",
          fontSize: "20px",
          textAlign: "center",
          textShadow: "2px 2px 2px black",
        }}
      >
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quo
          deserunt dicta laborum, cum deleniti aliquam, incidunt dolores omnis
          unde beatae alias pariatur expedita voluptates eum voluptas veniam
          fugit necessitatibus voluptate, provident eos quod! Laborum excepturi
          neque aliquid consequuntur vitae.
        </SplitText>
      </p>
    </section>
  );
};

export default About;
