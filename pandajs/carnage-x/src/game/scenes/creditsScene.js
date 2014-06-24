game.module(
    'game.scenes.creditsScene'
)
.require(
    'game.controls.button'
)
.body(function() {
    
    CreditsScene = game.Scene.extend({
        init: function() {
            
            game.audio.playMusic('bgCredits');
            
            var htpScreenBG = new game.Sprite("bgCreditsScreen");
            
            Utils.Sprite.sizeToFit(htpScreenBG, 1024, 672);
            
            this.stage.addChild(htpScreenBG);
            
            var initialPosX = game.system.width * (game.system.width < game.system.height ? 0.75 : 0.85);
            
            var btnBack = new Button("btnBack", initialPosX, game.system.height * 0.90,
                    function() {
                        game.system.setScene(MainScene);
                    });
            this.stage.addChild(btnBack);
                        
        }
    });
});