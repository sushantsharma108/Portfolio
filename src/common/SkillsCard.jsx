import React from 'react'
import styles from '../sections/Skills/SkillsStyles.module.css'

const SkillsCard = ({ src, data }) => {
    return (
        <div id={styles.skillCard} className={styles.skills}>
                <div id={styles.img_cp}>
                    {src.map((item, index) =>
                    (
                        <a href={item.link} key={item.id} id={styles.imgComp} target='_blank'>
                            <img src={item.src} alt={src.alt} id={styles.mainImg} />
                            <p>{data[index]}</p>
                        </a>
                    )
                    )}
                </div>
        </div>
    )
}

export default SkillsCard
