import React from "react";
import ProjectIntro from "../../models/ProjectIntro";
import BasicList from "./BasicList";
import "./introStyles.css";

interface Props {
  introInfo: ProjectIntro;
}

const Intro: React.FC<Props> = ({ introInfo }) => {
  return (
    <div>
      <div className="company-container">
        <img style={{ marginTop: 0 }} src={introInfo.imageUrl} alt="" />
        <p>{introInfo.duration}</p>
        <h1>{introInfo.mainTitle}</h1>
        <h3>{introInfo.subtitle}</h3>
      </div>
      <div className="project-details-container">
        <div>
          <h3>Mon rôle</h3>
          <BasicList items={introInfo.roles} />
        </div>
        <div>
          <h3>Outils logiciels</h3>
          <BasicList items={introInfo.tools} />
        </div>
        <div>
          <h3>Équipe</h3>
          <p>{introInfo.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
