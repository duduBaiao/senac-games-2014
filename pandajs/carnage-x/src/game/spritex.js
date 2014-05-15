game.module(
	'game.spritex'
)
.require(
	'engine.sprite'
)
.body(function(){
	SpriteX = game.Sprite.extend({
		pivotPoint: {			CENTER: "center",
			BOTTOM: "bottom",
			TOP: "top",			LEFT: "left",			RIGHT: "right"		},
		init: function(id, x, y, settings){			this._super(id, x, y, settings);		},
		setPivot: function(pivotPoint){			var anchor = {x:0, y:0};
			switch (pivotPoint) {
			case this.pivotPoint.CENTER:
				anchor = {x:0.5, y:0.5};				break;
			case this.pivotPoint.BOTTOM:
				anchor = {x:0.5, y:this.heith};				break;
			case this.pivotPoint.TOP:
				anchor = {x:0.5, y:0};				break;
			case this.pivotPoint.LEFT:
				anchor = {x:0, y:0.5};				break;
			case this.pivotPoint.RIGHT:
				anchor = {x:this.width, y:0.5};				break;
			default:				break;			}
			this.anchor = anchor;		}	});});