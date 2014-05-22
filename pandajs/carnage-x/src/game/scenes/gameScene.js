game.module(
    'game.scenes.gameScene'
)
.require(
    'game.objects.level',
    'game.objects.map',
    'game.objects.player',
    'game.objects.enemy',
    'game.screens.pauseScreen',
    'game.utils'
)
.body(function() {
    
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        currentMapIndex: 0,
        
        init: function() {
            
            this.input = new game.Keyboard();
            
            this.loadNextMap();
            
            this.player = new Player();
            
            //game.audio.musicVolume = 0.2;
            //game.audio.playMusic('music');
        },
        
        loadNextMap: function() {
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        },
        
        recalculateCameraPosition: function() {
            
            var halfWidth = game.system.width / 2.0;
            var halfHeight = game.system.height / 2.0;
            
            if ((this.player.sprite.position.x > halfWidth) &&
                (this.player.sprite.position.x < (this.map.container.getBounds().width - halfWidth))) {
                
                this.map.container.position.x = halfWidth - this.player.sprite.position.x;
            }
            
            if ((this.player.sprite.position.y > halfHeight) &&
                (this.player.sprite.position.y < (this.map.container.getBounds().height - halfHeight))) {
                
                this.map.container.position.y = halfHeight - this.player.sprite.position.y;
            }
        },
        
        update: function() {
            this._super();
            
            this.recalculateCameraPosition();
        }
    });
});