import styles from '../../sections/Projects/ProjectStyles.module.css'

const Projects = ({ data }) => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>

      {data.map((item, index) => (
        
        <div key={index} className={styles.projects}>
          <div className={styles.images}>
            <img src={item.image} alt="" srcset="" />
          </div>

          <div className={styles.appInfo}> 
            <h2>{item.appName}</h2>
            <p>{item.appCategory}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon!')}>View More</button>
    </div>
  )
}

export default Projects