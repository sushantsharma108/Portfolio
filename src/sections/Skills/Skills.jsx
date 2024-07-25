import React from "react";
import html from "../../assets/html5.png";
import css from "../../assets/css3.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import styles from "../Skills/SkillsStyles.module.css";
import SkillsCard from "../../common/SkillsCard";
import { useTheme } from "../../common/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const data = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "BootStrap",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "NodeJs",
    "Git",
    "GitHub",
  ];
  const pics = [
    {
      id: 0,
      src: html,
      alt: "html image",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
      id: 1,
      src: css,
      alt: "css image",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 2,
      src: tailwind,
      alt: "tailwind css image",
      link: "https://tailwindcss.com/",
    },
    {
      id: 3,
      src: bootstrap,
      alt: "bootstrap image",
      link: "https://getbootstrap.com/",
    },
    {
      id: 4,
      src: javascript,
      alt: "javascript image",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 5,
      src: mongodb,
      alt: "mongodb image",
      link: "https://www.mongodb.com/",
    },
    {
      id: 6,
      src: express,
      alt: "express image",
      link: "https://expressjs.com/",
    },
    {
      id: 7,
      src: react,
      alt: "react image",
      link: "https://react.dev/",
    },
    {
      id: 8,
      src: nodejs,
      alt: "nodejs image",
      link: "https://nodejs.org/en",
    },
    {
      id: 9,
      src: git,
      alt: "git image",
      link: "https://git-scm.com/",
    },
    {
      id: 10,
      src: github,
      alt: "github image",
      link: "https://github.com/",
    },
  ];
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <SkillsCard src={pics} data={data} />
    </section>
  );
};

export default Skills;
