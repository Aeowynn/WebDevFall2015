$(document).readyfunction() {
    //for player in playerlist -> make a new player object for each
        //also increment the numplayers value
    //numplayers == turns
}); 

function Player(name) {
    this.name = name;
    var score = 0;
}

var Kara = new Player("Kara");
var Josh = new Player("Josh");

var Game = {
    turns: 0,
    endingTurn: 10,
    lastInput: [],
    add: function(points, player) {
        player.score += points;
        lastInput = [player, points];
    },
    nextTurn: function() {
        this.turns += 1;
    },
    voidLastInput: function(){
        this.lastInput[1].score -= lastInput[2];
    },
};

