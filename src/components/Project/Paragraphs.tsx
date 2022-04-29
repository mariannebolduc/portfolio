import React from "react";

interface Props {
  paragraphs: string[];
}

const Paragraphs: React.FC<Props> = ({ paragraphs }) => {
  const paragraphLength = paragraphs.length;

  return (
    <div>
      {paragraphs.map((par, i) => (
        <p
          key={i}
          style={i - 1 === paragraphLength ? {} : { marginBottom: "16px" }}
        >
          {par}
        </p>
      ))}
    </div>
  );
};

export default Paragraphs;
