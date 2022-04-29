import React from "react";
import {
  lightbeans_00_Couverture,
  lightbeans_01_Services,
  lightbeans_02_Ecosysteme,
  lightbeans_03_Observation,
  lightbeans_04_Analyse,
  lightbeans_05_MaquettesMain,
  lightbeans_06_PageProduit,
  lightbeans_07_Navigation,
  lightbeans_08_Catalogue,
  lightbeans_09_Echantillon,
  lightbeans_10_Mobile,
  lightbeans_11_SystemeDesign,
} from "..";
import lightbeansJson from "../../../assets/text/Lightbeans.json";
import BasicList from "../../../components/Project/BasicList";
import BoldList from "../../../components/Project/BoldList";
import Intro from "../../../components/Project/Intro";
import Paragraphs from "../../../components/Project/Paragraphs";
import Section from "../../../components/Project/Section";
import "../projectStyles.css";

const Lightbeans: React.FC = () => {
  const content = lightbeansJson.content;
  const context = content.context;
  const mandate = content.mandate;
  const research = content.researchMethod;
  const constats = content.constats;
  const solution = content.solution;
  const tests = content.tests;
  const deliveries = content.devliveries;

  lightbeansJson.intro.imageUrl = lightbeans_00_Couverture;

  return (
    <div className="project-container">
      <Intro introInfo={lightbeansJson.intro} />
      <div>
        <h2>{context.title}</h2>
        <p>{context.content1}</p>
        <BoldList items={context.items} />
        <img src={lightbeans_01_Services} alt="" />
      </div>
      <div>
        <h2>{mandate.title}</h2>
        <p>{mandate.content}</p>
        <Section
          title={mandate.section.title}
          content={mandate.section.content}
          image={""}
        />
        <BasicList items={mandate.paragraphs} />
      </div>
      <div>
        <h2>{research.title}</h2>
        <h3>{research.subtitle}</h3>
        <p>{research.content1}</p>
        <BoldList items={research.items} />
        <p>{research.content2}</p>
        <div>
          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <Section
              title={research.ecosystem.title}
              content={research.ecosystem.content}
              image={""}
            />
          </div>
          <Paragraphs paragraphs={research.ecosystem.paragraphs} />
          <img src={lightbeans_02_Ecosysteme} alt="" />
        </div>
        <Section
          title={research.fieldResearch.title}
          content={research.fieldResearch.content}
          image={lightbeans_03_Observation}
        />
        <Section
          title={research.interview1.title}
          content={research.interview1.content}
          image={""}
        />
        <Section
          title={research.interview2.title}
          content={research.interview2.content}
          image={""}
        />
        <Section
          title={research.sondage.title}
          content={research.sondage.content}
          image={""}
        />
      </div>
      <div>
        <h2>{constats.title}</h2>
        <p style={{ marginBottom: "10px" }}>{constats.content}</p>
        <p className={"bold-text"}>{constats.c1.title}</p>
        <BasicList items={constats.c1.items} />
        <p className={"bold-text"}>{constats.c2.title}</p>
        <BasicList items={constats.c2.items} />
        <p className={"bold-text"}>{constats.c3.title}</p>
        <BasicList items={constats.c3.items} />
        <Paragraphs paragraphs={constats.paragraphs} />
        <img src={lightbeans_04_Analyse} alt="" />
      </div>
      <div>
        <h2>{solution.title}</h2>
        <p>{solution.content}</p>
        <img src={lightbeans_05_MaquettesMain} alt="" />
        <Section
          title={solution.section1.title}
          content={solution.section1.content}
          image={lightbeans_06_PageProduit}
        />
        <Section
          title={solution.section2.title}
          content={solution.section2.content}
          image={lightbeans_07_Navigation}
        />
        <Section
          title={solution.section3.title}
          content={solution.section3.content}
          image={lightbeans_08_Catalogue}
        />
        <Section
          title={solution.section4.title}
          content={solution.section4.content}
          image={lightbeans_09_Echantillon}
        />
        <Section
          title={solution.section5.title}
          content={solution.section5.content}
          image={lightbeans_10_Mobile}
        />
      </div>
      <div>
        <h2>{tests.title}</h2>
        <p>{tests.content}</p>
      </div>
      <div>
        <h2>{deliveries.title}</h2>
        <Section
          title={deliveries.section1.title}
          content={deliveries.section1.content}
          image={""}
        />
        <Section
          title={deliveries.section2.title}
          content={deliveries.section2.content}
          image={""}
        />
        <Section
          title={deliveries.section3.title}
          content={deliveries.section3.content}
          image={lightbeans_11_SystemeDesign}
        />
      </div>
      <div className="project-final-section">
        <h2>{lightbeansJson.conclusion.title}</h2>
        <p>
          {lightbeansJson.conclusion.part1}
          <span className="bold-text">{lightbeansJson.conclusion.bold}</span>
          {lightbeansJson.conclusion.part2}
        </p>
      </div>
    </div>
  );
};

export default Lightbeans;
