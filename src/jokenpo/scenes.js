game.module(
    'jokenpo.scenes'
)
.require(
    'engine.scene'
)
.body(function() {

    SceneGame = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        init: function() {
        }
    });
});