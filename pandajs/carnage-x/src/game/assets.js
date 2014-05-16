game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {
    
    // Sprites
	game.addAsset('sprites/loadingBg.png', 'loadingBg');
    game.addAsset('sprites/loadingMask.png', 'loadingMask');
    game.addAsset('sprites/loadingText.png', 'loadingText');
    
    game.addAsset('sprites/mainScreen.png', 'mainScreen');
    game.addAsset('sprites/btnCredits.png', 'btnCredits');
    game.addAsset('sprites/btnStart.png', 'btnStart');
    game.addAsset('sprites/btnHiScore.png', 'btnHiScore');
    game.addAsset('sprites/btnHowToPlay.png', 'btnHowToPlay');
    
    game.addAsset('sprites/pausedTitle.png', 'pauseTitle');
    game.addAsset('sprites/bgPaused.png', 'bgPause');
    
    game.addAsset('sprites/sideWalk.png', 'w');
    game.addAsset('sprites/grass.png', 'gr');
    game.addAsset('sprites/roadH.png', 'rh');
    game.addAsset('sprites/roadV.png', 'rv');
    game.addAsset('sprites/roadC1.png', 'c1');
    game.addAsset('sprites/roadC2.png', 'c2');
    game.addAsset('sprites/roadC3.png', 'c3');
    game.addAsset('sprites/roadC4.png', 'c4');
    game.addAsset('sprites/roadX1.png', 'x1');
    game.addAsset('sprites/roadX2.png', 'x2');
    game.addAsset('sprites/roadX3.png', 'x3');
    game.addAsset('sprites/roadX4.png', 'x4');
    game.addAsset('sprites/roadX5.png', 'x5');
    
    game.addAsset('sprites/blueCar.png', 'blue');
    game.addAsset('sprites/redCar.png', 'red');
    game.addAsset('sprites/yellowCar.png', 'yellow');
    game.addAsset('sprites/blackCar.png', 'black');
    game.addAsset('sprites/greenCar.png', 'green');
    game.addAsset('sprites/missil.png', 'missil');
    
    // Sounds
    game.addAudio('sound/explosion.m4a', 'explosion');
    game.addAudio('sound/music.m4a', 'music');
});