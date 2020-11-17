const { createCanvas, loadImage, registerFont } = require("canvas");
const fs = require("fs");
//utility module
const { wordWrap } = require("../drawing_utility");
//constants
const width = 1080;
const height = 720;
const TRANSMISSION_DIR = "transmission";

//fonts
registerFont(__dirname + "/fonts/Nunito-Regular.ttf", {
  family: "Nunito-Regular",
});
registerFont(__dirname + "/fonts/Nunito-Bold.ttf", { family: "Nunito-Bold" });
registerFont(__dirname + "/fonts/Nunito-Italic.ttf", {
  family: "Nunito-Italic",
});

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// SLIDES Generator Functions ------------------------------------
// intro_slide -------------------------------------------
function generate_intro_slide(name, headline, image) {
  eraseAll();
  // add name
  ctx.font = "50px Nunito-Bold";
  ctx.fillStyle = "#151515";
  let renderText = name.length >= 20 ? wordWrap(name, 20) : name;
  ctx.fillText(renderText, 100, 300);
  // add headline
  ctx.font = "35px Nunito-Bold";
  ctx.fillStyle = "#585858";
  ctx.fillText(wordWrap(headline.substring(0, 70) + "...", 30), 100, 400);
  // add image

  ctx.drawImage(image, 620, 166, 380, 380);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputDir + "/intro.png", buffer);
}

//contact_slide -------------------------------------------
function generate_contact_slide() {
  eraseAll();
  generate_header(userName, userImage);
  let lastLine = 100;
  // add title
  ctx.font = "40px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("Connect with me", 100, lastLine);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputDir + "/contact.png", buffer);
}

//coding_slide -------------------------------------------
function generate_coding_slide(data) {
  eraseAll();
  generate_header(userName, userImage);
  let lastLine = 100;
  // add title
  ctx.font = "40px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("Coding Journey", 100, lastLine);
  //username
  ctx.font = "30px Nunito-Bold";
  ctx.fillStyle = "#585858";
  lastLine += 50;
  ctx.fillText(data.github_username, 100, lastLine);

  //username
  ctx.font = "30px Nunito-Bold";
  ctx.fillStyle = "#585858";
  lastLine += 100;
  ctx.fillText(
    "🞄 " + "Popular Repositories : " + data.popular_repos,
    100,
    lastLine
  );

  //username
  ctx.font = "30px Nunito-Bold";
  ctx.fillStyle = "#585858";
  lastLine += 50;
  ctx.fillText(
    "🞄 " + "Total Contribution : " + data.total_contributions,
    100,
    lastLine
  );

  //languages
  ctx.font = "30px Nunito-Bold";
  ctx.fillStyle = "#585858";
  lastLine += 50;
  let renderText = "🞄 " + "Languages :";
  data.languages.forEach((lang) => {
    renderText += " " + lang + " ,";
  });
  ctx.fillText(wordWrap(renderText, 50), 100, lastLine);
  //popular contribution
  lastLine += 70;

  ctx.fillText("🞄 " + "Popular Contribution", 100, lastLine);
  ctx.font = "28px Nunito-Bold";

  for (let i = 0; i < data.popular_contributions.length; i++) {
    let contribution = data.popular_contributions[i];
    lastLine += 50;

    ctx.fillText(
      "- " + wordWrap(contribution.substring(19), 50),
      115,
      lastLine
    );
    if (lastLine > height - 100) {
      break;
    }
  }
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputDir + "/coding.png", buffer);
}

//education_slide -------------------------------------------
function generate_education_slide(education_list) {
  eraseAll();
  generate_header(userName, userImage);
  // add slide title
  ctx.font = "50px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("🏫 Education", 100, 100);

  //
  let lastLine = 250;

  education_list.forEach((data) => {
    // add course

    ctx.font = "38px Nunito-Bold";
    ctx.fillStyle = "#151515";
    ctx.fillText("🞄 ", 100, lastLine);
    ctx.fillText(wordWrap(data.course, 40), 130, lastLine);
    // add institutation
    wordWrap(data.course, 40)
      .match(/\n/)
      .forEach((newLine) => {
        lastLine += 45;
      });
    ctx.font = "28px Nunito-Bold";
    ctx.fillStyle = "#585858";
    ctx.fillText(" - " + data.institute, 110, lastLine + 45);
    //add period
    ctx.font = "22px Nunito-Regular";
    ctx.fillStyle = "#585858";
    ctx.fillText(
      "  " + data.start_date + " - " + data.end_date,
      110,
      lastLine + 80
    );
    addLine(lastLine + 90);
    lastLine += 150;
  });

  //
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputDir + "/education.png", buffer);
}

