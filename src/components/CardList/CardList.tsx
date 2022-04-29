import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CardInfo from "../../models/CardInfo";
import Card from "../Card/Card";
import "./cardListStyles.css";

interface Props {
  cards: CardInfo[];
}

const CardList: React.FC<Props> = ({ cards }) => {
  const navigate = useNavigate();
  const onCardClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="card-list-container">
      <h2>hello there !</h2>
      <p className="card-list-paragraph">
        Je m’appelle Marianne ! Je suis{" "}
        <span className="bold-text">designer UX/UI</span> passionnée
        d’interfaces de jeux vidéo et actuellement étudiante à la maitrise en
        design d’interaction de l’Université Laval.
      </p>
      <p>
        <NavLink to={"/about"}>
          <span className="link-text">En apprendre plus sur moi →</span>
        </NavLink>
      </p>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.name} cardInfo={card} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
