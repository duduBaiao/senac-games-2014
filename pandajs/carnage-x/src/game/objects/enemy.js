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
                         spawnAt: settings.spawnAt,
                         collideAgainst: BaseObject.COLLISION_GROUPS.player,
                         collisionGroup: BaseObject.COLLISION_GROUPS.enemies});
        },
        
        afterCollide: function(other) {
            console.log('Enemy.afterCollide! ' + other.collisionGroup);
        },
        
        isAlive: function() {
            return (this.life > 0);
        }
    });
});