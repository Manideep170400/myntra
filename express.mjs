import express from "express";
import cors from "cors";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is created a http://localhost:${port}`);
});
