game.module(
    'game.objects.missile'
)
.require(
    'game.objects.baseObject',
    'game.objects.car'
)
.body(function(){
    
    Missile = BaseObject.extend({
        
        init: function(settings) {
            
            var directionVector = TileData.DIRECTIONS_VECTORS[settings.direction];
            
            this.sprite = new game.Sprite('missile',
                                          settings.x,
                                          settings.y - Math.abs(11 * directionVector.x),
                                          {
                                              anchor: {x: 0.5, y: 0.5},
                                              width: Missile.WIDTH,
                                              height: Missile.HEIGHT
                                          });
            
            game.scene.map.container.addChild(this.sprite);
            game.scene.addObject(this);
            
            this.direction = settings.direction;
            
            this.sprite.rotation = this.angleForDirection(this.direction);
            
            this.initializePhysics({collideAgainst: BaseObject.COLLISION_GROUPS.enemies,
                                    collisionGroup: BaseObject.COLLISION_GROUPS.missiles});
        },
        
        update: function() {
            
            var displacement = Missile.VELOCITY * game.scale * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            var newPosition = new PIXI.Point(this.sprite.position.x + (displacement * directionVector.x),
                                             this.sprite.position.y + (displacement * directionVector.y));
            
            if ((newPosition.x < Map.TILE_WIDTH) ||
                (newPosition.y < Map.TILE_WIDTH) ||
                (newPosition.x >= (game.scene.map.container.getBounds().width - Map.TILE_HALF_WIDTH)) ||
                (newPosition.y >= (game.scene.map.container.getBounds().height - Map.TILE_HALF_WIDTH))) {
                
                game.scene.map.container.removeChild(this.sprite);
                game.scene.removeObject(this);
                
                this.removeBody();
            }
            else {
                
                this.sprite.position = newPosition;
            }
            
            this.updateBody();
        },
        
        afterCollide: function(other) {
            console.log('Missile.afterCollide! ' + other.collisionGroup);
        }
    });
    
    _.extend(Missile,
        {
           VELOCITY: 700.0,
           WIDTH: 22.5,
           HEIGHT: 91.5
        });
});