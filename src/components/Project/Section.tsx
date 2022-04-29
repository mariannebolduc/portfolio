import React from "react";
import "./sectionStyles.css";

interface Props {
  title: string;
  content: string;
  image: string;
}

const Section: React.FC<Props> = ({ title, content, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      {image !== "" && <img className="section-image" src={image} alt="" />}
    </div>
  );
};

export default Section;
