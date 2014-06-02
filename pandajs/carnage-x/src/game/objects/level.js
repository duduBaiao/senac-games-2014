game.module(
    'game.objects.level'
)
.body(function() {
    
    Level =
        [
            {
                name: "Level 1",
                data:
                    [
                        ['w','w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w', 'w' ,'w' ,'w' ,'w', 'w'],
                        ['w','c1','rh','rh','c2','w' ,'c1','rh','rh','c2','w' ,'w', 'c1','rh','rh','c2','w'],
                        ['w','rv','w' ,'w' ,'c4','x1','c3','w' ,'w' ,'rv','w' ,'w', 'rv','w' ,'w' ,'rv','w'],
                        ['w','rv','w' ,'w' ,'w' ,'rv','w' ,'w' ,'w' ,'c4','rh','x1','c3','w' ,'w' ,'rv','w'],
                        ['w','rv','w' ,'w' ,'w' ,'rv','w' ,'w' ,'w' ,'w' ,'w' ,'rv','w' ,'w' ,'w' ,'rv','w'],
                        ['w','x4','rh','rh','rh','x2','w' ,'w' ,'w' ,'c1','rh','x2','w' ,'w' ,'w' ,'rv','w'],
                        ['w','rv','w' ,'w' ,'w' ,'x4','rh','rh','rh','x2','w' ,'x4','rh','rh','rh','x2','w'],
                        ['w','rv','w' ,'w' ,'w' ,'rv','w' ,'w' ,'w' ,'rv','w' ,'rv','w' ,'w' ,'w' ,'rv','w'],
                        ['w','rv','w' ,'w' ,'w' ,'x4','c2','w' ,'w' ,'rv','w' ,'rv','w' ,'w' ,'w' ,'rv','w'],
                        ['w','rv','w' ,'w' ,'c1','c3','rv','w' ,'w' ,'rv','w' ,'rv','w' ,'w' ,'w' ,'rv','w'],
                        ['w','c4','rh','rh','c3','w' ,'c4','rh','rh','c3','w' ,'c4','rh','rh','rh','c3','w'],
                        ['w','w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w' ,'w', 'w']
                    ],
                spawnAt: {
                    player: {x: 9, y: 6, direction: 'up'},
                    enemies: [{x: 1, y: 1, direction: 'right'},
                              {x: 15, y: 10, direction: 'left'}]
                }
            }
        ];
});
