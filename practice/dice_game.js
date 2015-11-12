class DiceGame {
    constructor () {
        this.diceCount = 2;
        this.rollCount = 0;
        this.allRolls = [];
    
    }
    roll() {
        this.rollCount += 1;
        var x = Math.floor((Math.random() * 12) + 2);
        this.allRolls.push(x);
        return x;
    }
    maxRollReached() {
        return this.allRolls.length === 3 ? true: false;
}

module.exports = DiceGame
