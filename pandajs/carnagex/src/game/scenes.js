game.module(
    'game.scenes'
)
.require(
    'engine.scene'
)
.body(function() {

    SceneGame = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        init: function() {
            
            this.map = new Map();
        }
    });
    
});