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
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      websiteLink: "https://code-boss.netlify.app",
      githubLink: "https://github.com/sushantsharma108/CodeBoss-Landing-Page",
      appName: "CodeBoss",
      appCategory: "Courses Website",
    },
    {
      image:
        "https://images.unsplash.com/photo-1720170494675-e2dcd6de34a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      websiteLink: "https://denty-tech.netlify.app",
      githubLink: "https://github.com/sushantsharma108/PROJECTS/tree/main/Project1-Dentytech",
      appName: "DentyTech",
      appCategory: "Landing Page",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      websiteLink: "https://eventdojo.netlify.app",
      githubLink: "https://github.com/sushantsharma108/EventDojo-Landing-Page",
      appName: "EventDojo",
      appCategory: "Events Planner",
    },
    {
      image:
        "https://images.unsplash.com/photo-1720264715773-ec63cbb81e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
