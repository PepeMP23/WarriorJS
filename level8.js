class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */

  constructor() {
    this.health = 0;
  }


  playTurn(warrior) {
    // Cool code goes here
    
    let turno = 0;

    if(turno = 0){
      warrior.walk();
      turno = turno + 1;
    }
    else if(turno > 0 && warrior < 8){
      warrior.shoot();
      turno = turno + 1;
    }
    else{
      warrior.walk();
    }
    
    /*
      if(warrior.feel().isWall()){
        warrior.pivot();
      }
      else{
        if(warrior.feel().isEmpty()){
          if(warrior.health() < this.health && this.health < 10){
            warrior.walk('backward')
          }
          else if(warrior.health() < warrior.maxHealth() && this.health < 10){
            warrior.rest()
          }
          else{
            warrior.walk()
          }
        }
        else {
          warrior.attack()
        }
      }
    this.health = warrior.health();
  */
    
  }
}