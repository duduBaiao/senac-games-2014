game.module(
    'jokenpo.domain'
)
.body(function() {
    
    JoKenPo = {
        
        Weapon: {
            ROCK: 0,
            PAPER: 1,
            SCISSORS: 2
        },
        
        Result: {
            WIN: 1,
            LOSE: 2,
            DRAW: 0
        },
        
        process: function(playerWeapon) {
            return (3 + playerWeapon - this.cpuWeapon()) % 3;
        },
        
        cpuWeapon: function() {
            return Math.floor(Math.random() * 3);
        }
    };

});