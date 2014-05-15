game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {
    
    // Sprites
    game.addAsset('wall.png', 'w');
    game.addAsset('road.png', 'r');
    
    // Sounds
    game.addAudio('sound/explosion.m4a', 'explosion');
    game.addAudio('sound/music.m4a', 'music');

});