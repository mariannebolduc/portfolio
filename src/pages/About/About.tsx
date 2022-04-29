import React from "react";
import "./aboutStyles.css";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Paragraphs from "../../components/Project/Paragraphs";

const About: React.FC = () => {
  const content = [
    "Allo, je m’appelle Marianne ! Je suis designer UX/UI et actuellement étudiante à la maîtrise en design d’interaction de l’Université Laval.",
    "Lors de mon parcours universitaire, j’ai développé une passion pour l’expérience utilisateur et la création d’interfaces, tout particulièrement dans le domaine du jeu vidéo. C’est d’ailleurs ce qui m’a poussée à travailler pour la refonte d’un jeu éducatif, d’entamer mon apprentissage de Unity et même de commencer mes propres projets de jeu. Toutes les étapes du processus de conception m’intéressent, allant de la recherche et l’élaboration de maquettes fonctionnelles jusqu’à l’intégration.",
    "À l’écoute, ouverte d’esprit et curieuse, j’aime toujours en apprendre plus et acquérir de nouvelles compétences en design, mais aussi dans d’autres domaines comme l’animation, l’illustration et la programmation qui me permettent de concrétiser davantage mes idées",
  ];

  return (
    <div className="about-container">
      <h2 className="about-title">à propos de moi</h2>
      <Paragraphs paragraphs={content} />
      <div className="download-container">
        <a
          href={
            "https://mariannebolduc.github.io/portfolio/CV_marianneBolduc.pdf"
          }
          download
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineDocumentDownload size={70} />
          <span className="link-text download-text">Télécharger mon CV</span>
        </a>
      </div>
      <p>
        N’hésitez pas à me contacter par{" "}
        <a className="link-text" href="mailto:marianne.bolduc9@gmail.com">
          courriel
        </a>{" "}
        ou sur{" "}
        <a
          className="link-text"
          href="https://www.linkedin.com/in/marianne-bolduc-1b419a171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>
    </div>
  );
};

export default About;
