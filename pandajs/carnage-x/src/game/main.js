game.module(
    'game.main'
)
.require(
    'engine.core',
    'engine.physics',
    'engine.particle',
    'game.assets',
    'game.scenes'
)
.body(function(){

    game.start(SceneGame, 540, 720);

});