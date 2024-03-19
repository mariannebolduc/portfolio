import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import CardInfo from "./models/CardInfo";
import MathEnJeu from "./pages/Projects/MathEnJeu/MathEnJeu";
import Lightbeans from "./pages/Projects/Lightbeans/Lightbeans";
import EyeDesigner from "./pages/Projects/EyeDesigner/EyeDesigner";
import { ReactComponent as ScrollButton } from "./assets/images/scroll_up_button.svg";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  const [cards] = useState<CardInfo[]>([
    {
      name: "eyeDesigner",
      url: "/eyeDesigner",
      description: "jeu  sur watchOS",
    },
    {
      name: "Lightbeans",
      url: "/lightbeans",
      description: "visualisation de matériaux",
    },
    {
      name: "Math en jeu",
      url: "/mathEnJeu",
      description: "jeu vidéo éducatif",
    },
  ]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div className="App">
      <ScrollUp />
      <Header scrolled={scrolled} />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Main cards={cards} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/mathEnJeu" element={<MathEnJeu />}></Route>
          <Route path="/eyeDesigner" element={<EyeDesigner />}></Route>
          <Route path="/lightbeans" element={<Lightbeans />}></Route>
        </Routes>

        {scrolled && (
          <ScrollButton
            className="scrollButton"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
