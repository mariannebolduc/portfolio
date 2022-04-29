import React from "react";

interface Props {
  items: string[];
}

const BasicList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default BasicList;
