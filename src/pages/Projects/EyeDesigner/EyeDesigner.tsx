import React from "react";
import {
  eyeD_00_Couverture,
  eyeD_01_Priority,
  eyeD_02_UserFlow,
  eyeD_03_Inspiration,
  eyeD_04_Style,
  eyeD_05_Maquettes,
} from "..";
import eyeDesignerJson from "../../../assets/text/EyeDesigner.json";
import Intro from "../../../components/Project/Intro";
import SmallSection from "../../../components/Project/SmallSection";
import "../projectStyles.css";

const EyeDesigner: React.FC = () => {
  const content = eyeDesignerJson.content;
  const mandate = content.mandate;
  const priorityList = content.priorityList;
  const userFlow = content.userFlow;
  const inspiration = content.inspiration;
  const styleGuide = content.styleGuide;
  const sketches = content.sketches;
  eyeDesignerJson.intro.imageUrl = eyeD_00_Couverture;

  return (
    <div className="project-container">
      <Intro introInfo={eyeDesignerJson.intro} />
      <div>
        <h2>{mandate.title}</h2>
        <p>{mandate.content}</p>
      </div>
      <SmallSection
        title={priorityList.title}
        content={priorityList.content}
        image={eyeD_01_Priority}
      />
      <SmallSection
        title={userFlow.title}
        content={userFlow.content}
        image={eyeD_02_UserFlow}
      />
      <SmallSection
        title={inspiration.title}
        content={inspiration.content}
        image={eyeD_03_Inspiration}
      />
      <SmallSection
        title={styleGuide.title}
        content={styleGuide.content}
        image={eyeD_04_Style}
      />
      <SmallSection
        title={sketches.title}
        content={sketches.content}
        image={eyeD_05_Maquettes}
      />
      <div className="project-final-section">
        <h2>{eyeDesignerJson.conclusion.title}</h2>
        <p>{eyeDesignerJson.conclusion.content}</p>
      </div>
    </div>
  );
};

export default EyeDesigner;
