game.module(    'game.objects.player').require(	'game.objects.car').body(function(){		Player = Car.extend({
		init: function(){	    	_.super({imageName: 'redCar'});		}	});});