game.module(
    'game.objects'
)
.require(
    'engine.sprite'
)
.body(function() {
    
    Map = game.Class.extend({
        
        levelData: ['wwwwwwwwwww',
                    'wrrrrwrrrrw',
                    'wrrrrwrrrrw',
                    'wrrrrwrrrrw',
                    'wrrrrwrrrrw',
                    'wwwwwwwwwww'],
        
        init: function() {
            
            this.container = new game.Container();
            this.container.position.y = -150;
            
            var wall = new game.Sprite('media/logo1.png', game.system.width / 2, 0, {anchor: {x:0.5, y:0.5}});
            this.container.addChild(wall);
            
            game.scene.stage.addChild(this.container);
        }
    });

});