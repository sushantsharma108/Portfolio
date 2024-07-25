import styles from "../Projects/ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

const Projects = ({ data }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        {data.map((item,index) => {
          return (
            <ProjectCard key={index} src={item.image} webLink={item.websiteLink} gitLink={item.githubLink} h3={item.appName} p={item.appCategory} />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;


