import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  const raw = [
    {
      image:
        "https://www.maacindia.com/_next/image?url=https%3A%2F%2Fmaacindia-public-aptech.s3.ap-south-1.amazonaws.com%2FmaacWebsite%2Fbanner%2FBanner-Bg1707211559915.png&w=3840&q=75",
      websiteLink: "https://gsapmagic.netlify.app",
      githubLink: "https://github.com/sushantsharma108/GsapWebsite1",
      appName: "GSAP Magic",
      appCategory: "Animation",
    },
    {
      image:
        "https://img.freepik.com/free-photo/wisdom-expertise-success-abundance-piled-generated-by-ai_188544-20231.jpg?t=st=1721911391~exp=1721914991~hmac=03a6e38aeba6cf3c78756885b9c64da3f709ef995c6f90f6826b08e6756deefd&w=1060",
      websiteLink: "https://code-boss.netlify.app",
      githubLink: "https://github.com/sushantsharma108/CodeBoss-Landing-Page",
      appName: "CodeBoss",
      appCategory: "Courses Website",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-male-working-nurse_23-2150829769.jpg?t=st=1721911534~exp=1721915134~hmac=01aa64e306575b8a240fd125831f1133d72301818ce5af4a64862e5e8d1a045a&w=996",
      websiteLink: "https://denty-tech.netlify.app",
      githubLink: "https://github.com/sushantsharma108/PROJECTS/tree/main/Project1-Dentytech",
      appName: "DentyTech",
      appCategory: "Landing Page",
    },
    {
      image:
        "https://img.freepik.com/free-photo/desk-calendar-with-texts-english_23-2150165923.jpg?t=st=1721911661~exp=1721915261~hmac=5d27080b2ae27b3401fabc9012d1e4a34c1bf6889b827e66c7933c93de287bb0&w=996",
      websiteLink: "https://eventdojo.netlify.app",
      githubLink: "https://github.com/sushantsharma108/EventDojo-Landing-Page",
      appName: "EventDojo",
      appCategory: "Events Planner",
    },
    {
      image:
        "https://img.freepik.com/free-photo/full-shot-man-experiencing-virtual-reality_23-2149548139.jpg?t=st=1721910649~exp=1721914249~hmac=92f24f984caaff0238ae05d793615e14c262a8780e67d33e6d4067f54bcbe181&w=900",
      websiteLink: "https://visys.netlify.app",
      githubLink: "https://github.com/sushantsharma108/VR-Website",
      appName: "ViSys",
      appCategory: "VR Website",
    },
  ];

  return (
    <>
      <Hero />
      <Projects data={raw} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;