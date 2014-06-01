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
            
            var otherCar = other.gameObject;
            
            if (this.isOppositeDirections(this.direction, otherCar.direction)) {
                
                this.destroy();
            }
            else {
                
                if (!((game.system.timer.last - this.lastCollisionTime) < 5000)) {
                    
                    this.lastCollisionTime = game.system.timer.last;
                    
                    this.decreaseLife(Car.DAMAGE);
                    
                    console.log('enemy.life: ' + this.life);
                    
                    if (this.isAlive()) {
                        
                        game.audio.playSound('explosionSnd', false, 0.5);
                    }
                }
                
                if (!(this.stopped || otherCar.stopped)) {
                    
                    if (this.isPerpendicularDirections(this.direction, otherCar.direction)) {
                        
                        thisTileData = game.scene.map.tileForPosition(this.sprite.position);
                        otherTileData = game.scene.map.tileForPosition(otherCar.sprite.position);
                        
                        // same tile
                        if ((thisTileData.x == otherTileData.x) &&
                            (thisTileData.y == otherTileData.y)) {
                            
                            if (Math.distance(thisTileData.position.x, thisTileData.position.y,
                                              this.sprite.position.x, this.sprite.position.y)
                                >
                                Math.distance(thisTileData.position.x, thisTileData.position.y,
                                              otherCar.sprite.position.x, otherCar.sprite.position.y)) {
                                this.stopAWhile();
                            }
                            else {
                                otherCar.stopAWhile();
                            }
                        }
                        else {
                            
                            if (((this.direction == 'down') && (this.sprite.position.y < otherCar.sprite.position.y)) ||
                                ((this.direction == 'up') && (this.sprite.position.y > otherCar.sprite.position.y)) ||
                                ((this.direction == 'right') && (this.sprite.position.x < otherCar.sprite.position.x)) ||
                                ((this.direction == 'left') && (this.sprite.position.x > otherCar.sprite.position.x))) {
                                
                                this.stopAWhile();
                            }
                            else {
                                otherCar.stopAWhile();
                            }
                        }
                    }
                    else {
                        otherCar.disaccelerate();
                    }
                }
            }
        }
    });
});