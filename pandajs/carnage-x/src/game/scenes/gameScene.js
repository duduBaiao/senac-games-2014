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
    'game.controls.bar',
    'game.controls.icon',
    'game.utils',
    'game.gameState',
    'game.screens.endLevelScreen'
)
.body(function() {
    
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        
        cars: [],
        
        remainingEnemies: 0,
        
        stopped: false,
        
        shotPower: 100,
        
        shotRecharging: false,
        
        fuelLowIsNotPlaying: true,
        
        init: function() {
            
            this.startAudio();
            
            this.initializePhysics();
            
            this.loadNextMap();
            
            this.spawnPlayer();
            
            this.initializeCamera();
            
            this.spawnEnemies();
            
            this.initializeHUD();
        },
        
        startAudio: function(){
            game.audio.playMusic('fase1Bg', 0.2);
        },
        
        initializePhysics: function() {
            
            this.world = new game.World(0, 0); // no gravity!
        },
        
        loadNextMap: function() {
            
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(GameState.Level.currentMapIndex);
            
            this.remaingTime = this.map.timeLimit;
        },
        
        spawnPlayer: function() {
            
            this.player = new Player();
            
            this.cars.push(this.player);
        },
        
        spawnEnemies: function() {
            
            _.each(game.scene.map.spawnAt.enemies, function(spawnAt) {
                
                var enemy = new Enemy({spawnAt: spawnAt});
                
                this.cars.push(enemy);
                
                this.remainingEnemies++;
                
            }, this);
        },
        
        initializeHUD: function() {
            this.fuelBar = new Bar({y: 13, foregroundColor: 0xFFFFFF});
            this.shotBar = new Bar({y: 55, foregroundColor: 0xB10801});
            
            var barsHUD = new game.Sprite("barsHUD");
            barsHUD.anchor.x = 0.5;
            barsHUD.position.x = game.system.width / 2.0;
            
            this.stage.addChild(barsHUD);
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
            
            this.camera.minX = 0;
            this.camera.minY = 0;
            this.camera.maxX = this.map.dimensions.width - game.system.width;
            this.camera.maxY = this.map.dimensions.height - game.system.height;
            
            this.camera.sensorWidth = this.player.sprite.height;
            this.camera.sensorHeight = this.player.sprite.height;
            
            this.camera.acceleration = GameScene.CAMERA_ACCELERATION_MIN;
        },
        
        processInputs: function() {
            
            if (this.stopped) return;
            
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
            
            if (this.stopped) return;
            
            if (key == 'SPACE') {
                this.fire();
            }
            else if (key == 'P') {
                this.player.stopped = !this.player.stopped;
            }
        },
        
        click: function(event) {
            
            if (this.stopped) return;
            
            if (Math.distance(
                    event.global.x, event.global.y,
                    event.swipeX, event.swipeY) < (this.swipeDist / 2.0)) {
                
                this.fire();
            }
        },
        
        swipe: function(dir) {
            
            if (this.stopped) return;
            
            this.player.requestedDirection = dir;
        },
        
        fire: function() {
            
            if (this.shotRecharging){
                game.audio.playSound("clickGun");
                return;
            }
            
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
                    .to({shotPower: 100}, 4000)
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
            
            if (this.stopped) return;
            
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
            
            this.remaingTime -= game.system.delta;
            
            this.checkEndOfGas();
            
            if (this.remaingTime > 0) {
                
                this.fuelBar.draw(this.remaingTime / this.map.timeLimit * 100.0);
            }
            else {
                this.endLevel(false);
            }
        },
        
        removeGameObject: function(obj) {
            
            if (obj._removed) return;
            
            obj._removed = true;
            
            this.map.container.removeChild(obj.sprite);
            this.removeObject(obj);
            
            obj.removeBody();
            
            if (obj instanceof Enemy) {
                
                var enemyIndex = _.indexOf(this.cars, obj);
                
                this.cars.splice(enemyIndex, 1);
                
                this.remainingEnemies--;
                
                if (this.remainingEnemies == 0) {
                    this.endLevel(true);
                }
            }
        },
        
        endLevel: function(win) {
            game.scene.addTimer(500, (function() {
                this.stopped = true;
                this.playEndLevelSound(win);
                new EndLevelScreen(win);
            }).bind(this));
        },
        
        playEndLevelSound: function (win){
            if (win){
                game.audio.playSound("applauseSnd");
            } else {
                game.audio.playSound("booSnd");
            }  
        },
        
        checkEndOfGas: function() {
            if (this.remaingTime < 3 && this.fuelLowIsNotPlaying) {
                game.audio.stopMusic();
                game.audio.playSound("fuelLow");
                this.fuelLowIsNotPlaying = false;
            }
        },
        
        reload: function() {
            
        }
    });
    
    _.extend(GameScene,
        {
            CAMERA_ACCELERATION_MIN: 1,
            CAMERA_ACCELERATION_MAX: 6,
            
            CAMERA_ACCELERATION_INCREASE: 0.1
        });
});