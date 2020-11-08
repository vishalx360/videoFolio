const { createCanvas, loadImage, registerFont } = require("canvas");
const cvg = require("./cvg");
const fs = require("fs");
//constants
const width = 1080;
const height = 720;
//requestanimationframe
function requestAnimationFrame(f) {
  setImmediate(() => f(Date.now()));
}
//init
//fonts
registerFont("fonts/Nunito-Regular.ttf", { family: "Nunito-Regular" });
registerFont("fonts/Nunito-Bold.ttf", { family: "Nunito-Bold" });
registerFont("fonts/Nunito-Italic.ttf", { family: "Nunito-Italic" });

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
//GLOBAL components
let userImage;
let userName;

// cvg.addFrame(canvas);

// requestAnimationFrame(() => {
//   console.log("tick");
// });
// cvg.render("example");
function init(data) {
  userName = "Vishal Kumar";

  generate_intro_slide(
    userName,
    "Full-Stack (MERN) Developer. React Javascript Python.",
    userImage
  );
  console.log("Generating video/slides " + Date.now() + "...............");

  generate_education_slide([
    {
      institute: "NSHM Knowledge Campus Durgapur",
      course: "B-Tech Computer Science",
      start_date: "2020",
      end_date: "2024",
    },
    {
      institute: "Trident Public School",
      course: "High School Diploma",
      start_date: "2018",
      end_date: "2020",
    },
  ]);
  console.log("Generating video/slides " + Date.now() + "...............");

  generate_work_slide([
    {
      company: "Google Code-in",
      end_date: "Dec, 2018",
      location: null,
      start_date: "Oct, 2018",
      title: "Open Source Developer",
    },
  ]);
  console.log("Generating video/slides " + Date.now() + "...............");

  generate_coding_slide({
    github_username: "@vishalx360",
    popular_repos: 10,
    total_contributions: 30,
    languages: ["python", "javascript", "C"],
    total_Contributed_repos: 20,
    popular_contributions: [
      {
        repo_link: "https://github.com/fossasia/SUSAI",
      },
      {
        repo_link: "https://github.com/scorelab/bot",
      },
    ],
  });
  console.log("Successfully Generated video/slides");

  //   generate_contact_slide({
  //     name: "Vivek SHah",
  //     headline: "Computer engineering student at DDU",
  //     github_username: "vivekshah1801",
  //     linkedin_profile: "https://linkedin.com/in/vivekshah1801",
  //     profile_url: "<link to image>",
  //     email: "vivekshah9969@gmail.com",
  //     website: "https://vivekshah.tech",
  //     twitter_link: "twitter.com/vivekshah",
  //   });
}
function generate_contact_slide() {
  eraseAll(true);
  let lastLine = 100;
  // add title
  ctx.font = "40px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("Connect with me", 100, lastLine);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./output/contact.png", buffer);
}
function wrapText(text, limit) {
  return text.length >= limit ? wordWrap(text, limit) : text;
}
function generate_coding_slide(data) {
  eraseAll(true);
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
  ctx.fillText(wrapText(renderText, 50), 100, lastLine);
  //popular contribution
  lastLine += 70;

  ctx.fillText("🞄 " + "Popular Contribution", 100, lastLine);
  ctx.font = "28px Nunito-Bold";

  for (let i = 0; i < data.popular_contributions.length; i++) {
    let contribution = data.popular_contributions[i];
    lastLine += 50;

    ctx.fillText(
      "- " + wrapText(contribution.repo_link.substring(19), 50),
      115,
      lastLine
    );
    if (lastLine > height - 100) {
      break;
    }
  }
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./output/coding.png", buffer);
}

function eraseAll(tag) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);
  add_brand_watermark();
  if (tag) {
    generate_header(userName, userImage);
  }
}
// INTRO
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
  ctx.fillText(wordWrap(headline, 30), 100, 400);
  // add image

  ctx.drawImage(image, 620, 166, 380, 380);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./output/intro.png", buffer);
}

function generate_header(name, image) {
  // add name
  ctx.font = "20px Nunito-Bold";
  ctx.fillStyle = "#151515";
  let renderText = name.length >= 20 ? wordWrap(name, 20) : name;
  ctx.fillText(renderText, width - 250, 80);
  // add image

  ctx.drawImage(image, width - 110, 28, 80, 80);
}

function generate_education_slide(education_list) {
  eraseAll(true);
  // add slide title
  ctx.font = "50px Nunito-Bold";
  ctx.fillStyle = "#151515";
  ctx.fillText("🏫 Education", 100, 100);

  //
  let lastLine = 250;

  education_list.forEach((data) => {
    // add course

    ctx.font = "40px Nunito-Bold";
    ctx.fillStyle = "#151515";
    ctx.fillText("🞄 " + data.course, 100, lastLine);
    // add institutation
    ctx.font = "30px Nunito-Bold";
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
  fs.writeFileSync("./output/education.png", buffer);
}

//WORK
function generate_work_slide(workList) {
  eraseAll(true);

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
  fs.writeFileSync("./output/work.png", buffer);
}

//UTIL
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

function addLine(y) {
  // Draw line under text
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, y);
  ctx.lineTo(50 + width - 100, y);
  ctx.stroke();
}

//util
function wordWrap(str, maxWidth) {
  var newLineStr = "\n";
  done = false;
  res = "";
  while (str.length > maxWidth) {
    found = false;
    // Inserts new line at first whitespace of the line
    for (i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join("");
        str = str.slice(i + 1);
        found = true;
        break;
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join("");
      str = str.slice(maxWidth);
    }
  }

  return res + str;
}

function testWhite(x) {
  var white = new RegExp(/^\s$/);
  return white.test(x.charAt(0));
}

function preload(data) {
  //getURL image
  loadImage("./test/test.jpeg").then((image) => {
    userImage = image;
    console.log("Adding to queue ...............");

    init();
  });
}

let data = preload();

module.exports = preload;
