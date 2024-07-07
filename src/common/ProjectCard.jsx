import React from 'react'
import styles from '../sections/Projects/ProjectStyles.module.css'
const ProjectCard = (props) => {
    // const { src, link, h3, p } = values;
    return (
        <a href={props.link} target='_blank'>
            <img className={styles.hover} src={props.src} alt="" srcset="" />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </a>
    )
}

export default ProjectCard