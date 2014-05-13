game.module(
    'game.objects.map'
)
.require(
    'engine.sprite',
    'game.objects.level'
)
.body(function() {
    
    Map = game.Class.extend({
        
        TILE_WIDTH: 64,
        TILE_HALF_WIDTH: 32,
        
        init: function(mapIndex) {
            
            console.log("Loading map index: " + mapIndex);
            
            var levelData = Level.data[mapIndex];
            
            this.container = new game.Container();
            
            _.each(levelData, function(row, rowIndex) {
                
                _.each(row, function(column, columnIndex) {
                    
                    var sprite = new game.Sprite(column,
                                        (columnIndex * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                                        (rowIndex * this.TILE_WIDTH) + this.TILE_HALF_WIDTH,
                                        {anchor: {x:0.5, y:0.5}});
                    
                    this.container.addChild(sprite);
                    
                }, this);
            }, this);
            
            game.scene.stage.addChild(this.container);
            game.scene.addObject(this);
        },
        
        remove: function() {
            this.container.remove.bind(this);
            
            this._super();
        }
    });
});
