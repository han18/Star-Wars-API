// this is where the cards will be displayed

import "../App.css";

function StarShipCard(props) {
  const starships = props.starship;
  return (
    <div className="container">
      {" "}
      {starships.map((starship, index) => (
        <div key={index} className="items">
          {starship.name}
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default StarShipCard;
