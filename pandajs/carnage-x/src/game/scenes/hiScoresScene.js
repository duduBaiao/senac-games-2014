game.module(
    'game.scenes.hiScoresScene'
)
.require(
    'game.controls.button'
)
.body(function() {
    
    HiScoresScene = game.Scene.extend({
        init: function() {
            
            game.audio.playMusic('bgHowToPlay');
            
            var hiScoresScreenBG = new game.Sprite("bgHiScoresScreen");
            
            Utils.Sprite.sizeToFit(hiScoresScreenBG, 1024, 672);
            
            this.stage.addChild(hiScoresScreenBG);
            
            var initialPosX = game.system.width * (game.system.width < game.system.height ? 0.75 : 0.85);
            
            var btnBack = new Button("btnBack", initialPosX, game.system.height * 0.90,
                    function() {
                        game.audio.playSound("clickSnd");
                        game.scene.addTimer(300,function(){
                            game.system.setScene(MainScene);
                        });
                    });
            this.stage.addChild(btnBack);
                        
        }
    });
});