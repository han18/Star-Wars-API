// this is where the cards will be displayed
import Card from "react-bootstrap/Card";

function StarShipCard(props) {
  const starships = props.starship;
  return (
    <div>
      {starships.map((starship) => (
        <h3 key={starship.name}>
          {starship.name} {starship.model}
        </h3>
      ))}
    </div>
  );
}

export default StarShipCard;
