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
            
            this.body.collide = this.handleCollision.bind(this);
        },
        
        afterCollide: function() {
            // console.log('afterCollide!');
        },
        
        handleCollision: function(other) {
            
            // console.log('handleCollision!');
            
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
                else {
                    
                    if (!((game.system.timer.last - this.lastCollisionTime) < 4000)) {
                        
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