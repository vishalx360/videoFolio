const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const slideshow_generator = require("./generators/slideshow_generator/slideshow_generator");

//constants
const PORT = process.env.PORT || 8000;
const TRANSMISSION_DIR = "transmission";

//init
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//generate route ---------------
app.post("/generate", (req, res) => {
  //validate
  let data = req.body;
  slideshow_generator(data)
    .then((output) => {
      res.status(200).json({
        download_link: "http://" + req.get("host") + "/download/" + output,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});
//download route -----------------
app.get("/download/:filename", (req, res) => {
  if (req.params.filename) {
    let filePath = TRANSMISSION_DIR + "/output/" + req.params.filename;
    fs.access(filePath, (err) => {
      if (err) {
        res.status(404).send("The file you requested does not exist.");
      } else {
        res.status(200).download(filePath);
      }
    });
  } else {
    res.status(400).send("Please provide valid filename");
  }
});

app.listen(PORT, () => {
  console.log("serevr started at http://localhost:" + PORT);
});
