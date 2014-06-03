game.module(
    'game.objects.baseObject'
)
.require(
    'game.objects.tileData'
)
.body(function(){
    
    BaseObject = game.Class.extend({
        
        areOppositeDirections: function(currentDirection, newDirection) {
            
            var currentDirectionVector = TileData.DIRECTIONS_VECTORS[currentDirection];
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[newDirection];
            
            var dotProduct = currentDirectionVector.dot(newDirectionVector);
            
            return (dotProduct == -1);
        },
        
        arePerpendicularDirections: function(currentDirection, newDirection) {
            
            var currentDirectionVector = TileData.DIRECTIONS_VECTORS[currentDirection];
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[newDirection];
            
            var dotProduct = currentDirectionVector.dot(newDirectionVector);
            
            return (dotProduct == 0);
        },
        
        areSameVectorDirections: function(currentDirectionVector, newDirectionVector) {
            
            var dotProduct = currentDirectionVector.dot(newDirectionVector);
            
            return (dotProduct == 1);
        },
        
        areSameAngleDirections: function(currentRotation, newRotation) {
            
            var currentDirectionVector = this.angleToVector(currentRotation).normalize();
            var newDirectionVector = this.angleToVector(newRotation).normalize();
            
            return this.areSameVectorDirections(currentDirectionVector, newDirectionVector);
        },
        
        areSameDirections: function(currentDirection, newDirection) {
            
            var currentDirectionVector = TileData.DIRECTIONS_VECTORS[currentDirection];
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[newDirection];
            
            var dotProduct = currentDirectionVector.dot(newDirectionVector);
            
            return (dotProduct == 1);
        },
        
        vectorsIntersect: function(vectorA, startPointA, vectorB, startPointB) {
            
            var as = startPointA;
            var bs = startPointB;
            
            var ad = vectorA;
            var bd = vectorB;
            
            /*
            Given: two rays a, b with starting points (origin vectors) as, bs, and direction vectors ad, bd.
            
            The two lines intersect if there is an intersection point p:
            p = as + ad * u
            p = bs + bd * v
            
            If this equation system has a solution for u>=0 and v>=0 (the positive direction is what makes them rays),
            the rays intersect.
            */
            
            var u = (as.y * bd.x + bd.y * bs.x - bs.y * bd.x - bd.y * as.x) / (ad.x * bd.y - ad.y * bd.x);
            
            var v = (as.x + ad.x * u - bs.x) / bd.x;
            
            return ((u >= 0) && (v >= 0));
        },
        
        directionsIntersect: function(directionA, startPointA, directionB, startPointB) {
            
            var vectorA = TileData.DIRECTIONS_VECTORS[directionA].clone().multiply(Map.TILE_WIDTH, Map.TILE_WIDTH);
            var vectorB = TileData.DIRECTIONS_VECTORS[directionB].clone().multiply(Map.TILE_WIDTH, Map.TILE_WIDTH);
            
            return this.vectorsIntersect(vectorA, startPointA, vectorB, startPointB);
        },
        
        angleVectorsIntersect: function(rotationA, startPointA, rotationB, startPointB) {
            
            var vectorA = this.angleToVector(rotationA).normalize().multiply(Map.TILE_WIDTH, Map.TILE_WIDTH);
            var vectorB = this.angleToVector(rotationB).normalize().multiply(Map.TILE_WIDTH, Map.TILE_WIDTH);
            
            return this.vectorsIntersect(vectorA, startPointA, vectorB, startPointB);
        },
        
        isCloseEnoughToTile: function(tileData) {
            
            return Math.distance(
                    tileData.position.x, tileData.position.y,
                    this.sprite.position.x, this.sprite.position.y) < (Map.TILE_HALF_WIDTH / 2.0);
        },
        
        initializePhysics: function(settings) {
            
            this.body = new game.Body({
                collideAgainst: settings.collideAgainst,
                collisionGroup: settings.collisionGroup
            });
            
            var shape = new game.Rectangle(settings.width,
                                           settings.width);
            this.body.addShape(shape);
            
            if (this.afterCollide) {
                this.body.afterCollide = this.afterCollide.bind(this);
            }
            
            this.anchorDiff = settings.anchorDiff || 0;
            
            this.body._originalUpdate = this.body.update;
            this.body.update = function() {};
            
            this.updateBody();
            
            this.body.gameObject = this;
            
            game.scene.world.addBody(this.body);
        },
        
        angleToVector: function(angle) {
            
            var v = new game.Vector(0, -1);
            
            return v.rotate(angle);
        },
        
        angleToOppositeVector: function(angle) {
            
            var v = new game.Vector(0, 1);
            
            return v.rotate(angle);
        },
        
        updateBody: function(angle) {
            
            this.body._originalUpdate();
            
            this.body.rotation = this.sprite.rotation;
            
            var diffVector = this.angleToOppositeVector(this.body.rotation);
            
            diffVector.multiply(this.anchorDiff,
                                this.anchorDiff);
            
            this.body.position.x = game.scene.map.container.position.x + this.sprite.position.x + diffVector.x;
            this.body.position.y = game.scene.map.container.position.y + this.sprite.position.y + diffVector.y;
        },
        
        removeBody: function() {
            
            if (this.body) {
                this.body.gameObject = null;
                
                game.scene.world.removeBody(this.body);
            }
        },
        
        angleForDirection: function(direction) {
            
            var newDirectionVector = TileData.DIRECTIONS_VECTORS[direction];
            var newRotationAngle = Math.atan2(newDirectionVector.x, newDirectionVector.y * -1);
            
            var newAngle = this.sprite.rotation + (newRotationAngle - this.sprite.rotation);
            var difference = ((((newAngle - this.sprite.rotation) % (2 * Math.PI)) + (3 * Math.PI)) % (2 * Math.PI)) - Math.PI;
            
            return (this.sprite.rotation + difference);
        },
        
        stopByDuration: function(miliseconds) {
            
            this.stopped = true;
            
            if (this.stopTimer) {
                game.scene.removeTimer(this.stopTimer);
            }
            
            this.stopTimer =
                game.scene.addTimer(miliseconds, (function() {
                    
                    console.log('object started again!');
                    
                    this.stopped = false;
                    
                }).bind(this));
        },
        
        disaccelerate: function() {
            
            this.acceleration *= 0.06;
        },
        
        stopAWhile: function() {
            
            this.disaccelerate();
            
            this.stopByDuration(100 * Car.VELOCITY_REFERENCE / Car.VELOCITY);
        },
        
        addToScene: function() {
            game.scene.map.container.addChild(this.sprite);
            game.scene.addObject(this);
        },
        
        removeFromScene: function() {
            game.scene.removeGameObject(this);
        }        
    });
    
    BaseObject.COLLISION_GROUPS = {
        player: 0,
        enemies: 1,
        shots: 2
    };
});