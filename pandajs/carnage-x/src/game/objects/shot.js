game.module(
    'game.objects.shot'
)
.require(
    'game.objects.baseObject',
    'game.objects.car'
)
.body(function(){
    
    Shot = BaseObject.extend({
        
        init: function(settings) {
            
            var directionVector = TileData.DIRECTIONS_VECTORS[settings.direction];
            
            this.sprite = new game.Sprite('shot',
                                          settings.x,
                                          settings.y - Math.abs(11 * directionVector.x),
                                          {
                                              anchor: {x: 0.5, y: 0.5},
                                              width: Shot.WIDTH,
                                              height: Shot.HEIGHT
                                          });
            
            game.scene.map.container.addChild(this.sprite);
            game.scene.addObject(this);
            
            this.direction = settings.direction;
            
            this.sprite.rotation = this.angleForDirection(this.direction);
            
            this.initializePhysics({collideAgainst: BaseObject.COLLISION_GROUPS.enemies,
                                    collisionGroup: BaseObject.COLLISION_GROUPS.shots});
        },
        
        update: function() {
            
            var displacement = Shot.VELOCITY * game.scale * game.system.delta;
            
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
            console.log('Shot.afterCollide! ' + other.collisionGroup);
        }
    });
    
    _.extend(Shot,
        {
           VELOCITY: Car.VELOCITY * 1.75,
           WIDTH: 22.5,
           HEIGHT: 91.5
        });
});