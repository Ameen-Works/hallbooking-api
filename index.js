const express = require("express");

const app = express();

var bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const hallBookingRoutes = require("./Routes/hallBookingRoutes");

app.use("/hallBooking", hallBookingRoutes);

app.get("/hallBooking", (req, res) => {
  res.status(200).send("HomeDirectory");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
