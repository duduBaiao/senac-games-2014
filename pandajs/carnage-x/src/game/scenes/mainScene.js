game.module(
    'game.scenes.mainScene'
)
.require(
    'game.scenes.gameScene',
    'game.controls.button'
)
.body(function() {
    
    MainScene = game.Scene.extend({
        
        init: function(){
            
            var mainScreen = new game.Sprite("mainScreen");
            this.stage.addChild(mainScreen);
            
            var btnStart =
                new Button("btnStart", 750, 220,
                    function() {
                        game.system.setScene(GameScene);
                    });
                    
            this.stage.addChild(btnStart);                                            
            
            var btnHowToPlay = new Button("btnHowToPlay", 750, 300);
            this.stage.addChild(btnHowToPlay);
            
            var btnHiScore = new Button("btnHiScore", 750, 380);
            this.stage.addChild(btnHiScore);
            
            var btnCredits = new Button("btnCredits", 750, 460);
            this.stage.addChild(btnCredits);
        }
    });
});