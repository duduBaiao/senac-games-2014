game.module(
    'game.controls.bar'
)
.require(
    'engine.renderer'
)
.body(function(){
    
    Bar = game.Class.extend({
        
        init: function(settings) {
            
            this.foregroundColor = settings.foregroundColor || 0xFFFF33;
            this.backgroundColor = settings.backgroundColor || 0xDE8501;
            
            this.width = settings.width || 300;
            this.height = settings.height || 20;
            
            this.x = settings.x || ((game.system.width - this.width) / 2.0);
            this.y = settings.y || 0;
            
            this.graphics = new game.Graphics();
            
            game.scene.stage.addChild(this.graphics);
        },
        
        draw: function(progress) {
            
            this.graphics.clear();
            
            this.graphics.beginFill(this.backgroundColor, 0.9);
            
            this.graphics.drawRect(this.x, this.y, this.width, this.height);
            
            this.graphics.endFill();
            
            this.graphics.beginFill(this.foregroundColor);
            
            this.graphics.drawRect(this.x, this.y, this.width * progress / 100.0, this.height);
            
            this.graphics.endFill();
        }
    });
});