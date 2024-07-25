import styles from "../Projects/ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

const Projects = ({ data }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        {data.map((item,index) => {
          return (
            <ProjectCard key={index} src={item.image} link={item.link} h3={item.appName} p={item.appCategory} />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;


