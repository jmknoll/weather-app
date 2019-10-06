import React, { useState, useEffect } from "react";
import { Button, Form, Select } from "semantic-ui-react";
import { fetchWeather } from "./dataService";

const SearchForm = props => {
  const { location } = props;
  const [queryType, setQueryType] = useState("latlon");
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(Math.round(location.latitude));
  const [lon, setLon] = useState(Math.round(location.longitude));
  const [city, setCity] = useState("");

  const renderLatLonForm = () => (
    <>
      <Form.Field>
        <label>Latitude</label>
        <input
          type="number"
          placeholder="40"
          value={lat}
          onChange={e => {
            setLat(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Longitude</label>
        <input
          placeholder="-72"
          value={lon}
          onChange={e => {
            setLon(e.target.value);
          }}
        />
      </Form.Field>
    </>
  );

  const renderCityNameForm = () => (
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
  );

  return (
    <Form>
      <Form.Field>
        <label>Search By</label>
        <select
          onChange={e => {
            setQueryType(e.target.value);
          }}
          value={queryType}
          placeholder="Search By"
        >
          <option value="latlon">Latitude / Longitude</option>
          <option value="name">City Name</option>
        </select>
      </Form.Field>
      {queryType === "latlon" && renderLatLonForm()}
      {queryType === "name" && renderCityNameForm()}
      <p style={{ color: "red" }}>{error}</p>
      <Button
        onClick={() => {
          setError("");
          fetchWeather(city)
            .then(res => props.setWeather(res.data))
            .catch(err => setError("City not found. Please try again"));
        }}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
