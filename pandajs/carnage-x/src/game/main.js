game.module(
    'game.main'
)
.require(
    'engine.loader',
    'engine.core',
    'engine.physics',
    'engine.particle',
    'engine.keyboard',
    'engine.sprite',
    'game.assets',
    'game.scenes.mainScene'
)
.body(function(){
    
    game.Loader.bgColor = 0x1D0006;
    game.Loader.barBg = 0x4A030F;
    game.Loader.barColor = 0xAD8473;
    
    game.start(MainScene);
    
    //game.start(GameScene);
    
});