game.module(
    'game.objects.car'
)
.require(
    'engine.physics',
    'game.objects.tileData',
    'game.objects.map',
    'game.objects.baseObject'
)
.body(function(){
    
    Car = BaseObject.extend({
        
        init: function(settings) {
            
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
            
            game.scene.map.container.addChild(this.sprite);
            game.scene.addObject(this);
            
            this.rotateToDirection(settings.spawnAt.direction, true);
            
            this.initializePhysics({shapePercentualWidth: 0.8,
                                    shapePercentualHeight: 0.9,
                                    anchorDiff: 0.19,
                                    collideAgainst: settings.collideAgainst,
                                    collisionGroup: settings.collisionGroup});
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
                
                var rotateTween =
                    new game.Tween(this.sprite)
                        .to({rotation: newAngle}, 80.0 * 400.0 / Car.VELOCITY * timeAdjust)
                        .start();
            }
            
            this.sprite.gotoAndStop(TileData.ANIMATION_FRAMES[direction]);
        },
        
        isCloseEnoughToTile: function(tileData) {
            
            return game.Math.distance(
                    tileData.position.x, tileData.position.y,
                    this.sprite.position.x, this.sprite.position.y) < (Map.TILE_HALF_WIDTH / 2.0);
        },
        
        isOppositeDirections: function(currentDirection, newDirection) {
            
            var currentDirectionVector = TileData.DIRECTIONS_VECTORS[currentDirection];
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[newDirection];
            
            var dotProduct = currentDirectionVector.dot(newDirectionVector);
            
            return (dotProduct == -1);
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
            
            var tileData = game.scene.map.tileForPosition(this.sprite.position);
            
            if (this.isCloseEnoughToTile(tileData)) {
                
                this.chooseNextDirection(tileData);
            }
            
            var displacement = Car.VELOCITY * game.scale * game.system.delta;
            
            var directionVector = TileData.DIRECTIONS_VECTORS[this.direction];
            
            this.sprite.position.x += (displacement * directionVector.x);
            this.sprite.position.y += (displacement * directionVector.y);
            
            this.updateBody();
        }
    });
    
    _.extend(Car,
        {
           VELOCITY: 400.0,
           WIDTH: 94,
           HEIGHT: 120
        });
});