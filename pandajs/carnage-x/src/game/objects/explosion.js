game.module(
    'game.objects.explosion'
)
.require(
    'engine.sprite',
    'game.objects.baseObject'
)
.body(function(){
    
    Explosion = BaseObject.extend({
        
        init: function(settings) {
            
            var explosionType = Explosion.TYPES[settings.name];
            
            var textures = [];
            
            for (var i=1; i <= explosionType.frameCount; i++) {
                textures.push(game.Texture.fromImage(explosionType.imageName + i));
            }
            
            this.sprite = new game.MovieClip(textures);
            
            this.sprite.position.x = settings.x;
            this.sprite.position.y = settings.y;
            
            this.sprite.anchor.x = 0.5;
            this.sprite.anchor.y = 0.5;
            
            this.sprite.width = explosionType.width;
            this.sprite.height = explosionType.width;
            
            this.sprite.loop = false;
            
            this.sprite.animationSpeed = settings.animationSpeed || 1;
            
            this.sprite.onComplete = this.onComplete.bind(this);
            
            this.addToScene();
            
            this.sprite.play();
            
            this.playExplosionSoundEffect(explosionType);
        },
        
        onComplete: function() {
            
            var fadeTween =
                new game.Tween(this.sprite)
                    .to({alpha: 0}, 400)
                    .onComplete(this.removeFromScene.bind(this));
            
            fadeTween.start();
        },
        
        playExplosionSoundEffect: function(explosionType) {
            game.audio.playSound(explosionType.soundEffect, false, 0.8);
        }
    });
    
    Explosion.TYPES = {
        carHit: {imageName: 'carDie', frameCount: 7, width: 60, fadeTime: 3000, animationSpeed:2, soundEffect:"hitShotSnd"},
        carDie: {imageName: 'carDie', frameCount: 7, width: 140, fadeTime: 400, soundEffect:"explosionSnd"}
    }
});