game.module(
    'game.objects.car'
)
.require(
    'engine.physics',
    'game.objects.tileData',
    'game.objects.map',
    'game.objects.baseObject',
    'game.objects.explosion'
)
.body(function(){
    
    Car = BaseObject.extend({
        
        init: function(settings) {
            
            this.stopped = false;
            
            this.sprite = new game.MovieClip([
                game.Texture.fromImage(settings.imageName + '_up'),
                game.Texture.fromImage(settings.imageName + '_right'),
                game.Texture.fromImage(settings.imageName + '_down'),
                game.Texture.fromImage(settings.imageName + '_left')
            ]);
            
            this.sprite.position.x = (settings.spawnAt.x * Map.TILE_WIDTH) + Map.TILE_HALF_WIDTH;
            this.sprite.position.y = (settings.spawnAt.y * Map.TILE_WIDTH) + Map.TILE_HALF_WIDTH;
            
            this.sprite.anchor.x = 0.5;
            this.sprite.anchor.y = 0.35;
            
            this.sprite.width = Car.WIDTH;
            this.sprite.height = Car.HEIGHT;
            
            this.addToScene();
            
            this.rotateToDirection(settings.spawnAt.direction, true);
            
            this.initializePhysics({width: Car.WIDTH,
                                    anchorDiff: Car.WIDTH * 0.2,
                                    collideAgainst: settings.collideAgainst,
                                    collisionGroup: settings.collisionGroup});
            
            this.velocity = settings.velocity || Car.VELOCITY;
            
            this.acceleration = this.velocity;
            
            this.life = Car.LIFE;
        },
        
        rotateToDirection: function(direction, now) {
            
            var newAngle = this.angleForDirection(direction);
            
            game.tweenEngine.stopTweensForObject(this.sprite);
            
            this.lastDirection = this.direction;
            
            this.direction = this.requestedDirection = direction;
            
            if (now) {
                this.sprite.rotation = newAngle;
            }
            else {
                var timeAdjust = (this.isOppositeDirections(this.lastDirection, this.direction) ? 1.6 : 1.0);
                
                this.isRotating = true;
                
                var rotateTween =
                    new game.Tween(this.sprite)
                        .to({rotation: newAngle}, 80.0 * 400 / Car.VELOCITY * timeAdjust)
                        .onComplete(this.rotateEnded.bind(this));
                
                rotateTween.start();
            }
            
            this.sprite.gotoAndStop(TileData.ANIMATION_FRAMES[direction]);
        },
        
        rotateEnded: function() {
            this.isRotating = false;
        },
        
        isCloseEnoughToTile: function(tileData) {
            
            return Math.distance(
                    tileData.position.x, tileData.position.y,
                    this.sprite.position.x, this.sprite.position.y) < (Map.TILE_HALF_WIDTH / 2.0);
        },
        
        chooseNextDirection: function(tileData) {
            
            var newDirection = null;
            
            if ((this.direction != this.requestedDirection) &&
                (tileData.allowedDirections.indexOf(this.requestedDirection) >= 0)) {
                
                newDirection = this.requestedDirection;
            }
            else if (tileData.allowedDirections.indexOf(this.direction) < 0) {
                
                if ((tileData.allowedDirections.indexOf(this.lastDirection) >= 0) &&
                    (!this.isOppositeDirections(this.direction, this.lastDirection))) {
                    
                    newDirection = this.lastDirection;
                }
                else {
                    _.each(tileData.allowedDirections, function(tileDirection) {
                        
                        if (!newDirection) {
                            
                            if (!this.isOppositeDirections(this.direction, tileDirection)) {
                                newDirection = tileDirection;
                            }
                        }
                    }, this);
                }
            }
            
            if (newDirection) {
                
                this.rotateToDirection(newDirection);
                
                this.sprite.position.x = tileData.position.x;
                this.sprite.position.y = tileData.position.y;
            }
        },
        
        update: function() {
            
            if (this.stopped) return;
            
            var tileData = game.scene.map.tileForPosition(this.sprite.position);
            
            if (this.isCloseEnoughToTile(tileData)) {
                
                this.chooseNextDirection(tileData);
            }
            
            var acceleration = this.acceleration + Car.ACCELERATION;
            
            this.acceleration = acceleration.limit(0, this.velocity);
            
            var displacement = this.acceleration * game.scale * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            this.sprite.position.x += (displacement * directionVector.x);
            this.sprite.position.y += (displacement * directionVector.y);
            
            this.updateBody();
        },
        
        isAlive: function() {
            
            return (this.life > 0);
        },
        
        decreaseLife: function(damage) {
            
            this.life -= damage;
            
            if (!this.isAlive()) {
                
                this.destroy();
            }
        },
        
        destroy: function() {
            
            var explosion = new Explosion({name: 'carDie',
                                           x: this.sprite.position.x,
                                           y: this.sprite.position.y});
            this.removeFromScene();
        }
    });
    
    _.extend(Car,
        {
           ACCELERATION: 4.0,
           
           VELOCITY: 400.0,
           
           WIDTH: 94,
           HEIGHT: 120,
           
           LIFE: 100
        });
    
    Car.DAMAGE = Car.LIFE / 8.0;
    
});