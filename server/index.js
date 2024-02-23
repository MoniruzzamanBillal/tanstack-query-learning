require("dotenv").config();
const express = require("express");
const port = process.env.port || 5000;
const cors = require("cors");
const connectDb = require("./Services/Db");

const postsRoutes = require("./Routes/Posts/PostRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send({ message: "server is running " });
});

// all posts routes
app.use("/api", postsRoutes);

// for  starting thhe server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`listening from port ${port} `);
  });
});
