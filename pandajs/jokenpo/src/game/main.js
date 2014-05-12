game.module(
    'game.main'
)
.require(
    'engine.core',
    'game.domain',
    'game.objects',
    'game.scenes'
)
.body(function() {
    
    game.start(SceneGame);
});
