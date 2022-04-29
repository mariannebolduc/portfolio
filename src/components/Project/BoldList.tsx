import React from "react";

interface Props {
  items: { title: string; description: string }[];
}

const BoldList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {<span className="bold-text">{item.title}</span>}
          {item.description}
        </li>
      ))}
    </ul>
  );
};

export default BoldList;
