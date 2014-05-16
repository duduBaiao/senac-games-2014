game.module(
    'game.scenes.mainscene'
)
.require(
	'game.scenes.gamescene'		
)
.body(function() {
    
    MainScene = game.Scene.extend({
    	init: function(){
    		
    		var onMouseOver = function(){
    			this.scale.y = 1.2;
    			this.scale.x = 1.2;
    		};
    		var onMouseOut = function(){
    			this.scale.y = 1.0;
    			this.scale.x = 1.0;
    		};
    		
    		var mainScreen = new game.Sprite("mainScreen");
    		this.stage.addChild(mainScreen);
    		
    		var btnStart = new game.Sprite("btnStart");
    		btnStart.position.set(750,220);
    		btnStart.anchor = {x:0.5,y:0.5};
    		btnStart.interactive = true;
    		btnStart.mouseover = onMouseOver;
    		btnStart.mouseout = onMouseOut;
    		btnStart.click = function(){
    			game.system.setScene(GameScene);
    		};
    		this.stage.addChild(btnStart);
    		
    		var btnHowToPlay = new game.Sprite("btnHowToPlay");
    		btnHowToPlay.position.set(750,300);
    		btnHowToPlay.anchor = {x:0.5,y:0.5};
    		btnHowToPlay.interactive = true;
    		btnHowToPlay.mouseover = onMouseOver;
    		btnHowToPlay.mouseout = onMouseOut;
    		btnHowToPlay.click = function(){
    			game.system.setScene(SceneGame);
    		};
    		this.stage.addChild(btnHowToPlay);
    		
    		var btnHiScore = new game.Sprite("btnHiScore");
    		btnHiScore.position.set(750,380);
    		btnHiScore.anchor = {x:0.5,y:0.5};
    		btnHiScore.interactive = true;
    		btnHiScore.mouseover = onMouseOver;
    		btnHiScore.mouseout = onMouseOut;
    		btnHiScore.click = function(){
    			game.system.setScene(SceneGame);
    		};    		
    		this.stage.addChild(btnHiScore);
    		
    		var btnCredits = new game.Sprite("btnCredits");
    		btnCredits.position.set(750,460);
    		btnCredits.anchor = {x:0.5,y:0.5};
    		btnCredits.interactive = true;
    		btnCredits.mouseover = onMouseOver;
    		btnCredits.mouseout = onMouseOut;
    		btnCredits.click = function(){
    			game.system.setScene(SceneGame);
    		};
    		this.stage.addChild(btnCredits);
    	}
    });
});