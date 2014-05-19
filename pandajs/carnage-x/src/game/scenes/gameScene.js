game.module(
    'game.scenes.gameScene'
)
.require(
    'game.objects.level',
    'game.objects.map',
    'game.objects.player',
    'game.objects.enemy',
    'game.screens.pauseScreen'
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
            
            //this.player = new Player();
        },
        
        loadNextMap: function() {
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        },
        
        update: function() {
        }
    });
});