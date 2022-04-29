import {
  MEJ_00_Couverture,
  MEJ_01_MVP,
  MEJ_02_UserFlow,
  MEJ_03_Plateau,
  MEJ_04_Robot,
  MEJ_05_Items,
  MEJ_06_Interfaces,
  MEJ_07_Promo,
} from "..";
import mathEnJeuJson from "../../../assets/text/MathEnJeu.json";
import BasicList from "../../../components/Project/BasicList";
import Intro from "../../../components/Project/Intro";
import Paragraphs from "../../../components/Project/Paragraphs";
import Section from "../../../components/Project/Section";
import "../projectStyles.css";

const MathEnJeu: React.FC = () => {
  const content = mathEnJeuJson.content;
  const mandate = content.mandate;
  const familiarization = content.familiarization;
  const functionalSketch = content.functionalSketch;
  const artisticDirection = content.artisticDirection;
  const visualElementsCreation = content.visualElementsCreation;
  mathEnJeuJson.intro.imageUrl = MEJ_00_Couverture;

  mathEnJeuJson.content.visualElementsCreation.sections[0].image =
    MEJ_03_Plateau;
  mathEnJeuJson.content.visualElementsCreation.sections[1].image = MEJ_04_Robot;
  mathEnJeuJson.content.visualElementsCreation.sections[2].image =
    MEJ_06_Interfaces;
  mathEnJeuJson.content.visualElementsCreation.sections[3].image = MEJ_05_Items;
  mathEnJeuJson.content.visualElementsCreation.sections[4].image = MEJ_07_Promo;

  return (
    <div className="project-container">
      <Intro introInfo={mathEnJeuJson.intro} />
      <div>
        <h2>{mandate.title}</h2>
        <p>{mandate.content}</p>
        <h3>{mandate.subtitle}</h3>
        <BasicList items={content.mandate.objectives} />
      </div>
      <div>
        <Section
          title={familiarization.section1.title}
          content={familiarization.section1.content}
          image={""}
        />
        <Section
          title={familiarization.section2.title}
          content={familiarization.section2.content}
          image={MEJ_01_MVP}
        />
      </div>
      <div>
        <h2>{functionalSketch.title}</h2>
        <p>{functionalSketch.content1}</p>
        <BasicList items={functionalSketch.list} />
        <p>{functionalSketch.content2}</p>
        <img style={{ width: "100%" }} src={MEJ_02_UserFlow} alt="" />
      </div>
      <div>
        <h2>{artisticDirection.title}</h2>
        <Paragraphs paragraphs={artisticDirection.section1.content1} />
        <Section
          title={artisticDirection.section2.title}
          content={artisticDirection.section2.content}
          image={""}
        />
        <Section
          title={content.artisticDirection.section3.title}
          content={content.artisticDirection.section3.content}
          image={""}
        />
      </div>
      <div>
        <h2>{visualElementsCreation.title}</h2>
        <p>{visualElementsCreation.content1}</p>
        {visualElementsCreation.sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
          />
        ))}
      </div>
      <div className="project-final-section">
        <h2>{mathEnJeuJson.conclusion.title}</h2>
        <p>{mathEnJeuJson.conclusion.content}</p>
      </div>
    </div>
  );
};

export default MathEnJeu;
