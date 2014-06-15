game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {
    
    // Sprites
    game.addAsset('sprites/mainScreen.png', 'mainScreen');
    game.addAsset('sprites/shadow.png', 'shadow');
    game.addAsset('sprites/btnCredits.png', 'btnCredits');
    game.addAsset('sprites/btnStart.png', 'btnStart');
    game.addAsset('sprites/btnHiScore.png', 'btnHiScore');
    game.addAsset('sprites/btnHowToPlay.png', 'btnHowToPlay');
    
    game.addAsset('sprites/btnContinue.png', 'btnContinue');
    game.addAsset('sprites/btnRestart.png', 'btnRestart');
    game.addAsset('sprites/btnFinish.png', 'btnFinish');
    
    game.addAsset('sprites/pausedTitle.png', 'pauseTitle');
    game.addAsset('sprites/bgPaused.png', 'bgPause');
    
    game.addAsset('sprites/level/sideWalk.png', 'w');
    game.addAsset('sprites/level/grass.png', 'gr');
    
    game.addAsset('sprites/level/roadH.png', 'rh');
    game.addAsset('sprites/level/roadV.png', 'rv');
    game.addAsset('sprites/level/roadUpLeft.png', 'rul');
    game.addAsset('sprites/level/roadUpRight.png', 'rur');
    game.addAsset('sprites/level/roadRightDown.png', 'rrd');
    game.addAsset('sprites/level/roadDownLeft.png', 'rdl');
    game.addAsset('sprites/level/roadTDown.png', 'rtd');
    game.addAsset('sprites/level/roadTLeft.png', 'rtl');
    game.addAsset('sprites/level/roadTUp.png', 'rtu');
    game.addAsset('sprites/level/roadTRight.png', 'rtr');
    game.addAsset('sprites/level/roadCross.png', 'rc');
    
    game.addAsset('sprites/level/guardSouth.png', 'gS');
    game.addAsset('sprites/level/guardNorth.png', 'gN');
    game.addAsset('sprites/level/guardWest.png', 'gE');
    game.addAsset('sprites/level/guardEast.png', 'gW');
    
    game.addAsset('sprites/level/guardSouthWestCorner.png', 'gSWc');
    game.addAsset('sprites/level/guardNorthWestCorner.png', 'gNWc');
    game.addAsset('sprites/level/guardNorthEastCorner.png', 'gNEc');
    game.addAsset('sprites/level/guardSouthEastCorner.png', 'gSEc');
    
    game.addAsset('sprites/level/guardNorthEast.png', 'gNE');
    game.addAsset('sprites/level/guardNorthWest.png', 'gNW');
    game.addAsset('sprites/level/guardSouthEast.png', 'gSE');
    game.addAsset('sprites/level/guardSouthWest.png', 'gSW');
    
    game.addAsset('sprites/level/guardH.png', 'gH');
    game.addAsset('sprites/level/guardHWest.png', 'gHW');
    game.addAsset('sprites/level/guardHEast.png', 'gHE');
    
    game.addAsset('sprites/level/guardV.png', 'gV');
    game.addAsset('sprites/level/guardVSouth.png', 'gVS');
    game.addAsset('sprites/level/guardVNorth.png', 'gVN');
    
    game.addAsset('sprites/level/guardBox.png', 'gBX');
    
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
    
    game.addAsset('sprites/dummy.png', 'dummy');
    
    // Sounds
    game.addAudio('sound/menuBg.m4a', 'menuBg');
    game.addAudio('sound/btnStartSnd.m4a', 'btnStartSnd');
    game.addAudio('sound/overOptionSnd.m4a', 'overOptionSnd');
    game.addAudio('sound/fase1Bg.m4a', 'fase1Bg');
    game.addAudio('sound/fireBallshotSnd.m4a', 'fireBallshotSnd');
    game.addAudio('sound/explosionSnd.m4a', 'explosionSnd');
    game.addAudio('sound/hitShotSnd.m4a', 'hitShotSnd');
    game.addAudio('sound/carCrashSnd.m4a', 'carCrashSnd');
    
});