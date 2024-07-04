import React from 'react'
import checkmarkLight from '../../assets/checkmark-light.svg'
import checkmarkDark from '../../assets/checkmark-dark.svg'
import styles from '../Skills/SkillsStyles.module.css'
import SkillsCard from '../../common/SkillsCard'

const Skills = () => {

    const data = ['HTML', 'TailwindCSS','BootStrap', 'JavaScript','MongoDB', 'Express', 'React', 'NodeJs','Git','GitHub']
    return (
        <section id='skills' className={styles.container}>
            <h1>Skills</h1>
            <SkillsCard src={checkmarkDark} data={data}/>
        </section>
    )
}

export default Skills