game.module(
    'game.controls.icon'
)
.require(
    'engine.sprite'
)
.body(function(){
    
    Icon = game.Sprite.extend({
        
        init: function(id, x, y, settings) {
            this._super(id, x, y, settings);
            
            game.scene.stage.addChild(this);
        }
    });
});