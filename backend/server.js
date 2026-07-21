const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Fix: provide global crypto for MongoDB in certain Node setups
require("./fix-crypto");

require("./db");

const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});