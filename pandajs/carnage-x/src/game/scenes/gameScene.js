game.module(
    'game.scenes.gameScene'
)
.require(
    'game.objects.level',
    'game.objects.map',
    'game.objects.player',
    'game.objects.enemy',
    'game.screens.pauseScreen',
    'game.utils',
    'game.objects.missile'
)
.body(function() {
    
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        currentMapIndex: 0,
        
        init: function() {
            
            this.loadNextMap();
            
            this.spawnPlayer();
            
            this.spawnEnemies();
        },
        
        loadNextMap: function() {
            
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        },
        
        spawnPlayer: function() {
            
            this.player = new Player();
            
            this.spriteToFollow = this.player.sprite;
        },
        
        spawnEnemies: function() {
            
            _.each(game.scene.map.spawnAt.enemies, function(spawnAt) {
                
                var enemy = new Enemy({spawnAt: spawnAt});
                
            }, this);
        },
        
        recalculateCameraPosition: function() {
            
            var halfWidth = game.system.width / 2.0;
            var halfHeight = game.system.height / 2.0;
            
            if ((this.spriteToFollow.position.x > halfWidth) &&
                (this.spriteToFollow.position.x < (this.map.dimensions.width - halfWidth))) {
                
                this.map.container.position.x = halfWidth - this.spriteToFollow.position.x;
            }
            
            if ((this.spriteToFollow.position.y > halfHeight) &&
                (this.spriteToFollow.position.y < (this.map.dimensions.height - halfHeight))) {
                
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
        
        keydown: function(key) {
            
            if (key == 'SPACE') {
                this.fire();
            }
        },
        
        fire: function() {
            
            var missile = new Missile({x: this.player.sprite.position.x,
                                       y: this.player.sprite.position.y,
                                       direction: this.player.direction});
        },
        
        update: function() {
            this._super();
            
            this.processInputs();
            
            this.recalculateCameraPosition();
        }
    });
});