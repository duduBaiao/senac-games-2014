game.module(
    'jokenpo.main'
)
.require(
    'engine.core',
    'jokenpo.domain',
    'jokenpo.objects',
    'jokenpo.scenes'
)
.body(function() {
    
    game.start(SceneGame);
});
