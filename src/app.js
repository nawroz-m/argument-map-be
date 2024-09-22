import express from "express";
import publicRouter from "./routes/route.js";
import middlewarConfig from "./config/middlewareConfig.js";
const PORT = 9000;
const app = express();
const PATH = "/";

// configure a middleware to parse the request body
middlewarConfig(app);

app.listen(PORT, (err) => {
  if (err) console.log(`Server is stoped due to ${err}`);
  console.log("Server is started on port ", PORT);
});
