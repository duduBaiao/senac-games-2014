game.module(
    'game.objects.enemy'
)
.require(
    'game.objects.car'
)
.body(function(){
    
    Enemy = Car.extend({
        
        life: 100,
        
        init: function(settings) {
            
            this._super({imageName: 'blueCar',
                         spawnAt: settings.spawnAt});
        },
        
        isAlive: function() {
            return (this.life > 0);
        }
    });
});