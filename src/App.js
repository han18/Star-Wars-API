import "./App.css";
import { useEffect, useState } from "react";
import StarShipCard from "./Components/StarShipCard";

function App() {
  // State to hold star wars data
  const [starData, setStarData] = useState([]);

  // Function to get star wars data api
  const getStarWars = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      {" "}
      <h1>Fetching Star Wars From an API </h1>
      <StarShipCard star={starData} />
    </div>
  );
}

export default App;

// this code worked but i could no display the api data

// useEffect(() => {
//   const getStarWarsData = async () => {
//     console.log("fetching data");
//     const response = await fetch("https://swapi.dev/api/starships/");
//     const data = await response.json();
//     console.log(data);
//     // set the data to the state movies variable
//     setStarData(data);
//   };
//   getStarWarsData();
// }, []);
