game.module(
    'game.controls.button'
)
.require(
    'engine.sprite'
)
.body(function(){
    
    Button = game.Sprite.extend({
        
        scaleUp: function() {
            this.scale.y = 1.1;
            this.scale.x = 1.1;
        },
        
        scaleNormal: function() {
            this.scale.y = 1.0;
            this.scale.x = 1.0;
        },
        
        scaleDown: function() {
            this.scale.y = 0.9;
            this.scale.x = 0.9;
        },
        
        init: function(id, x, y, onClick) {
            this._super(id, x, y);
            
            this.anchor = {x: 0.5, y: 0.5};
            this.interactive = true;
            
            this.mouseover = this.scaleUp.bind(this);
            this.touchstart = this.mousedown = this.scaleDown.bind(this);
            this.mouseout = this.touchend = this.mouseupoutside = this.touchendoutside = this.scaleNormal.bind(this);
            
            this.click = this.tap = onClick;
        }
    });
});