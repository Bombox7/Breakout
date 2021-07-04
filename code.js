var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

createEdgeSprites();
var score = 0;
var gameState = "start";
var paddle = createSprite(200, 350, 75, 20);
var ball = createSprite(200, 200, 20, 20);
var brick1 = createSprite(25, 75, 50, 50);
var brick2 = createSprite(75, 75, 50, 50);
var brick3 = createSprite(125, 75, 50, 50);
var brick4 = createSprite(175, 75, 50, 50);
var brick5 = createSprite(225, 75, 50, 50);
var brick6 = createSprite(275, 75, 50, 50);
var brick7 = createSprite(325, 75, 50, 50);
var brick8 = createSprite(375, 75, 50, 50);
var brick9 = createSprite(25, 125, 50, 50);
var brick10 = createSprite(75, 125, 50, 50);
var brick11 = createSprite(125, 125, 50, 50);
var brick12 = createSprite(175, 125, 50, 50);
var brick13 = createSprite(225, 125, 50, 50);
var brick14 = createSprite(275, 125, 50, 50);
var brick15 = createSprite(325, 125, 50, 50);
var brick16 = createSprite(375, 125, 50, 50);
brick1.shapeColor = "red";
brick2.shapeColor = "blue";
brick3.shapeColor = "red";
brick4.shapeColor = "blue";
brick5.shapeColor = "red";
brick6.shapeColor = "blue";
brick7.shapeColor = "red";
brick8.shapeColor = "blue";
brick9.shapeColor = "blue";
brick10.shapeColor = "red";
brick11.shapeColor = "blue";
brick12.shapeColor = "red";
brick13.shapeColor = "blue";
brick14.shapeColor = "red";
brick15.shapeColor = "blue";
brick16.shapeColor = "red";
function draw()
{
  background("white");
  drawSprites();
  text("score: " + score, 200, 20);
  paddle.x = World.mouseX;

  if (keyDown("enter")) {
    ball.setVelocity(4, 4);
    gameState = "playing";
  }
  ball.bounceOff(paddle);
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  if (ball.isTouching(brick1)) {
    brick1.destroy();
    score = score + 1;
  }
  if (gameState == "start") {
    text("Enter to begin", 100, 200);
  }
  if (gameState == "finish") {
    text ("You win!", 100, 200);
  }
  
  if (ball.isTouching(brick2)) {
    brick2.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick3)) {
    brick3.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick4)) {
    brick4.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick5)) {
    brick5.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick6)) {
    brick6.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick7)) {
    brick7.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick8)) {
    brick8.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick9)) {
    brick9.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick10)) {
    brick10.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick11)) {
    brick11.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick12)) {
    brick12.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick13)) {
    brick13.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick14)) {
    brick14.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick15)) {
    brick15.destroy();
    score = score + 1;
  }
  if (ball.isTouching(brick16)) {
    brick16.destroy();
    score = score + 1;
  }
  if (score == 16) {
    gameState = "finish"
  }
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
