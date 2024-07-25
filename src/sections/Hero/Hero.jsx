import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import cv from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id="hero">
      {/* this div contains image and color mode changer */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of sushant"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      {/* this div contains info about person */}
      <div className={styles.info}>
        <h1>Sushant Sharma</h1>
        <h2>Software Developer</h2>
        <span>

          <a href="https://www.linkedin.com/in/sushantsharma06" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src={linkedInIcon}
              alt="linkedin"
            />
          </a>

          <a href="https://github.com/sushantsharma108" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src={githubIcon}
              alt="github"
            />
          </a>

        </span>

        <p className={styles.motto}>With a passion for developing modern React web applications for commercial businesses.</p>

        <a href={cv} download>
          <button className="resume">Resume</button>
        </a>

      </div>

    </section>
  );
};

export default Hero;