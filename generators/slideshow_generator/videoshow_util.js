const videoshow = require("videoshow");

const VIDEOSHOW_CONFIG = {
  fps: 24,
  loop: 5, // seconds
  transition: true,
  transitionColor: "white",
  transitionDuration: 0.2, // seconds
  videoBitrate: 1024,
  videoCodec: "libx264",
  size: "1080x720",
  audioBitrate: "128k",
  audioChannels: 2,
  format: "mp4",
  pixelFormat: "yuv420p",
};

// promise version
function generate_slideshow(
  uid,
  images = [],
  transmission_dir = "transmission"
) {
  return new Promise((resolve, reject) => {
    let filename = uid + "-" + Date.now() + "-video.mp4";
    let output_path = transmission_dir + "/output/" + filename;
    console.log("Generating Slideshow ---------");

    videoshow(images, VIDEOSHOW_CONFIG)
      .save(output_path)
      .on("start", function (command) {
        console.log("ffmpeg process running ---------");
      })
      .on("error", function (err, stdout, stderr) {
        console.error("Error:", err);
        console.error("ffmpeg stderr:", stderr);
        reject(err);
      })
      .on("end", function (output) {
        console.error("Generated Slideshow at:", output);
        resolve(filename);
      });
  });
}

module.exports = generate_slideshow;
