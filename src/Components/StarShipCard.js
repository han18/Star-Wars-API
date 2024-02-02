// this is where the cards will be displayed

function StarShipCard({ star }) {
  const { name, modle } = star;
  return (
    <div>
      <h1>Display the star wars</h1>
      <div>Name: {star.name}</div>
    </div>
  );
}

export default StarShipCard;
