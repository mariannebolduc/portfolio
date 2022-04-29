import React from "react";

interface Props {
  title: string;
  content: string;
  image: string;
}

const SmallSection: React.FC<Props> = ({ title, content, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default SmallSection;
