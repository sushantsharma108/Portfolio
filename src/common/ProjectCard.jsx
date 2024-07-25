import React from "react";
import styles from "../sections/Projects/ProjectStyles.module.css";
const ProjectCard = (props) => {
    // const { src, link, h3, p } = values;
    return (
        <div>
            <div id={styles.project}>
                <a href={props.link} target="_blank">
                    <img className={styles.hover} src={props.src} alt="" srcset="" />
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                </a>
            </div>

            <div id={styles.git}>
                <a href={props.link} target="_blank">
                    <i id={styles.icon} class="ri-github-fill"></i>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
