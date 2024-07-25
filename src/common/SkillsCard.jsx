import React from 'react'
import styles from '../sections/Skills/SkillsStyles.module.css'

const SkillsCard = ({ src, data }) => {
    return (
        data.map((item, index) => (
            <div id='skills' key={index} className={styles.skills} >
                <img src={src} />
                <p>{item}</p>
            </div>
        ))
    )
}

export default SkillsCard