import React from 'react'
import styles from '../sections/Projects/ProjectStyles.module.css'
const ProjectCard = ({project}) => {
    return (
        <a href="" target='_blank'>
            <img className={styles.hover} src={image} alt="" srcset="" />
            <h3>Sushant</h3>
            <p>Hello there</p>
        </a>
    )
}

export default ProjectCard