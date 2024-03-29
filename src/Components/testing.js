// this is the previous code after using other info

import "./App.css";
import { useEffect, useState } from "react";
import StarShipCard from "./Components/StarShipCard";

function App() {
  // State to hold star wars data
  const [star, setStarData] = useState([]);

  // Function to get star wars data api
  useEffect(() => {
    const getStarWarsData = async () => {
      console.log("fetching data");
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      console.log(data);
      // set the data to the state movies variable
      setStarData(data);
    };
    getStarWarsData();
  }, []);

  return (
    <div className="App">
      {" "}
      <h1>Fetching Star Wars From an API </h1>
      <StarShipCard starsearch={setStarData} />
    </div>
  );
}

export default App;

// this code worked but i could no display the api data
