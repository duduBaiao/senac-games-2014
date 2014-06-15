game.module(
    'game.utils'
)
.body(function(){
    
    Utils = {
        
        Math: {
            
            /**
            * Performs linear interpolation between values a and b. Returns the value
            * between a and b proportional to x (when x is between 0 and 1. When x is
            * outside this range, the return value is a linear extrapolation).
            * @param {number} a A number.
            * @param {number} b A number.
            * @param {number} x The proportion between a and b.
            * @return {number} The interpolated value between a and b.
            */
            
            lerp: function(a, b, x) {
                return a + x * (b - a);
            }
        },
        
        Sprite: {
            sizeToFit: function(sprite, width, height) {
                
                var screenWidthScale = (game.system.width * 1.0 / game.system.height * 1.0);
                
                var spriteWidthScale = (width * 1.0 / height * 1.0);
                
                if (spriteWidthScale > screenWidthScale) {
                    
                    sprite.height = game.system.height;
                    sprite.width = sprite.height * spriteWidthScale;
                }
                else {
                    
                    var spriteHeightScale = (height * 1.0 / width * 1.0);
                    
                    sprite.width = game.system.width;
                    sprite.height = sprite.width * spriteHeightScale;
                }
                
                sprite.anchor.x = 0.5;
                sprite.anchor.y = 0.5;
                
                sprite.position.x = game.system.width / 2.0;
                sprite.position.y = game.system.height / 2.0;
            }
        }
    };
});