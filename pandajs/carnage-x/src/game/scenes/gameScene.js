game.module(
    'game.scenes.gameScene'
)
.require(
    'engine.camera',
    'game.objects.level',
    'game.objects.map',
    'game.objects.player',
    'game.objects.enemy',
    'game.objects.shot',
    'game.objects.explosion',
    'game.objects.bar',
    'game.screens.pauseScreen',
    'game.utils'
)
.body(function() {
    
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        currentMapIndex: 0,
        
        enemyCount: 0,
        
        inputEnabled: true,
        
        shotPower: 100,
        
        shotRecharging: false,
        
        init: function() {
            
            this.startAudio();
            
            this.initializePhysics();
            
            this.loadNextMap();
            
            this.spawnPlayer();
            
            this.initializeCamera();
            
            this.spawnEnemies();
            
            this.initializeHUD();
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
        
        initializeHUD: function() {
            
            this.shotBar = new Bar();
            
            this.shotBar.addToScene();
        },
        
        initializeCamera: function() {
            
            this.cameraTarget =
                new game.Sprite('dummy',
                    this.player.sprite.position.x,
                    this.player.sprite.position.y,
                    {anchor: {x: 0.5, y: 0.5},
                     width: 60,
                     height: 60});
            
            this.updateCameraTarget();
            
            this.camera = new game.Camera(this.cameraTarget.position.x,
                                          this.cameraTarget.position.y);
            
            this.camera.target = this.cameraTarget;
            
            this.camera.container = this.map.container;
            this.camera.limit = new game.Point(this.map.dimensions.width, this.map.dimensions.height);
            
            this.camera.sensor.width = this.player.sprite.height;
            this.camera.sensor.height = this.player.sprite.height;
            
            this.camera.acceleration = GameScene.CAMERA_ACCELERATION_MIN;
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
            
            if (this.shotRecharging) return;
            
            this.shotRecharging = true;
            
            var shot = new Shot({x: this.player.sprite.position.x,
                                 y: this.player.sprite.position.y,
                                 direction: this.player.direction});
            var fireTween =
                new game.Tween(this)
                    .to({shotPower: 0}, 500);
            
            var rechargeTween =
                new game.Tween(this)
                    .delay(400)
                    .to({shotPower: 100}, 6000)
                    .onComplete((function() { this.shotRecharging = false; }).bind(this));
            
            fireTween.chain(rechargeTween);
            
            fireTween.start();
        },
        
        updateCameraTarget: function() {
            
            var diffVector = this.player.angleToVector(this.player.sprite.rotation);
            
            var distance = this.player.sprite.height * 2;
            
            diffVector.multiply(distance, distance);
            
            this.cameraTarget.position.x = this.player.sprite.position.x + diffVector.x;
            this.cameraTarget.position.y = this.player.sprite.position.y + diffVector.y;
        },
        
        update: function() {
            
            this.processInputs();
            
            this.updateCameraTarget();
            
            if (this.player.isRotating) {
                
                this.camera.acceleration = GameScene.CAMERA_ACCELERATION_MIN;
            }
            else {
                var acceleration = this.camera.acceleration + GameScene.CAMERA_ACCELERATION_INCREASE;
                
                this.camera.acceleration = acceleration.limit(GameScene.CAMERA_ACCELERATION_MIN,
                                                              GameScene.CAMERA_ACCELERATION_MAX);
            }
            
            this._super();
            
            if (this.lastShotPower != this.shotPower) {
                
                this.shotBar.draw(this.shotPower);
                
                this.lastShotPower = this.shotPower;
            }
        },
        
        removeGameObject: function(obj) {
            
            if (obj._removed) return;
            
            obj._removed = true;
            
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
        
        startAudio: function(){
            game.audio.playMusic('fase1Bg', 0.2);
        },
        
        endLevel: function() {
            // this.inputEnabled = false;
            
            console.log('the level is over!');
        }
    });
    
    _.extend(GameScene,
        {
            CAMERA_ACCELERATION_MIN: 1,
            CAMERA_ACCELERATION_MAX: 6,
            
            CAMERA_ACCELERATION_INCREASE: 0.1
        });
});