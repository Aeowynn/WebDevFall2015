const DiceGame = require('dice_game')

describe('Dice game', () => {
    it('should have two dice', () => {
        let game = new DiceGame;
        expect(game.diceCount).toEqual(2);
    })
    it('should be able to roll', () => {
        let game = new DiceGame;
        
    })
