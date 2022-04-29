import CardList from "../../components/CardList/CardList";
import CardInfo from "../../models/CardInfo";

interface Props {
  cards: CardInfo[];
}

const Main: React.FC<Props> = ({ cards }) => {
  return (
    <div>
      <CardList cards={cards} />
    </div>
  );
};

export default Main;
