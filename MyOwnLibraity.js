function isTouching(obg1,obg2){

    if (obg1.x - obg2.x < obg2.width/2 + obg1.width/2
      && obg2.x - obg1.x < obg2.width/2 + obg1.width/2
      && obg1.y - obg2.y < obg2.height/2 + obg1.height/2
      && obg2.y - obg1.y < obg2.height/2 + obg1.height/2) {
        return true
  }
  else{return false}
  }
  
  function bounceOff(obg1,obg2){
    if (obg1.x - obg2.x < obg2.width/2 + obg1.width/2
      && obg2.x - obg1.x < obg2.width/2 + obg1.width/2) {
        obg1.velocityX = obg1.velocityX * (-1);
        obg2.velocityX = obg2.velocityX * (-1);
  }
  if (obg1.y - obg2.y < obg2.height/2 + obg1.height/2
    && obg2.y - obg1.y < obg2.height/2 + obg1.height/2){
      obg1.velocityY = obg1.velocityY * (-1);
      obg2.velocityY = obg2.velocityY * (-1);
  }}