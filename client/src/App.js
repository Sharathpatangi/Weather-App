import React, { useState, useRef } from "react";
import Result from "./components/Result";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import axios from "axios";

export default function App() {
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);
  const [backendData, setBackendData] = useState(null);

  function handleChange(event) {
    setBackendData(null);
    setCityName(event.target.value);
  }

  async function handleClick() {
    inputRef.current.value = "";
    try {
      const response = await axios.get("/backendDataApi", {
        params: { cityName },
      });
      //console.log(response);
      setBackendData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <div className="inputDiv">
        <div>
          <input
            type="text"
            placeholder="City Name"
            name="cityName"
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div>
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {backendData && <Result cityName={cityName} temp={backendData} />}
      <Footer />
    </div>
  );
}
