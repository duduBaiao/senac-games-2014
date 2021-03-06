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
            this.backgroundColor = settings.backgroundColor || 0x000000;
            
            this.width = settings.width || 310;
            this.height = settings.height || 25;
            
            this.x = settings.x || ((game.system.width - this.width) / 2.0);
            this.y = settings.y || 0;
            
            this.graphics = new game.Graphics();
            
            game.scene.stage.addChild(this.graphics);
        },
        
        draw: function(progress) {
            
            this.graphics.clear();
            
            this.graphics.beginFill(this.backgroundColor);
            
            this.graphics.drawRect(this.x, this.y, this.width, this.height);
            
            this.graphics.endFill();
            
            this.graphics.beginFill(this.foregroundColor);
            
            this.graphics.drawRect(this.x, this.y, this.width * progress / 100.0, this.height);
            
            this.graphics.endFill();
        }
    });
});