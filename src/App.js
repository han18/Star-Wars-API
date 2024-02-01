import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // State to hold star wars data
  const [starData, setStarData] = useState([]);

  // Function to get star wars data api
  const getStarWars = async (searchItems) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/${searchItems}`
      );
      const data = await response.json();
      setStarData(data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="App">
      {" "}
      <h1>Fetching Star Wars From an API </h1>
    </div>
  );
}

export default App;
