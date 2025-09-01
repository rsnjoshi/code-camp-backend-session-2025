import express from "express";
import router from "./routes/index.js";

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(
    `Todo app backend server is listening for api requests in port ${PORT}`
  );
});
