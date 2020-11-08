const express = require("express");
const morgan = require("morgan");

const renderer = require("./worker/renderer");

//constants
const PORT = process.env.PORT || 8000;
//init
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/render", (req, res) => {
  let response = renderer.render(req.body);
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log("worker started at http://localhost:" + PORT);
});
