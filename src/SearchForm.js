import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { fetchWeather } from "./dataService";

const SearchForm = props => {
  const [queryType, setQueryType] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  return (
    <Form>
      <Form.Field>
        <label>City Name</label>
        <input
          placeholder="New York City"
          value={city}
          onChange={e => {
            setCity(e.target.value);
          }}
        />
      </Form.Field>
      <Button
        onClick={() => {
          fetchWeather(city).then(res => props.setWeather(res.data));
        }}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
