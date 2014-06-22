game.module(
    'game.objects.tileData'
)
.body(function(){
    
    TileData = game.Class.extend({
        
        init: function(code, y, x, position) {
            
            this.collideWithShot = (TileData.TYPES.SHOT_COLLIDE.indexOf(code[0]) >= 0);
            
            this.x = x;
            this.y = y;
            
            this.position = position;
            
            this.allowedDirections = TileData.TYPES[code] || [];
        }
    });
    
    _.extend(TileData,
        {
            DIRECTIONS_VECTORS: {
                up:    new game.Vector(0, -1),
                right: new game.Vector(1,  0),
                down:  new game.Vector(0,  1),
                left:  new game.Vector(-1, 0)
            },
            
            OPPOSITE_DIRECTIONS: {
                up: 'down',
                down: 'up',
                left: 'right',
                right: 'left'
            },
            
            ANIMATION_FRAMES: {
                up: 0,
                right: 1,
                down: 2,
                left: 3
            },
            
            TYPES: {
                SHOT_COLLIDE: 'g',
                
                'rul': ['right', 'down'],
                'rur': ['down', 'left'],
                'rrd': ['up', 'left'],
                'rdl': ['up', 'right'],
                'rh': ['right', 'left'],
                'rv': ['up', 'down'],
                'rtd': ['right', 'down', 'left'],
                'rtl': ['up', 'down', 'left'],
                'rtu': ['up', 'right', 'left'],
                'rtr': ['up', 'right', 'down'],
                'rc': ['up', 'right', 'down', 'left']
            }
        });
});