game.module(
    'game.scenes'
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
    SceneGame = game.Scene.extend({
        
        backgroundColor: 0xffffff,
        currentMapIndex: 0,
        
        init: function() {
            this.loadNextMap();
            
            game.audio.musicVolume = 0.2;
            game.audio.playMusic('music');
            
            //this.player = new Player();
        },
        
        loadNextMap: function() {
            
            if (this.map) {
                this.map.remove();
            }
            
            this.map = new Map(this.currentMapIndex);
        }
    });
    
    /*scene da tela Inicial*/
    SceneMain = game.Scene.extend({

    	backgroundColor: 0xffffff,
    	
    	init: function(){
    		
    		var start = new game.Sprite("start");
    		start.position.y = game.system.height/2;
    		start.position.x = game.system.width/2;
    		start.anchor = {x:0.5, y:0.5}; 
    		start.width = start.width/4;
    		start.height = start.height/4;
    		
    		start.interactive = true;
    		start.click = function(){
    			game.system.setScene(SceneGame);
    		};
    		
    		this.stage.addChild(start);
    	}, 
    	
    	update:function(){
    		if (input.down("ENTER")){
    			game.system.setScene(SceneGame);
    		}
    	}
    });
    
    /*scene para testes diversos*/
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