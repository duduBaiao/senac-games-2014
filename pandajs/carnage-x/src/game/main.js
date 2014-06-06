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
    
    game.start(MainScene);
    
    //game.start(GameScene);
    
});