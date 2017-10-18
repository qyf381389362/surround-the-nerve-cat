var stage = new createjs.Stage("gameView");//定义一个舞台
createjs.Ticker.setFPS(30);//设置帧数为30
createjs.Ticker.addEventListener("tick",stage);

var gameView = new createjs.Container();//创建一个容器
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var circleArr = [[],[],[],[],[],[],[],[],[]]; 

var currentCat;

function circleClicked(event){
  if(event.target.getCircleType() != 3){
    event.target.setCircleType(2);
  } 
  if(currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 ||currentCat.indexY== 8){
    alert("游戏结束");
  }
  var my_indexX  = currentCat.indexX;
  var my_indexY  = currentCat.indexY;
  var leftCircle = circleArr[my_indexX - 1][my_indexY];
  var rightCircle = circleArr[my_indexX + 1][my_indexY];
  var lefttopCircle = circleArr[my_indexX - 1][my_indexY - 1];
  var righttopCircle = circleArr[my_indexX][my_indexY - 1];
  var leftbottomCircle = circleArr[my_indexX - 1][my_indexY + 1];
  var rightbottomCircle = circleArr[my_indexX][my_indexY + 1];

  if(leftCircle.getCircleType() ==1){
    leftCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = leftCircle;
  }else if(rightCircle.getCircleType() ==1){
    rightCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = rightCircle;
  }else if(lefttopCircle.getCircleType() ==1){
    lefttopCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = lefttopCircle;
  }else if(righttopCircle.getCircleType() ==1){
    righttopCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = righttopCircle;
  }else if(leftbottomCircle.getCircleType() ==1){
    leftbottomCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = leftbottomCircle;
  }else if(rightbottomCircle.getCircleType() ==1){
    rightbottomCircle.setCircleType(3);
    currentCat.setCircleType(1);
    currentCat = rightbottomCircle;
  }else{
    alert("游戏结束");
  }
}

function addCircles(){
  for(var indexY=0; indexY < 9; indexY++){
    for(var indexX=0; indexX < 9; indexX++){
      var c = new Circle();
      gameView.addChild(c);
      circleArr[indexX][indexY] = c;
      c.x = indexY%2 ? indexX*55+25 : indexX*55;
      c.y = indexY*55;
      c.indexX = indexX;
      c.indexY = indexY;

      if(indexX==4 && indexY==4){
        c.setCircleType(3);
        currentCat = c;

      }

      c.addEventListener("click",circleClicked);
    }
  }
}
addCircles();

