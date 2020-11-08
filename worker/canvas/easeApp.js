function init() {
  //init
  var stage = new createjs.Stage("demoCanvas");

  //elements
  var circle = new createjs.Shape();
  circle.graphics.beginFill("#4caf50").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);

  //text
  var text = new createjs.Text("Hello World", "20px Monospace", "#ffc107");
  text.x = 10;
  text.y = 100;
  text.textBaseline = "alphabetic";
  stage.addChild(text);

  //   Ticker;
  createjs.Ticker.on("tick", tick);
  createjs.Ticker.interval = 25;
  createjs.Ticker.framerate = 40;

  function tick() {
    console.log("TICK!!!");
    circle.x = circle.x + 5;
    if (circle.x > stage.canvas.width + 50) {
      circle.x = -50;
    }
    stage.update();
  }
  //end
}
