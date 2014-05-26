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
        }
    };
});