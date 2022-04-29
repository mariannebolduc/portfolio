import React from "react";
import CardInfo from "../../models/CardInfo";
import CardParallax from "../CardParallax/CardParallax";
import { getParallaxImages } from "./CardHelper";
import "./cardStyles.css";

interface Props {
  cardInfo: CardInfo;
  onCardClick: (id: string) => void;
}

const Card: React.FC<Props> = ({ cardInfo, onCardClick }) => {
  const parallaxInfo = getParallaxImages(cardInfo.name);

  return (
    <div className="card" onClick={() => onCardClick(cardInfo.url)}>
      <h3>{cardInfo.name}</h3>
      <p className="smol-text">{cardInfo.description}</p>
      <CardParallax
        layers={parallaxInfo.layers}
        loadingImage={parallaxInfo.loadingImage}
      />
    </div>
  );
};

export default Card;
