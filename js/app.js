var stage = new createjs.Stage("gameView");//定义一个舞台
createjs.Ticker.setFPS(30);//设置帧数为30
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();//创建一个容器
stage.addChild(gameView);

var circleArr = [[],[],[],[],[],[],[],[],[]];

function addCircles(){
  for(var indexY=0; indexY < 9; indexY++){
    for(var indexX=0; indexX < 9; indexX++){
      
    }
  }
}

