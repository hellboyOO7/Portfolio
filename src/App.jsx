import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="bodyContainer">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
