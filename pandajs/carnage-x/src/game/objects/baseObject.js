game.module(
    'game.objects.baseObject'
)
.require(
    'game.objects.tileData'
)
.body(function(){
    
    BaseObject = game.Class.extend({
        
        angleForDirection: function(direction) {
            
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[direction];
            var newRotationAngle = Math.atan2(newDirectionVector.x, newDirectionVector.y * -1);
            
            var newAngle = this.sprite.rotation + (newRotationAngle - this.sprite.rotation);
            var difference = ((((newAngle - this.sprite.rotation) % (2 * Math.PI)) + (3 * Math.PI)) % (2 * Math.PI)) - Math.PI;
            
            return (this.sprite.rotation + difference);
        }
    });
});