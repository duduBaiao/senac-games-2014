game.module(
    'game.objects.player'
)
.require(
    'game.objects.car'
)
.body(function(){
    
    Player = Car.extend({
        
        init: function() {
            
            this._super({imageName: 'redCar',
                         spawnAt: game.scene.map.spawnAt.player,
                         collideAgainst: BaseObject.COLLISION_GROUPS.enemies,
                         collisionGroup: BaseObject.COLLISION_GROUPS.player});
        }
    });
});