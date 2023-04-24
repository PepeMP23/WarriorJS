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
        if(warrior.feel().isWall()){
            warrior.pivot();
        }
        else{
            if(warrior.feel().isEmpty()){
                if(warrior.health() < this.health && this.health < 10){
                    warrior.walk('backward')
                }
                else if(warrior.health() < warrior.maxHealth() && this.health < 13){
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
        this.health = warrior.health()
    }
  }