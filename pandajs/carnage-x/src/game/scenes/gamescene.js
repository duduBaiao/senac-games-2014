game.module(
    'game.scenes.gamescene'
)
.require(
    'game.objects.level',
    'game.objects.map',
    'game.objects.pausescreen',
    'game.objects.player',
    'game.objects.targetcar'
)
.body(function() {
    
	var input = new game.Keyboard();
	
	/*scene principal do jogo*/
    GameScene = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        currentMapIndex: 0,
        
        init: function() {
            this.loadNextMap();
            
            game.audio.musicVolume = 0.2;
            //game.audio.playMusic('music');
            
            //this.player = new Player();
        },
        
        loadNextMap: function() {
            if (this.map) {
                this.map.remove();
            }
            this.map = new Map(this.currentMapIndex);
        }
    });
});