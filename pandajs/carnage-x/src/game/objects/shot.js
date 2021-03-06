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
            
            this.initializePhysics({width: Shot.WIDTH * 0.5,
                                    collideAgainst: BaseObject.COLLISION_GROUPS.cars,
                                    collisionGroup: BaseObject.COLLISION_GROUPS.shots});
            
            this.playShotSoundEffect();
        },
        
        hitSomething: function(position) {
            
            var explosionPosition;
            var diffVector;
            
            if (position) {
                explosionPosition = position;
                
                diffVector = new game.Vector();
            }
            else {
                explosionPosition = this.sprite.position;
                
                diffVector = this.angleToVector(this.body.rotation);
                
                var anchorDiff = this.sprite.anchor.y * this.sprite.height;
                
                diffVector.multiply(anchorDiff,
                                    anchorDiff);
            }
            
            var explosion = new Explosion({name: 'shotHitCar',
                                           x: explosionPosition.x + diffVector.x,
                                           y: explosionPosition.y + diffVector.y});
        },
        
        update: function() {
            
            var displacement = Shot.VELOCITY * game.scale * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            var newPosition = new PIXI.Point(this.sprite.position.x + (displacement * directionVector.x),
                                             this.sprite.position.y + (displacement * directionVector.y));
            
            var tileData = game.scene.map.tileForPosition(this.sprite.position);
            
            if (tileData.collideWithShot && this.isCloseEnoughToTile(tileData, 0.85)) {
                
                var inverseVector = directionVector.clone().multiply(-1, -1);
                
                var explosionPosition =
                    new PIXI.Point(tileData.position.x + (Map.TILE_HALF_WIDTH * 0.5 * inverseVector.x),
                                   tileData.position.y + (Map.TILE_HALF_WIDTH * 0.85 * inverseVector.y));
                
                this.hitSomething(explosionPosition);
                
                this.removeFromScene();
            }
            else if ((newPosition.x < Map.TILE_QUARTER_WIDTH) ||
                     (newPosition.y < Map.TILE_QUARTER_WIDTH) ||
                     (newPosition.x >= (game.scene.map.dimensions.width - Map.TILE_QUARTER_WIDTH)) ||
                     (newPosition.y >= (game.scene.map.dimensions.height - Map.TILE_QUARTER_WIDTH))) {
                
                this.hitSomething();
                
                this.removeFromScene();
            }
            else {
                
                this.sprite.position = newPosition;
            }
            
            this.updateBody();
        },
        
        afterCollide: function(other) {
            
            console.log('Shot.afterCollide! other.collisionGroup: ' + other.collisionGroup);
            
            if (other.gameObject instanceof Enemy) {
                
                other.gameObject.decreaseLife(Shot.DAMAGE);
                
                if (other.gameObject) {
                    
                    this.hitSomething();
                }
                
                this.removeFromScene();
            }
        },
        
        playShotSoundEffect: function() {
            game.audio.playSound("fireBallshotSnd");
        }
    });
    
    _.extend(Shot,
        {
           VELOCITY: Car.VELOCITY * 1.75,
           WIDTH: 100,
           HEIGHT: 100,
           
           DAMAGE: Car.LIFE / 3.0
        });
});