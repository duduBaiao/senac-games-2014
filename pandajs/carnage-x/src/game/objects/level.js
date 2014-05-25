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
                        ['w','rv','gr','gr','c4','x1','c3','gr','gr','rv','w' ,'w', 'rv','gr','gr','rv','w'],
                        ['w','rv','gr','gr','gr','rv','gr','gr','gr','c4','rh','x1','c3','gr','gr','rv','w'],
                        ['w','rv','gr','gr','gr','rv','gr','gr','gr','gr','gr','rv','gr','gr','gr','rv','w'],
                        ['w','x4','rh','rh','rh','x2','gr','gr','gr','c1','rh','x2','gr','gr','gr','rv','w'],
                        ['w','rv','gr','gr','gr','x4','rh','rh','rh','x2','w' ,'x4','rh','rh','rh','x2','w'],
                        ['w','rv','gr','gr','gr','rv','gr','gr','gr','rv','w' ,'rv','gr','gr','gr','rv','w'],
                        ['w','rv','gr','gr','gr','x4','c2','gr','gr','rv','w' ,'rv','gr','gr','gr','rv','w'],
                        ['w','rv','gr','gr','c1','c3','rv','gr','gr','rv','w' ,'rv','gr','gr','gr','rv','w'],
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
