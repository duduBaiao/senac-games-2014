game.module(
    'game.objects.baseObject'
)
.require(
    'game.objects.tileData'
)
.body(function(){
    
    BaseObject = game.Class.extend({
        
        initializePhysics: function(settings) {
            
            this.body = new game.Body({
                collideAgainst: settings.collideAgainst,
                collisionGroup: settings.collisionGroup
            });
            
            var shape = new game.Rectangle(this.sprite.width * (settings.shapePercentualWidth || 1),
                                           this.sprite.height * (settings.shapePercentualHeight || 1));
            this.body.addShape(shape);
            
            if (this.afterCollide) {
                this.body.afterCollide = this.afterCollide.bind(this);
            }
            
            this.anchorDiff = (settings.anchorDiff || 0) * this.sprite.height;
            
            this.body._originalUpdate = this.body.update;
            this.body.update = function() {};
            
            this.updateBody();
            
            this.body.gameObject = this;
            
            game.scene.world.addBody(this.body);
        },
        
        angleToOppositeVector: function(angle) {
            
            var v = new game.Vector(0, 1);
            
            return v.rotate(angle);
        },
        
        updateBody: function(angle) {
            
            this.body._originalUpdate();
            
            this.body.rotation = this.sprite.rotation;
            
            var diffVector = this.angleToOppositeVector(this.body.rotation);
            
            diffVector.multiply(this.anchorDiff,
                                this.anchorDiff);
            
            this.body.position.x = game.scene.map.container.position.x + this.sprite.position.x + diffVector.x;
            this.body.position.y = game.scene.map.container.position.y + this.sprite.position.y + diffVector.y;
        },
        
        removeBody: function() {
            this.body.gameObject = null;
            
            game.scene.world.removeBody(this.body);
        },
        
        angleForDirection: function(direction) {
            
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[direction];
            var newRotationAngle = Math.atan2(newDirectionVector.x, newDirectionVector.y * -1);
            
            var newAngle = this.sprite.rotation + (newRotationAngle - this.sprite.rotation);
            var difference = ((((newAngle - this.sprite.rotation) % (2 * Math.PI)) + (3 * Math.PI)) % (2 * Math.PI)) - Math.PI;
            
            return (this.sprite.rotation + difference);
        },
        
        remove: function() {
            game.scene.removeGameObject(this);
        }        
    });
    
    BaseObject.COLLISION_GROUPS = {
        player: 0,
        enemies: 1,
        shots: 2
    };
});