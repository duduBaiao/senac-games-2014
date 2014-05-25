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
            
            this.loadNextMap();
            
            this.player = new Player();
            
            this.spriteToFollow = this.player.sprite;
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
            
            if ((this.spriteToFollow.position.x > halfWidth) &&
                (this.spriteToFollow.position.x < (this.map.container.getBounds().width - halfWidth))) {
                
                this.map.container.position.x = halfWidth - this.spriteToFollow.position.x;
            }
            
            if ((this.spriteToFollow.position.y > halfHeight) &&
                (this.spriteToFollow.position.y < (this.map.container.getBounds().height - halfHeight))) {
                
                this.map.container.position.y = halfHeight - this.spriteToFollow.position.y;
            }
        },
        
        processInputs: function() {
            
            if (game.keyboard.down('UP')) {
                this.player.requestedDirection = 'up';
            }
            else if (game.keyboard.down('RIGHT')) {
                this.player.requestedDirection = 'right';
            }
            else if (game.keyboard.down('DOWN')) {
                this.player.requestedDirection = 'down';
            }
            else if (game.keyboard.down('LEFT')) {
                this.player.requestedDirection = 'left';
            }
        },
        
        update: function() {
            this._super();
            
            this.processInputs();
            
            this.recalculateCameraPosition();
        }
    });
});