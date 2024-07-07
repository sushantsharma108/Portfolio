import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  const raw = [
    { image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/sushantsharma108", appName: "FinServ", appCategory: "Financial App",},
    { image: "https://images.unsplash.com/photo-1720170494675-e2dcd6de34a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/sushantsharma108", appName: "Viberr", appCategory: "Streaming App", },
    { image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/sushantsharma108", appName: "Khaana Khalo", appCategory: "Food Delivery App", },
    { image: "https://images.unsplash.com/photo-1720264715773-ec63cbb81e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/sushantsharma108", appName: "Chalo Chalo", appCategory: "Travel App", },
  ];

  return (
    <>
      <Hero />
      <Projects data={raw} />
      <Skills />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
