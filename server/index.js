import express from "express";
import connectToDB from "./db/db.js";
import Rainfed from "./models/Check.js";

const app = express();
const port = process.env.PORT || 3000;

connectToDB();

app.use(express.json());

app.get("/rainfed", async (req, res) => {
  try {
    const rainfedData = await Rainfed.find();
    res.json(rainfedData);
  } catch (error) {
    console.error("Error retrieving Rainfed data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/rainfed", async (req, res) => {
  try {
    const rainfedData = req.body;
    const newRainfed = await Rainfed.create(rainfedData);
    res.status(201).json(newRainfed);
  } catch (error) {
    console.error("Error creating Rainfed document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
