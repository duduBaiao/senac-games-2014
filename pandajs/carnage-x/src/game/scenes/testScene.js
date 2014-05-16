game.module(
    'game.scenes.testScene'
)
.require(
    'engine.keyboard'
)
.body(function() {
    
    TestScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        init: function(){
        }, 
        
        update: function(){
            if (input.down("UP")){
                console.log("up");
            }
        }
    });
});