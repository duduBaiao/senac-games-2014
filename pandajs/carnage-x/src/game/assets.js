game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {
    
    // Sprites
    game.addAsset('media/wall.png', 'w');
    game.addAsset('media/road.png', 'r');
    
    // Sounds
    game.addAudio('media/sound/explosion.m4a', 'explosion');
    game.addAudio('media/sound/music.m4a', 'music');

});