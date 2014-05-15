game.module(	'game.objects.targetcar').require(	'game.objects.car').body(function(){
	TargetCar = Car.extend({				life:100,				init: function(sprite){		},
		isAlive: function(){			return (this.life > 0)?true:false;		}	});});