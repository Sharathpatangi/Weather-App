import React from "react";

export default function Result(props) {
  return (
    <div>
      <h1>
        Temperature in {props.cityName} is: {props.temp}F degrees.
      </h1>
    </div>
  );
}
