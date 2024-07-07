import React from 'react'
import styles from '../sections/Skills/SkillsStyles.module.css'

const SkillsCard = ({ src, data }) => {
    return (
        data.map((item, index) =>(
            <span key={index} className={styles.skills} >
                <img src={src} />
                <p>{item}</p>
            </span>
        ))
    )
}

export default SkillsCard