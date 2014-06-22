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
                         collideAgainst: BaseObject.COLLISION_GROUPS.cars,
                         collisionGroup: BaseObject.COLLISION_GROUPS.cars,
                         velocity: Car.VELOCITY * 0.85});
            
            this.body.collide = this.handleCollision.bind(this);
        },
        
        chooseNextDirection: function(tileData) {
            
            if (!this.lastTileData || (this.lastTileData != tileData)) {
                
                if (!this.think(tileData)) {
                    
                    var newDirectionIndex = Math.floor(Math.random() * tileData.allowedDirections.length);
                    
                    var newDirection = tileData.allowedDirections[newDirectionIndex];
                    
                    if (!this.areOppositeDirections(this.direction, newDirection)) {
                        
                        this.requestedDirection = newDirection;
                    }
                }
                
                this.lastTileData = tileData;
                
                this._super(tileData);
            }
        },
        
        isCloseEnoughToOtherCar: function(otherCar) {
            
            return Math.distance(
                        otherCar.sprite.position.x, otherCar.sprite.position.y,
                        this.sprite.position.x, this.sprite.position.y) < (Map.TILE_WIDTH * 4);
        },
        
        think: function(tileData) {
            
            var rethought = false;
            
            if (!((game.system.timer.last - this.lastThinkTime) < (100 * Car.VELOCITY_REFERENCE / Car.VELOCITY))) {
                
                console.log("thinked!");
                
                this.lastThinkTime = game.system.timer.last;
                
                var cars = game.scene.cars;
                
                var i;
                for (i = 0; i < cars.length; i++) {
                    
                    var otherCar = cars[i];
                    
                    if (!(otherCar === this)) {
                        
                        if (this.isCloseEnoughToOtherCar(otherCar)) {
                            
                            console.log("isCloseEnoughToOtherCar! index: " + i);
                            
                            if (this.areApproaching(this.direction, this.sprite.position,
                                                    otherCar.direction, otherCar.sprite.position)) {
                                
                                console.log("areApproaching! teste more, please.");
                                
                                var oppositeDirection = TileData.OPPOSITE_DIRECTIONS[this.direction];
                                
                                if ((!this.areApproaching(oppositeDirection, this.sprite.position,
                                                          otherCar.direction, otherCar.sprite.position))
                                    &&
                                    (!this.areApproaching(oppositeDirection,
                                                          this.sprite.position,
                                                          game.scene.player.direction,
                                                          game.scene.player.sprite.position))) {
                                    
                                    console.log("yeah! areApproaching!");
                                    
                                    this.requestedDirection = oppositeDirection;
                                    
                                    if (otherCar instanceof Enemy) {
                                        
                                        otherCar.lastThinkTime = game.system.timer.last + 500;
                                        
                                        otherCar.shortDisaccelerate();
                                    }
                                    else {
                                        
                                        this.lastThinkTime = game.system.timer.last + 1000;
                                    }
                                    
                                    rethought = true;
                                }
                            }
                        }
                    }
                }
            }
            
            return rethought;
        },
        
        afterCollide: function() {
        },
        
        handleCollision: function(other) {
            
            var otherCar = other.gameObject;
            
            if (this.areOppositeDirections(this.direction, otherCar.direction)) {
                
                console.log('enemy destroyed! is opposite directions!');
                
                this.destroy();
            }
            else {
                
                var thisTileData = game.scene.map.tileForPosition(this.sprite.position);
                var otherTileData = game.scene.map.tileForPosition(otherCar.sprite.position);
                
                var sameDirections = this.areSameAngleDirections(this.sprite.rotation, otherCar.sprite.rotation);
                
                if ((thisTileData.x == otherTileData.x) &&
                    (thisTileData.y == otherTileData.y) &&
                    (!sameDirections)) {
                    
                    console.log('enemy destroyed! same tile!');
                    
                    this.destroy();
                }
                else if ((otherCar instanceof Player) &&
                         (!sameDirections) &&
                         (this.angleVectorsIntersect(this.sprite.rotation, this.sprite.position,
                                                     otherCar.sprite.rotation, otherCar.sprite.position))) {
                    
                    console.log('enemy destroyed! angle vectors intersect!');
                    
                    this.destroy();
                }
                else {
                    
                    if (!((game.system.timer.last - this.lastCollisionTime) < (4000 * Car.VELOCITY_REFERENCE / Car.VELOCITY))) {
                        
                        this.lastCollisionTime = game.system.timer.last;
                        
                        this.decreaseLife(Car.DAMAGE);
                        
                        console.log('enemy.life: ' + this.life);
                        
                        if (this.isAlive()) {
                            game.audio.playSound('carCrashSnd', false, 0.5);
                        }
                    }
                    
                    if (((this.direction == 'down') && (this.sprite.position.y < otherCar.sprite.position.y)) ||
                        ((this.direction == 'up') && (this.sprite.position.y > otherCar.sprite.position.y)) ||
                        ((this.direction == 'right') && (this.sprite.position.x < otherCar.sprite.position.x)) ||
                        ((this.direction == 'left') && (this.sprite.position.x > otherCar.sprite.position.x))) {
                        
                        if (sameDirections) {
                            console.log('enemy disaccelerated!');
                            
                            this.disaccelerate();
                        }
                        else {
                            console.log('enemy stopped!');
                            
                            this.stopAWhile();
                        }
                    }
                    else {
                        if (sameDirections) {
                            console.log('player disaccelerated!');
                            
                            otherCar.disaccelerate();
                        }
                        else {
                            console.log('player stopped!');
                            
                            otherCar.stopAWhile();
                        }
                    }
                }
            }
            
            return true;
        }
    });
});