game.module(
    'game.controls.button'
)
.require(
    'engine.sprite'
)
.body(function(){
    
    Button = game.Sprite.extend({
        
        scaleUp: function() {
            this.changeToOverTexture();
            this.scale.y = 1.1;
            this.scale.x = 1.1;
            game.audio.playSound("overOptionSnd", false, 0.8);
        },
        
        scaleNormal: function() {
            this.changeToIddleTexture();
            this.scale.y = 1.0;
            this.scale.x = 1.0;
        },
        
        changeToOverTexture: function() {
            var newTexture = this.texture.baseTexture.imageUrl.replace("Idle","MouseOver");
            this.setTexture(newTexture);
            game.audio.playSound("overOptionSnd", false, 0.8);
        },
        
        changeToIddleTexture: function() {
            var newTexture = this.texture.baseTexture.imageUrl.replace("MouseOver","Idle");
            this.setTexture(newTexture);
        },
        
        init: function(id, x, y, onClick) {
            this._super(id, x, y);
            
            this.anchor = {x: 0.5, y: 0.5};
            this.interactive = true;
            
            this.mouseover = this.scaleUp.bind(this);
            this.mouseout = this.touchend = this.mouseupoutside = this.touchendoutside = this.scaleNormal.bind(this);
            
            this.click = this.tap = onClick;
        }
    });
});