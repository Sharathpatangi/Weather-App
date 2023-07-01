const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/backendDataApi", (req, res) => {
  const { cityName } = req.query;
  const apiKey = "b4d4edf8561adddc572018752607cd91";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";
  //console.log(url);

  try {
    https.get(url, (response) => {
      response.on("data", (data) => {
        var weatherData = JSON.parse(data);
        var temp = weatherData.main.temp;
        //console.log(temp);

        res.json({ message: `${temp}` });
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => console.log("Server is running on port: 5000"));
