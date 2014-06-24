game.module(
    'game.screens.endLevelScreen'
)
.require(
    'engine.sprite'
)
.body(function(){
    
    EndLevelScreen = game.Class.extend({
        
        init: function(win) {
            
            var widthCenter = game.system.width / 2.0;
            var heightCenter = game.system.height * 0.5;
            
            this.shadow = new game.Sprite("shadow", 0, 0, {width: game.system.width, height: game.system.height});
            
            this.bgPaused = new game.Sprite("bgPaused", widthCenter, heightCenter);
            this.bgPaused.anchor = {x:0.5, y:0.5};
            
            this.tltPaused = new game.Sprite("tltPaused", widthCenter, heightCenter);
            this.tltPaused.anchor = {x:0.5, y:0.5};
            
            this.tltLevelCleared = new game.Sprite("tltLevelCleared", widthCenter, heightCenter);
            this.tltLevelCleared.anchor = {x:0.5, y:0.5};
            
            this.tltTimeOut = new game.Sprite("tltTimeOut", widthCenter, heightCenter);
            this.tltTimeOut.anchor = {x:0.5, y:0.5};
            
            this.btnRestart =
                new Button("btnRestartIdle",
                           widthCenter,
                           heightCenter * 1.05,
                           this.restart.bind(this));
            
            this.btnContinue =
                new Button("btnNextLevelIdle",
                           widthCenter,
                           heightCenter * 1.05,
                           this.gameContinue.bind(this));
            
            this.btnFinish =
                new Button("btnMainMenuIdle",
                           widthCenter,
                           heightCenter * 1.25,
                           this.finish.bind(this));
            
            game.scene.stage.addChild(this.shadow);
            game.scene.stage.addChild(this.bgPaused);
            game.scene.stage.addChild(this.tltLevelCleared);
            game.scene.stage.addChild(this.tltTimeOut);
            game.scene.stage.addChild(this.btnRestart);
            game.scene.stage.addChild(this.btnContinue);
            game.scene.stage.addChild(this.btnFinish);
            
            var hasMoreLevels = (GameState.Level.currentMapIndex < (Level.length -1));
            
            this.tltLevelCleared.visible = win;
            
            this.tltTimeOut.visible = !win;
            
            this.btnRestart.visible = !win;
            
            this.btnContinue.visible = (win && hasMoreLevels);
        },
        
        close: function() {
            
            game.scene.stage.removeChild(this.btnFinish);
            game.scene.stage.removeChild(this.btnContinue);
            game.scene.stage.removeChild(this.btnRestart);
            game.scene.stage.removeChild(this.tltTimeOut);
            game.scene.stage.removeChild(this.tltLevelCleared);
            game.scene.stage.removeChild(this.bgPaused);
            game.scene.stage.removeChild(this.shadow);
        },
        
        restart: function() {
            
            this.close();
            
            game.system.setScene(GameScene);
        },
        
        gameContinue: function() {
            
            GameState.Level.currentMapIndex++;
            
            this.restart();
        },
        
        finish: function() {
            
            game.system.setScene(MainScene);
        }
    });
});