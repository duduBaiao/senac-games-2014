game.module(
    'game.main'
)
.require(
    'engine.core',
    'game.assets',
    'game.objects',
    'game.scenes'
)
.body(function() {
    
    game.start(SceneGame, 540, 720);
    
});
