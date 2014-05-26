game.module(
    'game.objects.missile'
)
.require(
    'game.objects.baseObject'
)
.body(function(){
    
    Missile = BaseObject.extend({
        
        init: function(settings) {
            
            this.sprite = new game.Sprite('missile',
                                          settings.x,
                                          settings.y,
                                          {
                                              anchor: {x: 0.5, y: 0.5},
                                              width: Missile.WIDTH,
                                              height: Missile.HEIGHT
                                          });
            
            game.scene.map.container.addChild(this.sprite);
            game.scene.addObject(this);
            
            this.direction = settings.direction;
            
            this.sprite.rotation = this.angleForDirection(this.direction);
        },
        
        update: function() {
            
            var displacement = Missile.VELOCITY * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            var newPosition = new PIXI.Point(this.sprite.position.x + (displacement * directionVector.x),
                                             this.sprite.position.y + (displacement * directionVector.y));
            
            if ((newPosition.x < Map.TILE_WIDTH) ||
                (newPosition.y < Map.TILE_WIDTH) ||
                (newPosition.x >= (game.scene.map.container.getBounds().width - Map.TILE_HALF_WIDTH)) ||
                (newPosition.y >= (game.scene.map.container.getBounds().height - Map.TILE_HALF_WIDTH))) {
                
                game.scene.map.container.removeChild(this.sprite);
                game.scene.removeObject(this);
            }
            else {
                
                this.sprite.position = newPosition;
            }
        }
    });
    
    _.extend(Missile,
        {
           VELOCITY: 700,
           WIDTH: 22.5,
           HEIGHT: 91.5
        });
});