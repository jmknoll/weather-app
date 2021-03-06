import React from "react";
import { Label, Table, Header } from "semantic-ui-react";

const WeatherTable = props => {
  const { weather } = props;
  const formatTemp = temp =>
    (Math.round((temp * (9 / 5) - 459.67) * 10) / 10).toFixed(1);

  return (
    weather &&
    weather.main && (
      <>
        <Header as="h2">Current Weather for {weather.name}</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Temperature</Table.HeaderCell>
              <Table.HeaderCell>Humidity</Table.HeaderCell>
              <Table.HeaderCell>Pressure</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>{formatTemp(weather.main.temp)}&deg;F</Table.Cell>
              <Table.Cell>{weather.main.humidity}%</Table.Cell>
              <Table.Cell>{weather.main.pressure} mb</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    )
  );
};

export default WeatherTable;
