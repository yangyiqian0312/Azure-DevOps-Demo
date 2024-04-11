const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
}
);

app.listen(PORT, () => console.log("Server running on port 4000"));
