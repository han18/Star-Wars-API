import "./App.css";
import { useEffect, useState } from "react";
import StarShipCard from "./Components/StarShipCard";

function App() {
  // State to hold star wars data
  const [starData, setStarData] = useState([]);

  // Function to get star wars data api
  const getStarWars = async (searchItems) => {
    console.log(getStarWars);
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/${searchItems}`
      );
      const data = await response.json();
      setStarData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    getStarWars();
  };

  return (
    <div className="App">
      {" "}
      <h1>Fetching Star Wars From an API </h1>
      <StarShipCard star-search={getStarWars} />
    </div>
  );
}

export default App;
