import express from "express";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
