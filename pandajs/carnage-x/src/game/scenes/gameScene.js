game.module(
    'game.scenes.gameScene'
)
.require(
    'engine.camera',
    'game.objects.level',
    'game.objects.map',
    'game.objects.player',
    'game.objects.enemy',
    'game.screens.pauseScreen',
    'game.utils',
    'game.objects.shot'
)
.body(function() {
    
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        currentMapIndex: 0,
        
        enemyCount: 0,
        
        inputEnabled: true,
        
        init: function() {
            
            this.initializePhysics();
            
            this.loadNextMap();
            
            this.spawnPlayer();
            
            this.spawnEnemies();
            
            this.initializeCamera();
        },
        
        initializePhysics: function() {
            
            this.world = new game.World(0, 0); // no gravity!
        },
        
        loadNextMap: function() {
            
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        },
        
        spawnPlayer: function() {
            
            this.player = new Player();
        },
        
        spawnEnemies: function() {
            
            _.each(game.scene.map.spawnAt.enemies, function(spawnAt) {
                
                var enemy = new Enemy({spawnAt: spawnAt});
                
                this.enemyCount++;
                
            }, this);
        },
        
        initializeCamera: function() {
            
            this.camera = new game.Camera(this.player.sprite.position.x,
                                          this.player.sprite.position.y);
            
            this.camera.target = this.player.sprite;
            this.camera.container = this.map.container;
            this.camera.limit = new game.Point(this.map.dimensions.width, this.map.dimensions.height);
            
            this.camera.maxSpeed = Player.VELOCITY * 1.5;
            this.camera.acceleration = 6;
        },
        
        processInputs: function() {
            
            if (!this.inputEnabled) return;
            
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
            
            if (!this.inputEnabled) return;
            
            if (key == 'SPACE') {
                this.fire();
            }
        },
        
        click: function(event) {
            
            if (!this.inputEnabled) return;
            
            if (Math.distance(
                    event.global.x, event.global.y,
                    event.swipeX, event.swipeY) < (this.swipeDist / 2.0)) {
                
                this.fire();
            }
        },
        
        swipe: function(dir) {
            
            if (!this.inputEnabled) return;
            
            this.player.requestedDirection = dir;
        },
        
        fire: function() {
            
            var shot = new Shot({x: this.player.sprite.position.x,
                                 y: this.player.sprite.position.y,
                                 direction: this.player.direction});
        },
        
        update: function() {
            this._super();
            
            this.processInputs();
        },
        
        removeGameObject: function(obj) {
            
            this.map.container.removeChild(obj.sprite);
            this.removeObject(obj);
            
            obj.removeBody();
            
            if (obj instanceof Enemy) {
                this.enemyCount--;
                
                if (this.enemyCount == 0) {
                    this.endLevel();
                }
            }
        },
        
        endLevel: function() {
            this.inputEnabled = false;
            
            console.log('the level is over! all inputs are disabled.');
        }
    });
});