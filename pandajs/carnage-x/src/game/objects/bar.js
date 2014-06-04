game.module(
    'game.objects.bar'
)
.require(
    'engine.renderer'
)
.body(function(){
    
    Bar = game.Graphics.extend({
        
        backgroundColor: 0xDE8501,
        
        foregroundColor: 0xFFFF33,
        
        addToScene: function() {
            game.scene.stage.addChild(this);
        },
        
        draw: function(progress) {
            
            this.clear();
            
            var left = (game.system.width - Bar.WIDTH) / 2.0;
            var top = 24;
            
            this.beginFill(this.backgroundColor, 0.9);
            
            this.drawRect(left, top, Bar.WIDTH, Bar.HEIGHT);
            
            this.endFill();
            
            this.beginFill(this.foregroundColor, 0.9);
            
            this.drawRect(left, top, Bar.WIDTH * progress / 100.0, Bar.HEIGHT);
            
            this.endFill();
        }
    });
    
    _.extend(Bar,
        {
           WIDTH: 300,
           HEIGHT: 12
        });
});