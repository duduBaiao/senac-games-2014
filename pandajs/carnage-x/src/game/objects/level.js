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
                        ['gul', 'gu',  'gu',  'gu',  'gu',  'gu',   'gu',  'gu',  'gu',  'gu',  'gu',   'gu',   'gu',   'gu',   'gu',   'gu',    'gur'],
                        ['gl',  'rul', 'rh',  'rh',  'rur', 'gurdl','rul', 'rh',  'rh',  'rtd', 'rh',   'rh',   'rtd',  'rh',   'rh',   'rur',   'gr'],
                        ['gl',  'rv',  'gul', 'gur', 'rdl', 'rtd',  'rrd', 'gul', 'gur', 'rv',  'gudl', 'gurd', 'rv',   'gul',  'gur',  'rv',    'gr'],
                        ['gl',  'rv',  'gl',  'gru', 'gur', 'rv',   'gul', 'glu', 'gr',  'rdl', 'rh',   'rtd',  'rrd',  'gl',   'gr',   'rv',    'gr'],
                        ['gl',  'rv',  'gl',  'w',   'gr',  'rv',   'gdl', 'gd',  'grd', 'rul', 'rh',   'rtl',  'gul',  'glu',  'gr',   'rv',    'gr'],
                        ['gl',  'rv',  'gdl', 'gd',  'grd', 'rtr',  'rh',  'rh',  'rh',  'rtl', 'glur', 'rv',   'gdl',  'gd',   'grd',  'rv',    'gr'],
                        ['gl',  'rtr', 'rh',  'rh',  'rh',  'rtl',  'gul', 'gu',  'gur', 'rv',  'glr',  'rtr',  'rh',   'rh',   'rtd',  'rrd',   'gr'],
                        ['gl',  'rv',  'gul', 'gu',  'gur', 'rv',   'gdl', 'gld', 'gr',  'rv',  'gldr', 'rv',   'gudl', 'gurd', 'rv',   'gurdl', 'gr'],
                        ['gl',  'rv',  'gl',  'gdr', 'grd', 'rtr',  'rur', 'gl',  'gr',  'rtr', 'rh',   'rc',   'rh',   'rh',   'rtu',  'rur',   'gr'],
                        ['gl',  'rv',  'gdl', 'grd', 'rul', 'rrd',  'rv',  'gdl', 'grd', 'rv',  'glur', 'rv',   'gudl', 'gud',  'gurd', 'rv',    'gr'],
                        ['gl',  'rdl', 'rh',  'rh',  'rrd', 'gurdl','rdl', 'rh',  'rh',  'rrd', 'gldr', 'rdl',  'rh',   'rh',   'rh',   'rrd',   'gr'],
                        ['gdl', 'gd',  'gd',  'gd',  'gd',  'gd',   'gd',  'gd',  'gd',  'gd',  'gd',   'gd',   'gd',   'gd',   'gd',   'gd',    'grd']
                    ],
                spawnAt: {
                    player: {x: 9, y: 6, direction: 'up'},
                    enemies: [{x: 1, y: 1, direction: 'right'},
                              {x: 15, y: 10, direction: 'up'}]
                }
            }
        ];
});
