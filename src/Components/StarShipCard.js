// this is where the cards will be displayed

import "../App.css";

function StarShipCard(props) {
  const starships = props.starship;
  return (
    <div className="card">
      {" "}
      {starships.map((starship, index) => (
        <h3 key={index}>{starship.name}</h3>
      ))}
    </div>
  );
}

export default StarShipCard;
