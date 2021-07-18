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

var sam = createSprite(10,190,13,13);
var boundary1 = createSprite (190,120,420,3);
var boundary2 = createSprite (190,260,420,3);

var car1 = createSprite(100,130,10,10);
var car2 = createSprite(215,130,10,10);
var car3 = createSprite(165,250,10,10);
var car4 = createSprite(270,250,10,10);
car1.shapeColor = "red";
car2.shapeColor = "red";
car3.shapeColor = "red";
car4.shapeColor = "red";
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

var deaths = 0;
var wins = 0;
playSound("assets/safety-1st.mp3", true);
sam.shapeColor = "green";


function draw() 
{
  
 background("black");
 
 createEdgeSprites();
 sam.bounce(edges);
 if(sam.isTouching(rightEdge))
 {
   sam.x = 20;
   sam.y = 190;
   wins = wins +1;
   
 }
 

 textSize(25);
 text("Deaths:"+deaths, 200, 100);
 text("Wins:"+wins, 200, 50);
 if(sam.isTouching(car1) ||sam.isTouching(car2) || sam.isTouching(car3)||sam.isTouching(car4))
 {
   
   deaths = deaths +1;
   sam.x = 20;
   sam.y = 190;
   playSound("assets/yt1s.com---Roblox-Death-Sound-Effect.mp3");
   
 }
 if(keyDown("right"))
 {
   sam.x = sam.x + 5;
 }
 if(keyDown("left"))
 {
   sam.x = sam.x - 5;
 }
 car1.bounceOff(boundary1);
 car1.bounceOff(boundary2);
 car2.bounceOff(boundary1);
 car2.bounceOff(boundary2);
 car3.bounceOff(boundary1);
 car3.bounceOff(boundary2);
 car4.bounceOff(boundary1);
 car4.bounceOff(boundary2);
 drawSprites();
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
