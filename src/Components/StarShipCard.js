// this is where the cards will be displayed

function StarShipCard({ star }) {
  return (
    <div>
      <h1>Display the star wars</h1>
      <div>
        {star.map((star) => {
          <h4>{star.name}</h4>;
        })}
      </div>
    </div>
  );
}

export default StarShipCard;
