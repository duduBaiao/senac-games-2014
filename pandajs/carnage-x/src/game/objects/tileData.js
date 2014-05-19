game.module(
    'game.objects.tileData'
)
.body(function(){
    
    TileData = game.Class.extend({
        
        DIRECTIONS: {
            left: 0,
            up: 1,
            right: 2,
            down: 3
        },
        
        TYPES: {
            ROAD: 'rcx',
            
            'c1': [2, 3],
            'c2': [0, 3],
            'c3': [0, 1],
            'c4': [1, 2],
            'rh': [0, 2],
            'rv': [1, 3],
            'x1': [0, 2, 3],
            'x2': [0, 1, 3],
            'x3': [0, 1, 2],
            'x4': [1, 2, 3],
            'x5': [0, 1, 2, 3],
        },
        
        init: function(code, position) {
            this.isRoad = (this.TYPES.ROAD.indexOf(code[0]) >= 0);
            
            this.directions = this.TYPES[code] || [];
            
            this.position = position;
        }
    });
});