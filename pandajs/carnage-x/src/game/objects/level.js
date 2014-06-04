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
                        ['gNWc', 'gN',  'gN',  'gN',   'gN',  'gN',   'gN',  'gN',   'gN',  'gN',  'gN',  'gN',  'gN',  'gN',   'gN',   'gN',   'gNEc'],
                        ['gE',   'rul', 'rh',  'rh',   'rur', 'gBX',  'rul', 'rh',   'rh',  'rtd', 'rh',  'rh',  'rtd', 'rh',   'rh',   'rur',  'gW'],
                        ['gE',   'rv',  'gSE', 'gSW',  'rdl', 'rtd',  'rrd', 'gSE',  'gSW', 'rv',  'gHW', 'gHE', 'rv',  'gSE',  'gSW',  'rv',   'gW'],
                        ['gE',   'rv',  'gW',  'gSWc', 'gSW', 'rv',   'gSE', 'gSEc', 'gE',  'rdl', 'rh',  'rtd', 'rrd', 'gW',   'gE',   'rv',   'gW'],
                        ['gE',   'rv',  'gW',  'w',    'gE',  'rv',   'gNE', 'gN',   'gNW', 'rul', 'rh',  'rtl', 'gSE', 'gSEc', 'gE',   'rv',   'gW'],
                        ['gE',   'rv',  'gNE', 'gN',   'gNW', 'rtr',  'rh',  'rh',   'rh',  'rtl', 'gVN', 'rv',  'gNE', 'gN',   'gNW',  'rv',   'gW'],
                        ['gE',   'rtr', 'rh',  'rh',   'rh',  'rtl',  'gSE', 'gS',   'gSW', 'rv',  'gV',  'rtr', 'rh',  'rh',   'rtd',  'rrd',  'gW'],
                        ['gE',   'rv',  'gSE', 'gS',   'gSW', 'rv',   'gNE', 'gNEc', 'gE',  'rv',  'gVS', 'rv',  'gHW', 'gHE',  'rv',   'gBX',  'gW'],
                        ['gE',   'rv',  'gW',  'gNWc', 'gNW', 'rtr',  'rur', 'gW',   'gE',  'rtr', 'rh',  'rc',  'rh',  'rh',   'rtu',  'rur',  'gW'],
                        ['gE',   'rv',  'gNE', 'gNW', 'rul',  'rrd',  'rv',  'gNE',  'gNW', 'rv',  'gVN', 'rv',  'gHW', 'gH',   'gHE',  'rv',   'gW'],
                        ['gE',   'rdl', 'rh',  'rh',  'rrd',  'gBX',  'rdl', 'rh',   'rh',  'rrd', 'gVS', 'rdl', 'rh',  'rh',   'rh',   'rrd',  'gW'],
                        ['gSWc', 'gS',  'gS',  'gS',  'gS',   'gS',   'gS',  'gS',   'gS',  'gS',  'gS',  'gS',  'gS',  'gS',   'gS',   'gS',   'gSEc']
                    ],
                spawnAt: {
                    player: {x: 9, y: 10, direction: 'up'},
                    enemies: [{x: 1, y: 10, direction: 'up'},
                              {x: 15, y: 1, direction: 'down'}]
                }
            }
        ];
});
