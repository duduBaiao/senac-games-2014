game.module(
    'game.main'
)
.require(
    'engine.core',
    'engine.physics',
    'engine.particle',
    'engine.keyboard',
    'game.assets',
    'game.scenes.mainScene'
)
.body(function(){
    
    game.Loader.inject({
        
        backgroundColor: 0x000000,
        
        initStage: function() {
            
            var anc = {x:0.5, y:0.5};
            
            var loadingBg = new game.Sprite(game.Texture.fromImage("loadingBg"));
            loadingBg.position = {x:game.system.width / 2, y:(game.system.height / 2)-80};
            loadingBg.anchor = anc;
            
            var loadingMask = new game.Sprite(game.Texture.fromImage("loadingMask"));
            loadingMask.position = {x:game.system.width / 2, y:(game.system.height / 2)-70};
            loadingMask.anchor = anc;
            
            var loadingText = new game.Sprite(game.Texture.fromImage("loadingText"));
            loadingText.position = {x:game.system.width / 2, y:game.system.height / 2};
            loadingText.anchor = anc;
            
            game.system.stage.addChild(loadingMask);
            game.system.stage.addChild(loadingText);
            game.system.stage.addChildAt(loadingBg,1);
            
            this.tween = new game.Tween(loadingBg)
                .to({rotation: Math.PI}, 3000)
                .start();
        }
    });
    
    game.start(MainScene);
    //game.start(GameScene);
    //game.start(TestScene);
});