import React, { useState } from "react";
import styled from "styled-components";

const Box = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Input = styled.input``;

const Label = styled.label``;

const Field = ({ name, label }) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <Input type="text" name={name} />
  </>
);

const Container = styled(Box)`
  height: 100%;
  width: 100%;
`;

const Weather = ({ data }) => {
  if (Object.keys(data).length === 0) {
    return <></>;
  }

  return (
    <div>
      <h3>Weather</h3>
      <table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Relative Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.current.temperature_2m} C°</td>
            <td>{data.current.relative_humidity_2m}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Greeting = ({ data }) => {
  if (Object.keys(data).length === 0) {
    return <h2>Hello</h2>;
  }

  return (
    <h3>
      Hello {data.firstName} {data.lastName}
    </h3>
  );
};

const Button = styled.button``;

const Widget = () => {
  const api = window.WS?.widgetAPI();
  let clientDetails;
  if (api !== undefined) {
    clientDetails = api.getClientDetails();
    console.log("Client Details:", clientDetails);
  } else {
    console.log("Widget API is not available.");
    clientDetails = {};
  }
  const [data, setData] = useState({});

  const fetchWeather = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    console.log("Fetching weather...");
    fetch(
      "https://api.open-meteo.com/v1/forecast?" +
        new URLSearchParams({
          latitude: form.get("lat"),
          longitude: form.get("lon"),
          current: "temperature_2m,relative_humidity_2m",
          hourly: "temperature_2m,relative_humidity_2m",
        }),
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <Container>
      <Greeting data={clientDetails} />
      <form onSubmit={fetchWeather}>
        <div>
          <Field name="lat" label="Latitude" />
          <Field name="lon" label="Longitude" />
        </div>
        <Button type="submit">Check weather</Button>
      </form>
      <Weather data={data} />
    </Container>
  );
};

export default Widget;
