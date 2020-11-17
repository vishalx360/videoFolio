const fs = require("fs");
const slideGenerator = require("./slide_generator_util");
const generate_slideshow = require("./videoshow_util");

const { nanoid } = require("nanoid");

// //consts
const TRANSMISSION_DIR = "transmission";

//check if transmission directory exists
fs.access(TRANSMISSION_DIR, function (err) {
  if (err && err.code === "ENOENT") {
    console.log(`${TRANSMISSION_DIR} doesnt exists, creating....`);

    fs.mkdir(TRANSMISSION_DIR, () => {
      //input directory
      fs.mkdir(TRANSMISSION_DIR + "/input", () => {
        //output directory
        fs.mkdir(TRANSMISSION_DIR + "/output", () => {
          console.log(`created ${TRANSMISSION_DIR} directory`);
        });
      });
    });
  } else {
    console.log(`${TRANSMISSION_DIR} directory already exists -----------`);
  }
});

function generate(data) {
  return new Promise((resolve, reject) => {
    let currentUserUid = nanoid();

    slideGenerator(currentUserUid, data).then((outputDir) => {
      generate_slideshow(
        currentUserUid,
        [
          outputDir + "/intro.png",
          outputDir + "/education.png",
          outputDir + "/work.png",
          outputDir + "/coding.png",
        ],
        TRANSMISSION_DIR
      )
        .then((output) => {
          //   console.log("filename : ", output);
          resolve(output);
        })
        .catch((error) => {
          console.log("error : ", error);
          reject(error);
        });
    });
  });
}
module.exports = generate;
