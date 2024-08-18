import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section ><Services/></section>
      <section id="portfolio">
        <Parallax type="portfolio" />{" "}
      </section>
      <section id="contact">Contact</section>
      <section id="contact">About</section>
    </div>
  );
}

export default App;
