game.module(
    'game.objects.level'
)
.body(function() {
    
    Level =
        [
            {
                name: "Level 1 - Welcome to Carnage X",
                timeLimit: 60, // seconds
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
                    enemies: [{x: 1 , y: 10, direction: 'up'},
                              {x: 15, y: 1 , direction: 'down'},
                              {x: 1 , y: 1 , direction: 'right'},
                              {x: 15, y: 10, direction: 'left'}]
                }
            },
            {
                name: "Level 2 - Tower complex",
                timeLimit: 90, // seconds
                data:
                    [
                         ["gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ]
                        ,["gE" ,"rul" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rur" ,"gW" ]
                        ,["gE" ,"rv" ,"gHW" ,"gH" ,"gHE" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"gHW" ,"gH" ,"gHE" ,"rv" ,"gW" ]
                        ,["gE" ,"rtr" ,"rh" ,"rh" ,"rur" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rul" ,"rh" ,"rh" ,"rtl" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rrd" ,"gW" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"gSWc" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSEc" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"gNWc" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNEc" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"gE" ,"rul" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rur" ,"gW" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rtr" ,"rh" ,"rh" ,"rrd" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rtl" ,"gW" ]
                        ,["gE" ,"rv" ,"gHW" ,"gH" ,"gHE" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"gHW" ,"gH" ,"gHE" ,"rv" ,"gW" ]
                        ,["gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ]
                        ,["gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ]
                    ],
                spawnAt: {
                    player: {x: 11, y: 8, direction: 'left'},
                    enemies: [{x: 7 , y: 5 , direction: 'left'},
                              {x: 16, y: 5 , direction: 'right'},
                              {x: 7 , y: 11, direction: 'left'},
                              {x: 16, y: 11, direction: 'right'},
                              {x: 16, y: 8 , direction: 'down'},
                             ]
                }
                
            },
            {
                name: "Level 3 - Military base",
                timeLimit: 120, // seconds
                data:
                    [
                         ["gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ]
                        ,["gE" ,"rul" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rh" ,"rur" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rh" ,"rc" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rtu" ,"rh" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ]
                        ,["gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ]
                    ],
                spawnAt: {
                    player:   {x: 11, y: 13, direction: 'left'},
                    enemies: [{x: 1,  y: 1 , direction: 'right'},
                              {x: 22, y: 1 , direction: 'down'},
                              {x: 22, y: 25, direction: 'left'},
                              {x: 1,  y: 25, direction: 'up'},
                              {x: 6,  y: 13, direction: 'down'},
                              {x: 17, y: 13, direction: 'down'}]
                }
            },
            {
                name: "Level 4 - Dungeon Crawling",
                timeLimit: 60, // seconds
                data:
                    [
                         ["w" ,"w" ,"w" ,"w" ,"gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ,"w" ,"w" ,"w" ,"gNWc" ,"gN" ,"gN" ,"gN" ,"gNEc" ,"w" ,"w" ,"w" ,"gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ,"w" ,"w" ,"w" ,"w" ]
                        ,["w" ,"w" ,"w" ,"w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rul" ,"rh" ,"rur" ,"gW" ,"w" ,"w" ,"w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ,"w" ,"w" ,"w" ]
                        ,["w" ,"gNWc" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gVN" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gN" ,"gNEc" ,"w" ]
                        ,["w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rtl" ,"gW" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rtl" ,"gV" ,"rtr" ,"rh" ,"rh" ,"rtd" ,"rh" ,"rh" ,"rtl" ,"gW" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ]
                        ,["w" ,"gE" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gVS" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gNE" ,"gNW" ,"rv" ,"gSE" ,"gSW" ,"rv" ,"gW" ,"w" ]
                        ,["w" ,"gE" ,"rv" ,"gW" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rrd" ,"gW" ,"gE" ,"rv" ,"gW" ,"gE" ,"rdl" ,"rh" ,"rrd" ,"gW" ,"gE" ,"rv" ,"gW" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rrd" ,"gW" ,"gE" ,"rv" ,"gW" ,"w" ]
                        ,["gNWc" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"gBX" ,"gSE" ,"gS" ,"gSW" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"gSE" ,"gS" ,"gSW" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNW" ,"gSE" ,"gS" ,"gSW" ,"gBX" ,"gNE" ,"gNW" ,"rv" ,"gNE" ,"gNEc" ]
                        ,["gE" ,"rul" ,"rtu" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rtu" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rtu" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rtu" ,"rur" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gW" ,"w" ,"gE" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rdl" ,"rh" ,"rtd" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rtd" ,"rh" ,"rrd" ,"gW" ]
                        ,["gSWc" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gSW" ,"rv" ,"gSE" ,"gS" ,"gSEc" ]
                        ,["gNWc" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNEc" ,"w" ,"gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ,"w" ,"gNWc" ,"gN" ,"gN" ,"gN" ,"gN" ,"gN" ,"gNEc" ,"w" ,"gNWc" ,"gN" ,"gNW" ,"rv" ,"gNE" ,"gN" ,"gNEc" ]
                        ,["gE" ,"rul" ,"rh" ,"rtu" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rh" ,"rh" ,"rur" ,"gW" ,"w" ,"gE" ,"rul" ,"rh" ,"rtu" ,"rh" ,"rur" ,"gW" ]
                        ,["gE" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gW" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"gE" ,"rtr" ,"rh" ,"rh" ,"rh" ,"rtl" ,"gW" ,"w" ,"gE" ,"rv" ,"gW" ]
                        ,["gE" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gSE" ,"gS" ,"gSW" ,"rv" ,"gNE" ,"gN" ,"gNW" ,"rv" ,"gW" ]
                        ,["gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ,"w" ,"gE" ,"rdl" ,"rh" ,"rh" ,"rh" ,"rrd" ,"gW" ]
                        ,["gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ,"w" ,"gSWc" ,"gS" ,"gS" ,"gS" ,"gS" ,"gS" ,"gSEc" ]
                    ],
                spawnAt: {
                    player:   {x: 15, y: 16, direction: 'left'},
                    enemies: [{x: 1,  y: 18, direction: 'up'},
                              {x: 29, y: 18, direction: 'up'},
                              {x: 5, y: 1 , direction: 'right'},
                              {x: 25, y: 1, direction: 'left'},
                              {x: 13, y: 7, direction: 'down'},
                              {x: 17, y: 7, direction: 'down'}]
                }
            }
        ];
});
