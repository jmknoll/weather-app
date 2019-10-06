import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import SearchForm from "./SearchForm";
import WeatherTable from "./WeatherTable";

const App = () => {
  const [weather, setWeather] = useState(null);

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <p>Weather App</p>
        </header>
        <SearchForm setWeather={setWeather} />
        <WeatherTable weather={weather} />
      </Container>
    </div>
  );
};

export default App;
