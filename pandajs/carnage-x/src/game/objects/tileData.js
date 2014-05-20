game.module(
    'game.objects.tileData'
)
.body(function(){
    
    TileData = game.Class.extend({
        
        init: function(code, y, x, position) {
            this.isRoad = (TileData.TYPES.ROAD.indexOf(code[0]) >= 0);
            
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
            
            TYPES: {
                ROAD: 'rcx',
                
                'c1': ['right', 'down'],
                'c2': ['down', 'left'],
                'c3': ['up', 'left'],
                'c4': ['up', 'right'],
                'rh': ['right', 'left'],
                'rv': ['up', 'down'],
                'x1': ['right', 'down', 'left'],
                'x2': ['up', 'down', 'left'],
                'x3': ['up', 'right', 'left'],
                'x4': ['up', 'right', 'down'],
                'x5': ['up', 'right', 'down', 'left']
            }
        });
});