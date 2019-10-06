import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import SearchForm from "./SearchForm";
import WeatherTable from "./WeatherTable";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({});

  navigator.geolocation.getCurrentPosition(position => {
    setLocation(position.coords);
  });

  return (
    <div className="App">
      <Container>
        <header
          style={{
            textAlign: "center",
            padding: 20
          }}
        >
          <Header as="h1">Weather App</Header>
        </header>
        <SearchForm setWeather={setWeather} location={location} />
        <WeatherTable weather={weather} />
      </Container>
    </div>
  );
};

export default App;
