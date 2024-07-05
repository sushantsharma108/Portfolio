import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  // const raw = [
  //   { image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", appName: "FinServ", appCategory: "Financial App" },
  //   { image: "https://plus.unsplash.com/premium_photo-1684581969056-9eb82b8465eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", appName: "Viberr", appCategory: "Streaming App" },
  //   { image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", appName: "Khaana Khalo", appCategory: "Food Delivery App" },
  //   { image: "https://plus.unsplash.com/premium_photo-1681488427879-9b7c067bf474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", appName: "Chalo Chalo", appCategory: "Travel App" },
  // ];
  // const [data, setRealData] = useState(raw);

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
