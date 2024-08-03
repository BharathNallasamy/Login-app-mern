import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router/route.js";

// Database
import connect from "../server/database/connection.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about out stack

app.get("/", (req, res) => {
  res.json("Home GET Request");
});

// API routes
app.use('/api', router);

// Start server only we have valid connection
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is Running at Port ${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the Server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection...");
  });
