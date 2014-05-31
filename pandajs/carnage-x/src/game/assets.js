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
    
    game.addAsset('sprites/level/sideWalk.png', 'w');
    game.addAsset('sprites/level/grass.png', 'gr');
    game.addAsset('sprites/level/roadH.png', 'rh');
    game.addAsset('sprites/level/roadV.png', 'rv');
    game.addAsset('sprites/level/roadC1.png', 'c1');
    game.addAsset('sprites/level/roadC2.png', 'c2');
    game.addAsset('sprites/level/roadC3.png', 'c3');
    game.addAsset('sprites/level/roadC4.png', 'c4');
    game.addAsset('sprites/level/roadX1.png', 'x1');
    game.addAsset('sprites/level/roadX2.png', 'x2');
    game.addAsset('sprites/level/roadX3.png', 'x3');
    game.addAsset('sprites/level/roadX4.png', 'x4');
    game.addAsset('sprites/level/roadX5.png', 'x5');
    
    game.addAsset('sprites/car/redCar_up.png', 'redCar_up');
    game.addAsset('sprites/car/redCar_right.png', 'redCar_right');
    game.addAsset('sprites/car/redCar_down.png', 'redCar_down');
    game.addAsset('sprites/car/redCar_left.png', 'redCar_left');
    
    game.addAsset('sprites/car/blueCar_up.png', 'blueCar_up');
    game.addAsset('sprites/car/blueCar_right.png', 'blueCar_right');
    game.addAsset('sprites/car/blueCar_down.png', 'blueCar_down');
    game.addAsset('sprites/car/blueCar_left.png', 'blueCar_left');
    
    game.addAsset('sprites/shot/missile.png', 'shot');
    
    game.addAsset('sprites/explosion/carDie1.png', 'carDie1');
    game.addAsset('sprites/explosion/carDie2.png', 'carDie2');
    game.addAsset('sprites/explosion/carDie3.png', 'carDie3');
    game.addAsset('sprites/explosion/carDie4.png', 'carDie4');
    game.addAsset('sprites/explosion/carDie5.png', 'carDie5');
    game.addAsset('sprites/explosion/carDie6.png', 'carDie6');
    game.addAsset('sprites/explosion/carDie7.png', 'carDie7');
    
    // Sounds
    //game.addAudio('sound/explosion.m4a', 'explosion');
    //game.addAudio('sound/music.m4a', 'music');    
});