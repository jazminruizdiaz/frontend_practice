import "./App.css";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="app">
      <Header isStudent={true} />
      <main className="main">
        <AboutMe />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
