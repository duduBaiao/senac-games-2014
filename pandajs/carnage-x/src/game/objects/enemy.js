game.module(
    'game.objects.enemy'
)
.require(
    'game.objects.car'
)
.body(function(){
    
    Enemy = Car.extend({
        
        init: function(settings) {
            
            this._super({imageName: 'blueCar',
                         spawnAt: settings.spawnAt,
                         collideAgainst: BaseObject.COLLISION_GROUPS.player,
                         collisionGroup: BaseObject.COLLISION_GROUPS.enemies,
                         velocity: Car.VELOCITY * 0.85});
        },
        
        afterCollide: function(other) {
            console.log('Enemy.afterCollide! ' + other.collisionGroup);
        }
    });
});