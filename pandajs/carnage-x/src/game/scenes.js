game.module(
    'game.scenes'
)
.require(
    'engine.scene',
    'game.objects.level',
    'game.objects.map'
)
.body(function() {
    
    SceneGame = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        currentMapIndex: 0,
        
        init: function() {
            
            this.loadNextMap();
            
            game.audio.musicVolume = 0.2;
            game.audio.playMusic('music');
        },
        
        loadNextMap: function() {
            
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        }
    });

});