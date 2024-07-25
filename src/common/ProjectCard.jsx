import React from "react";
import styles from "../sections/Projects/ProjectStyles.module.css";
const ProjectCard = (props) => {
    // const { src, link, h3, p } = values;
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
                    <i id={styles.icon} className="ri-github-fill"></i>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
