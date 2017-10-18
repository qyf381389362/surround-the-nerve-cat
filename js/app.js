var stage = new createjs.Stage("gameView");//定义一个舞台
createjs.Ticker.setFPS(30);//设置帧数为30
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();//创建一个容器
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var circleArr = [[],[],[],[],[],[],[],[],[]];

function addCircles(){
  for(var indexY=0; indexY < 9; indexY++){
    for(var indexX=0; indexX < 9; indexX++){
      var c = new Circle();
      gameView.addChild(c);
      circleArr[indexX][indexY] = c;
      c.x = indexY%2 ? indexX*55+25 : indexX*55;
      c.y = indexY*55;

      if(indexX==4 && indexY==4){
        c.setCircleType(3);
      }

      c.addEventListener("click",function(event){
        if(event.target.getCircleType() != 3){
          event.target.setCircleType(2);
        }
        
      })
    }
  }
}
addCircles();

