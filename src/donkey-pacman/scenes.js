game.module(
    'donkey-pacman.scenes'
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