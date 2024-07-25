import React from "react";
import styles from "../sections/Projects/ProjectStyles.module.css";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import { useTheme } from "./ThemeContext";


const ProjectCard = (props) => {
    // const { src, link, h3, p } = values;
    const { theme, toggleTheme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <div>
            <div id={styles.project}>
                <a href={props.webLink} target="_blank">
                    <img className={styles.hover} src={props.src} alt="" />
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                </a>
            </div>

            <div id={styles.git}>
                <a href={props.gitLink} target="_blank">
                    <img src={githubIcon} id={styles.icon}/>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
