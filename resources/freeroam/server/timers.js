/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';

//1 Minute
alt.setInterval(() => {
    alt.emit('updateWorldData');
    let onlinePlayers = alt.Player.all

    //log playercount
    let playercount = 0
    onlinePlayers.forEach(player => {
        playercount++        
    });
    alt.log(`Server is running with ${playercount} players`);

    //check ping
    onlinePlayers.forEach(player => {
        if (player.ping >= 200) {
            player.kick('Ping too high (200)');
        }       
    });
}, 60000);

//10 Minuten
alt.setInterval(() => {
    alt.log(`Der Server läuft seid: ${Math.floor(alt.getNetTime()/1000/60)} Minuten`)
}, 600000);