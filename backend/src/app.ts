import express from "express";
import { create } from "./db_operations/create";

const app = express();

app.use("/", (req, res) => {
  res.send("hello world");
});

app.use("/create", (req, res) => {
  const result = create('jannie');
  res.send(result);
});

// Port
const port = process.env.PORT || 3000;

// Start
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
