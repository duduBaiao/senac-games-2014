game.module(
			this.bgPaused = new game.Sprite('bgPause');
			this.titlePause = new game.Sprite('pauseTitle');
			var a = this.titlePause;
			this.titlePause.click = function(){
				a.visible = false;
				game.system.resume();
			this.hide();
			game.scene.stage.addChild(this.bgPaused);
		hide:function(){
		show:function(position){
			this.titlePause.visible = true;
			this.bgPaused.visible = true;
		upadate: function(){
			if(input.down("ENTER")){