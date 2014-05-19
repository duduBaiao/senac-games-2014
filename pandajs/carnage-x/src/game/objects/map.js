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
        
        TILE_WIDTH: 64,
        TILE_HALF_WIDTH: 32,
        
        init: function(mapIndex) {
            
            console.log("Loading map index: " + mapIndex);
            
            var level = Level[mapIndex];
            
            this.container = new game.Container();
            
            this.tiles = [];
            
            _.each(level.data, function(row, rowIndex) {
                
                var tileRow = [];
                
                _.each(row, function(column, columnIndex) {
                    
                    var sprite = new game.Sprite(column,
                                        (columnIndex * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                                        (rowIndex * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                                        {anchor: {x:0.5, y:0.5}});
                    
                    this.container.addChild(sprite);
                    
                    tileRow.push(new TileData(column, sprite.position));
                    
                }, this);
                
                this.tiles.push(tileRow);
                
            }, this);
            
            this.levelName = level.name;
            
            this.spawnAt = {x: (level.spawnAt.x * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                            y: (level.spawnAt.y * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                            direction: level.spawnAt.direction};
            
            game.scene.stage.addChild(this.container);
        },
        
        remove: function() {
            this.container.remove.bind(this);
            
            this._super();
        },
        
        addChild: function(sprite) {
            this.container.addChild(sprite);
        }
    });
});
