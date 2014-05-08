game.module(
    'donkey-pacman.main'
)
.require(
    'engine.core',
    'jokenpo.objects',
    'jokenpo.scenes'
)
.body(function() {
    
    game.start(SceneGame);
});
