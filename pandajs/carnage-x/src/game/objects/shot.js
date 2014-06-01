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
            
            this.initializePhysics({width: Shot.WIDTH,
                                    anchorDiff: Shot.HEIGHT * -0.2,
                                    collideAgainst: BaseObject.COLLISION_GROUPS.enemies,
                                    collisionGroup: BaseObject.COLLISION_GROUPS.shots});
            
            this.playShotSoundEffect();
        },
        
        update: function() {
            
            var displacement = Shot.VELOCITY * game.scale * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            var newPosition = new PIXI.Point(this.sprite.position.x + (displacement * directionVector.x),
                                             this.sprite.position.y + (displacement * directionVector.y));
            
            if ((newPosition.x < Map.TILE_HALF_WIDTH) ||
                (newPosition.y < Map.TILE_HALF_WIDTH) ||
                (newPosition.x >= (game.scene.map.dimensions.width - Map.TILE_HALF_WIDTH)) ||
                (newPosition.y >= (game.scene.map.dimensions.height - Map.TILE_HALF_WIDTH))) {
                
                this.hitSomething();
                
                this.removeFromScene();
            }
            else {
                
                this.sprite.position = newPosition;
            }
            
            this.updateBody();
        },
        
        hitSomething: function() {
            
            var diffVector = this.angleToVector(this.body.rotation);
            
            var anchorDiff = this.sprite.anchor.y * this.sprite.height;
            
            diffVector.multiply(anchorDiff,
                                anchorDiff);
            
            var explosion = new Explosion({name: 'shotHitCar',
                                           x: this.sprite.position.x + diffVector.x,
                                           y: this.sprite.position.y + diffVector.y});
        },
        
        afterCollide: function(other) {
            console.log('Shot.afterCollide! other.collisionGroup: ' + other.collisionGroup);
            
            other.gameObject.decreaseLife(Shot.DAMAGE);
            
            if (other.gameObject) {
                
                this.hitSomething();
            }
            
            this.removeFromScene();
        },
        
        playShotSoundEffect: function() {
            game.audio.playSound("fireBallshotSnd");
        }
    });
    
    _.extend(Shot,
        {
           VELOCITY: Car.VELOCITY * 1.75,
           WIDTH: 22.5,
           HEIGHT: 91.5,
           
           DAMAGE: Car.LIFE / 3.0
        });
});