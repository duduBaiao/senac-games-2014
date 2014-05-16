game.module(
	'game.objects.spritex'
)
.require(
	'engine.sprite'
)
.body(function(){
	SpriteX = game.Sprite.extend({
		pivotPoint: {
			BOTTOM: "bottom",
			TOP: "top",
		init: function(id, x, y, settings){
		setPivot: function(pivotPoint){
			switch (pivotPoint) {
			case this.pivotPoint.CENTER:
				anchor = {x:0.5, y:0.5};
			case this.pivotPoint.BOTTOM:
				anchor = {x:0.5, y:this.heith};
			case this.pivotPoint.TOP:
				anchor = {x:0.5, y:0};
			case this.pivotPoint.LEFT:
				anchor = {x:0, y:0.5};
			case this.pivotPoint.RIGHT:
				anchor = {x:this.width, y:0.5};
			default:
			this.anchor = anchor;