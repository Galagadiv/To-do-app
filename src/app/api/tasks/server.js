const express = require("express");
const app = express();

const fs = require("fs");
const filePath = "./data.json";

app.use(express.json());

app.get("/app/api/tasks", (req, res) => {
  const data = fs.readFileSync(filePath, "utf-8");
  res.status(201).send(JSON.parse(data));
});

app.post("/app/api/tasks/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(filePath, "utf-8")).push(req.body);
  res.status(201).send(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));
