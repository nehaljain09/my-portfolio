import Main from "./components/Main";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-poppins select-none text-black bg-[#f9f1e6] dark:bg-[#20262E] dark:text-white  transition duration-500">
      <Navbar />
      <Main />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
