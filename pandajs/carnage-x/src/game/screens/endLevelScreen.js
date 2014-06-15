game.module(
    'game.screens.endLevelScreen'
)
.require(
    'engine.sprite'
)
.body(function(){
    
    EndLevelScreen = game.Class.extend({
        
        init: function(win) {
            
            this.shadow = new game.Sprite("shadow", 0, 0, {width: game.system.width, height: game.system.height});
            
            this.btnRestart =
                new Button("btnRestart",
                           game.system.width / 2.0,
                           game.system.height * 0.4,
                           this.restart.bind(this));
            
            this.btnContinue =
                new Button("btnContinue",
                           game.system.width / 2.0,
                           game.system.height * 0.4,
                           this.continue.bind(this));
            
            this.btnFinish =
                new Button("btnFinish",
                           game.system.width / 2.0,
                           game.system.height * 0.6,
                           this.finish.bind(this));
            
            game.scene.stage.addChild(this.shadow);
            game.scene.stage.addChild(this.btnRestart);
            game.scene.stage.addChild(this.btnContinue);
            game.scene.stage.addChild(this.btnFinish);
            
            var hasMoreLevels = (GameState.Level.currentMapIndex < (Level.length -1));
            
            this.btnRestart.visible = (!win);
            
            this.btnContinue.visible = (win && hasMoreLevels);
        },
        
        close: function() {
            
            game.scene.stage.removeChild(this.btnFinish);
            game.scene.stage.removeChild(this.btnContinue);
            game.scene.stage.removeChild(this.btnRestart);
            game.scene.stage.removeChild(this.shadow);
        },
        
        restart: function() {
            
            this.close();
            
            game.system.setScene(GameScene);
        },
        
        continue: function() {
            
            GameState.Level.currentMapIndex++;
            
            this.restart();
        },
        
        finish: function() {
            
            game.system.setScene(MainScene);
        }
    });
});