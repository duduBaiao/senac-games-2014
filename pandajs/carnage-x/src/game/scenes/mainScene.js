game.module(
    'game.scenes.mainScene'
)
.require(
    'game.scenes.gameScene',
    'game.controls.button',
    'game.gameState'
)
.body(function() {
    
    MainScene = game.Scene.extend({
        init: function() {
            
            game.audio.playMusic('menuBg', 0.2);
            
            var mainScreenBG = new game.Sprite("mainScreenBG");
            
            this.stage.addChild(mainScreenBG);
            
            var tween = new game.Tween(mainScreenBG.position);
            tween.to({x: - mainScreenBG.width + game.system.width}, 5000);
            tween.easing(game.Tween.Easing.Quadratic.InOut);
            tween.repeat(10);
            tween.yoyo();
            tween.start();
            
            var mainScreenMask = new game.Sprite("mainScreenMask");
            
            Utils.Sprite.sizeToFit(mainScreenMask, 1024, 672);
            
            this.stage.addChild(mainScreenMask);
            
            var initialPosX = game.system.width * (game.system.width < game.system.height ? -0.05 : -0.15);
            
            var btnPlay =
                new Button("btnPlayIdle", initialPosX, game.system.height * 0.55,
                    function() {
                        this.startBtnPlayAnim(btnPlay);
                        game.audio.stopMusic("menuBg");
                        game.audio.playSound('btnStartSnd', false, 0.8);
                        
                        game.scene.addTimer(500,function(){
                            GameState.Level.currentMapIndex = 0;
                            game.system.setScene(GameScene);
                        });
                    }.bind(this));
            this.stage.addChild(btnPlay);
            this.startIntroBtnAnim(btnPlay,0);
            
            var btnHowToPlay = 
                new Button("btnHowToPlayIdle", initialPosX, game.system.height * 0.65);
            
            this.stage.addChild(btnHowToPlay);
            this.startIntroBtnAnim(btnHowToPlay, 300);
            
            var btnHiScore = new Button("btnHiScoresIdle", initialPosX, game.system.height * 0.75);
            this.stage.addChild(btnHiScore);
            this.startIntroBtnAnim(btnHiScore, 600);
            
            var btnCredits = new Button("btnCreditsIdle", initialPosX, game.system.height * 0.85);
            this.stage.addChild(btnCredits);
            this.startIntroBtnAnim(btnCredits, 900);
        },
        
        startIntroBtnAnim: function(btn, time) {
            var definitivePosX = game.system.width * (game.system.width < game.system.height ? 0.7 : 0.17);
            game.scene.addTimer(time, function() {
                new game.Tween(btn.position)
                .to({x: definitivePosX}, 1000)
                .easing(game.Tween.Easing.Elastic.Out).start();
            });
        },
        
        startBtnPlayAnim: function(btn) {
            var posX = game.system.width * (game.system.width < game.system.height ? 1.7 : 1.17);
            new game.Tween(btn.position)
                    .to({x: posX}, 500)
                    .easing(game.Tween.Easing.Back.In).start();
        },
    });
});