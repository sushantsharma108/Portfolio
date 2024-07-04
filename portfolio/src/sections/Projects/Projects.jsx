import styles from "../Projects/ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

const Projects = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={viberr}
          link="https://www.github.com/sushantsharma108"
          h3="Viberr"
          p="Web Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.github.com/sushantsharma108"
          h3="FreshBurger"
          p="Burger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.github.com/sushantsharma108"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitlift}
          link="https://www.github.com/sushantsharma108"
          h3="Fitlift"
          p="Fitness App"
        />

      </div>
    </section>
  );
};

export default Projects;
