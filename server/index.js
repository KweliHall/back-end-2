const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const {getHouses, deleteHouses, createHouses, updateHouses} = require("./controller.js");

app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouses);
app.post("/api/houses", createHouses);
app.put("/api/houses/:id", updateHouses);

app.listen(4004, () => console.log("Server running on port 4004"));