//work_slide -------------------------------------------
function generate_work_slide(workList) {
  eraseAll();
  generate_header(userName, userImage);

  // add slide title
  ctx.font = "50px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("💼 Work", 100, 100);

  //
  let lastLine = 230;

  workList.forEach((data) => {
    // add course

    ctx.font = "40px Nunito-Bold";
    ctx.fillStyle = "#151515";
    ctx.fillText("🞄 " + data.title, 100, lastLine);
    // add institutation
    ctx.font = "30px Nunito-Bold";
    ctx.fillStyle = "#585858";
    lastLine += 45;
    ctx.fillText(" - " + data.company, 110, lastLine);
    //add period
    ctx.font = "22px Nunito-Regular";
    ctx.fillStyle = "#585858";
    lastLine += 30;
    ctx.fillText("  " + data.start_date + " - " + data.end_date, 110, lastLine);

    //desc
    if (data.description) {
      let renderText =
        data.description.length >= 80
          ? wordWrap(data.description, 80)
          : data.description;
      ctx.font = "20px Nunito-Regular";
      ctx.fillStyle = "#585858";
      lastLine += 35;
      ctx.fillText(renderText, 110, lastLine);
    }
    lastLine += 80;
    addLine(lastLine);
    lastLine += 50;
  });

  //
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outputDir + "/work.png", buffer);
}

//UTILITY Functions -------------------------------------
function eraseAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);
  add_brand_watermark();
}
// LAYERS -------------------------
// brand_watermark layer
function add_brand_watermark() {
  const watermark_text = "#madeWithVideoFolio";
  ctx.font = "20px Nunito-Bold";
  ctx.fillStyle = "#585858";

  ctx.fillText(
    watermark_text,
    width - 30 - ctx.measureText(watermark_text).width,
    height - 25
  );
}
// header layer
function generate_header(name, image) {
  // add name
  ctx.font = "20px Nunito-Bold";
  ctx.fillStyle = "#151515";
  let renderText = name.length >= 20 ? wordWrap(name, 20) : name;
  ctx.fillText(renderText, width - 250, 80);
  // add image

  ctx.drawImage(image, width - 110, 28, 80, 80);
}
// horizontal line layer
function addLine(y) {
  // Draw line under text
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, y);
  ctx.lineTo(50 + width - 100, y);
  ctx.stroke();
}

//init -------------------------------
function init(data) {
  console.log("Generating Slides ---------");

  generate_intro_slide(data.name, data.headline, userImage);
  generate_education_slide(data.education);
  generate_work_slide(data.work_exp);
  generate_coding_slide({
    github_username: data.github_username,
    popular_repos: data.popular_repo.length,
    total_contributions: data.total_Contributed_repos,
    languages: data.languages,
    total_Contributed_repos: data.total_Contributed_repos,
    popular_contributions: data.popular_contributions,
  });

  console.log("Successfully Generated Slides");
  //todo --
  //   generate_contact_slide({
  //     name: "user",
  //     headline: "Computer engineering student at DDU",
  //     github_username: "username",
  //     linkedin_profile: "https://linkedin.com/in/username",
  //     profile_url: "<link to image>",
  //     email: "example@gmail.com",
  //     website: "https://user.tech",
  //     twitter_link: "twitter.com/user",
  //   });
}
//GLOBAL components
let userImage;
let userName;
let userUid;
let outputDir;
// load ----------------------------------------------
function load(uid, data) {
  return new Promise((resolve, reject) => {
    userName = data.name;
    userUid = uid;
    outputDir = TRANSMISSION_DIR + "/input/" + userUid;

    fs.mkdir(outputDir, () => {
      //get URL image
      loadImage(data.profile_url).then((image) => {
        userImage = image;
        init(data);
        resolve(outputDir);
      });
    });
  });
}

module.exports = load;
