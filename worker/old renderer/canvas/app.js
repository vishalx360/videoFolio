let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 720;

//settings
ctx.font = "50px Monospace";

//text
ctx.fillStyle = "black";
ctx.textAlign = "center";
const v_center = canvas.height / 2;
const h_center = canvas.width / 2;
ctx.fillText("Hello World", h_center - 150, v_center);
//The path to the image that we want to add.
var imgPath = "test.jpeg";

//Create a new Image object.
var imgObj = new Image();

//Set the src of this Image object.
imgObj.src = imgPath;

//the x coordinates
var x = h_center - imgObj.height / 2 + 200;

//the y coordinates
var y = v_center - imgObj.width / 2;

//When our image has loaded.
imgObj.onload = function () {
  //Draw the image onto the canvas.
  ctx.drawImage(imgObj, x, y);
};
