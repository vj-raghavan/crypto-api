import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Crypto API is running on port : ${port}.`);
});
