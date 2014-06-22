game.module(
    'game.objects.map'
)
.require(
    'engine.sprite',
    'game.objects.level',
    'game.objects.tileData'
)
.body(function() {
    
    Map = game.Class.extend({
        
        init: function(mapIndex) {
            
            var level = Level[mapIndex];
            
            this.container = new game.Container();
            
            this.tiles = [];
            
            _.each(level.data, function(row, rowIndex) {
                
                var tileRow = [];
                
                _.each(row, function(column, columnIndex) {
                    
                    var sprite = new game.Sprite(column,
                                        (columnIndex * Map.TILE_WIDTH) + Map.TILE_HALF_WIDTH,
                                        (rowIndex * Map.TILE_WIDTH) + Map.TILE_HALF_WIDTH,
                                        {anchor: {x: 0.5, y: 0.5},
                                         width: Map.TILE_WIDTH,
                                         height: Map.TILE_WIDTH});
                    
                    this.container.addChild(sprite);
                    
                    tileRow.push(new TileData(column, this.tiles.length, tileRow.length, sprite.position));
                    
                }, this);
                
                this.tiles.push(tileRow);
                
            }, this);
            
            this.levelName = level.name;
            
            this.spawnAt = level.spawnAt;
            
            this.timeLimit = level.timeLimit;
            
            this.dimensions = {height: Map.TILE_WIDTH * this.tiles.length,
                               width: Map.TILE_WIDTH * this.tiles[0].length};
            
            game.scene.stage.addChild(this.container);
        },
        
        tileForPosition: function(position) {
            var x = Math.floor(position.x / Map.TILE_WIDTH);
            var y = Math.floor(position.y / Map.TILE_WIDTH);
            
            return this.tiles[y][x];
        },
        
        remove: function() {
            game.scene.stage.removeChild(this.container);
        }
    });
    
    Map.TILE_WIDTH = 128;
    Map.TILE_HALF_WIDTH = Map.TILE_WIDTH / 2.0;
    Map.TILE_QUARTER_WIDTH = Map.TILE_WIDTH / 4.0;
    
});
