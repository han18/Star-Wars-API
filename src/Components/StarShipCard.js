// this is where the cards will be displayed
import Card from "react-bootstrap/Card";

function StarShipCard(props) {
  const starships = props.starship;
  return (
    <div>
      {" "}
      {starships.map((starship, index) => (
        <h3 key={index}>{starship.name}</h3>
      ))}
    </div>
  );
}

export default StarShipCard;
{
  /* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title></Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card> */
}
