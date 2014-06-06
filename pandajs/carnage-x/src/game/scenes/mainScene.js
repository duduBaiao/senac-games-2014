game.module(
    'game.scenes.mainScene'
)
.require(
    'game.scenes.gameScene',
    'game.controls.button'
)
.body(function() {
    
    MainScene = game.Scene.extend({
        
        init: function() {
            
            game.audio.playMusic('menuBg', 0.2);
            
            var mainScreen = new game.Sprite("mainScreen");
            
            Utils.Sprite.sizeToFit(mainScreen, 1024, 672);
            
            this.stage.addChild(mainScreen);
            
            var posX = game.system.width * (game.system.width < game.system.height ? 0.75 : 0.85);
            
            var btnStart =
                new Button("btnStart", posX, game.system.height * 0.3,
                    function() {
                        game.audio.stopMusic("menuBg");
                        game.audio.playSound('btnStartSnd', false, 0.8);
                        
                        game.scene.addTimer(300,function(){
                            game.system.setScene(GameScene);
                        });
                    });
            
            this.stage.addChild(btnStart);
            
            var btnHowToPlay = new Button("btnHowToPlay", posX, game.system.height * 0.433);
            this.stage.addChild(btnHowToPlay);
            
            var btnHiScore = new Button("btnHiScore", posX, game.system.height * 0.5666);
            this.stage.addChild(btnHiScore);
            
            var btnCredits = new Button("btnCredits", posX, game.system.height * 0.7);
            this.stage.addChild(btnCredits);
        }
    });
});