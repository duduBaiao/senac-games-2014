game.module(
    'game.scenes.testscene'
)
.require(
    'engine.keyboard'
)
.body(function() {
    
    SceneTest = game.Scene.extend({
        
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