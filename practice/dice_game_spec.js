const DiceGame = require('dice_game')

describe('Dice game', () => {
    let game;
    
    beforeEach( () => {
        game = new DiceGame;
    }
    
    it('should have two dice', () => {
        expect(game.diceCount).toEqual(2);
    })
    it('should be able to roll', () => {
        let roll = game.roll();
        if (roll <= 12 && roll >= 2) {
            expect(game.roll()).toMatch(/\d{1,}/);
        }
    })
    it('player rollCount should incrememnt on each roll', () => {
        expect(game.rollCount).toBe(0);
        game.roll();
        expect(game.rollCount).toBe(1);
    
    it('player can roll 3 times', () => {
        game.roll();
        game.roll();
        game.roll();
        expect(game.maxRollReached).toBeTruthy();
    })
    
    it('keeps track of all rolls', () => {
        game.roll();
        game.roll();
        expect(game.allRolls.length).toEqual(2);
    })
