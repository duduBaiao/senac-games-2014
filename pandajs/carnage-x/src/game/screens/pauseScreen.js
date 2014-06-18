game.module(
    'game.screens.pauseScreen'
)
.body(function(){
    
    PauseScreen = game.Class.extend({
        
        init: function() {
            
            this.bgPaused = new game.Sprite('bgPause');
            this.bgPaused.alpha = 0.8;
            this.bgPaused.anchor = {x:0.5, y:0.5};
            
            this.titlePause = new game.Sprite('pauseTitle');
            this.titlePause.anchor = {x:0.5, y:0.5};
            this.titlePause.position.set(game.system.width / 2, game.system.height / 2);
            this.titlePause.interactive = true;
            
            //TODO: usar o bind do panda para evitar de perder o this
            var a = this.titlePause;
            var b = this.bgPaused;
            
            this.titlePause.click = function(){
                
                a.visible = false;
                b.visible = false;
                
                game.system.resume();
            };
            
            this.hide();
            
            game.scene.stage.addChild(this.bgPaused);
            game.scene.stage.addChild(this.titlePause);
        },
        
        hide:function(){
            this.titlePause.visible = false;
            this.bgPaused.visible = false;
        },
        
        show:function(position){
            this.bgPaused.position.set(position);
            
            this.titlePause.visible = true;
            this.bgPaused.visible = true;
        },
        
        upadate: function(){
            
            if(input.down("ENTER")){
                game.system.pause();
                pauseScreen.show(player.car.position);
            }
        }
    });
});