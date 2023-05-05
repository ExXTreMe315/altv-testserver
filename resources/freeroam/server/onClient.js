/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';
import * as data from '../data.js';
import { banList } from './server';

let serverInRestart = false

alt.onClient('checkPlayerStatusLocal', (player, targetPlayer) => {
    alt.emitClient(player, 'recivePlayerStatusLocal', ({player: targetPlayer, godmode: targetPlayer.invincible, invisible: !targetPlayer.visible}))
})

alt.onClient('checkPlayerStatusOnline', (player) => {
    alt.Player.all.forEach(onlinePlayer => {
        alt.emitClient(player, 'recivePlayerStatusOnline', ({player: onlinePlayer, godmode: onlinePlayer.invincible, invisible: !onlinePlayer.visible}))
    })
})

alt.onClient('requestBanList', (player) => {
    alt.emitClient(player, 'sendBanList', (banList))

})

alt.onClient('healPlayer', (player) => {
    player.health = 200;
})

alt.onClient('killPlayer', (player) => {
    player.health = 0;
})

alt.onClient('godmodePlayer', (player) => {
    player.invincible = !player.invincible
    alt.emitClient(player, 'recivePlayerStatusLocal', ({player: player, godmode: player.invincible, invisible: !player.visible}))
})

alt.onClient('invisiblePlayer', (player) => {
    player.visible = !player.visible        
    alt.emitClient(player, 'recivePlayerStatusLocal', ({player: player, godmode: player.invincible, invisible: !player.visible}))
})

alt.onClient("NoClip:PlayerVisible", (player, bool) => {
    player.visible = !bool;
});

alt.onClient('healPlayerById', (player, id) => {
    alt.Player.all.forEach(player => {
        if (player.id == id) {
            player.health = 200
        }
    })
});

alt.onClient('killPlayerById', (player, id) => {
    alt.Player.all.forEach(player => {
        if (player.id == id) {
            player.health = 0;
        }
    })
});

alt.onClient('GodmodePlayerById', (player, id) => {
    alt.Player.all.forEach(player => {
        if (player.id == id) {
            player.invincible = !player.invincible
        }
    })
});

alt.onClient('InvisiblePlayerById', (player, id) => {
    alt.Player.all.forEach(player => {
        if (player.id == id) {
            player.visible = !player.visible
        }
    })
});

alt.onClient('tpToId', (player, id) => {
    alt.Player.all.forEach(currPlayer => {
        if (currPlayer.id == id) {
            player.pos = { x: currPlayer.pos.x, y: currPlayer.pos.y, z: currPlayer.pos.z };
        }
    })
});

alt.onClient('tpIdToMe', (player, id) => {
    alt.Player.all.forEach(currPlayer => {
        if (currPlayer.id == id) {
            currPlayer.pos = { x: player.pos.x, y: player.pos.y, z: player.pos.z };
        }
    })
});

alt.onClient('kickPlayerById', (player, id) => {
    alt.Player.all.forEach(currPlayer => {
        if (currPlayer.id == id) {
            currPlayer.kick(`You where kicked by ${player.name}! Reason:`)
            alt.emitClient(player, 'drawNotification', 'CHAR_LESTER', 'Kicked', currPlayer.name, `You have kicked ${currPlayer.name} from the Server`);
        }
    })
});

alt.onClient('banPlayerById', (player, id) => {
    alt.Player.all.forEach(currPlayer => {
        if (currPlayer.id == id) {
            currPlayer.kick(`You where banned by ${player.name}! Reason:`)
            alt.emit('addPlayerBan', currPlayer.socialID)
            alt.emitClient(player, 'drawNotification', 'CHAR_LESTER', 'Error', `No reights`, `You are not strong enough. Go to the Gym!`);
        }
    })
});

alt.onClient('giveAllWeapons', (player) => {
    for (let weapon of data.weapons) {
        player.giveWeapon(alt.hash("weapon_" + weapon), 99999, true);
    }
});

alt.onClient('removeAllWeapons', (player) => {
    player.removeAllWeapons();
})

alt.onClient('spawnveh', (player, args) => {
    try {
        player.setIntoVehicle(new alt.Vehicle(args, player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z), 1);        
    } catch (e) {
        alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Error', `Not found...`, `Vehicle Model ${args} does not exist..`);
        alt.log(e);
    }
});

alt.onClient('repairVeh', (player) => {
    if(player.vehicle) {
        player.vehicle.repair();
    } else {
        alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Error', `No Vehicle`, `You are not in a Vehicle`);
        return;
    }
});

alt.onClient('delCurrVeh', (player) => {
    if(player.vehicle) {
        player.vehicle.destroy();
        alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Destroyed', `Vehicle destroyed`, `Your current Vehicle was destroyed`);
    } else {
        alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Error', `No Vehicle`, `You are not in a Vehicle`);
    } 
});

alt.onClient('destroyAllVehs', (player) => {
    alt.Vehicle.all.forEach(veh => {
        veh.destroy()
    })
    alt.emitAllClients('drawNotification', 'CHAR_COMIC_STORE', player.name, `Destroyed all Vehicles`, `${player.name} destroyed all Vehicles on the server`);
})


alt.onClient('setTime', (player, hh, mm, ss) => {
    alt.emitAllClients('setTime', hh, mm, ss);
});

alt.onClient('setWeather', (player, weatherIndex) => {
    alt.emit('updateWeather', weatherIndex)
})

alt.onClient('announce', (player, msg) => {
    alt.emitAllClients('drawNotification', 'CHAR_COMIC_STORE', 'Admin Message', `Info by ${player.name}`, msg);
})

alt.onClient('log', (player, msg) => {
    alt.log(`Log by ${player.name}: ${msg}`)
})

alt.onClient('setServerPw', (player, newPassword) => {
    alt.log(`${player.name} set the server password to: '${newPassword}'`)
    alt.setPassword(newPassword)
})

alt.onClient('stopServer', (player, timeAndReason) => {
    if(serverInRestart == true){
        alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Error', `Server Restart`, `der Server wurde bereits angewiesen neu zu starten`);
        return
    }
    serverInRestart = true
    let timeMin = timeAndReason.split(" ")[0];
    let timeMs = timeMin*1000*60;
    let reason = timeAndReason.slice(timeMin.length+1);
    let reminderTime = timeMin
    
    if(reason.length == 0) reason = 'No Reason'
    
    alt.emitAllClients('drawNotification', 'CHAR_COMIC_STORE', 'Server Restart', `Restart in ${timeMin}`, reason);

    alt.setInterval(() => {
        reminderTime -= 5
        alt.emitAllClients('drawNotification', 'CHAR_COMIC_STORE', 'Server Restart', `Restart in ${reminderTime} Minuten!`, reason);
    }, 300000);

    alt.log(`${player.name} hat den Server angewiesen in ${timeMin} minuten neu zu starten, mit der Begründung: '${reason}`)
    alt.setTimeout(() => {
        alt.stopServer()
    }, timeMs);

    alt.on('beforePlayerConnect', (connectionInfo) => {
        return `Server is restarting! Please try again later`; 
    });
})

alt.onClient('logPos', (player, pos) => {
    alt.log(`Pos data of ${player.name}: ${pos}`)
    alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Position', ``, `X:${pos.x} Y:${pos.y} Z:${pos.z}`);
})

alt.onClient('logRot', (player, rot) => {
    alt.log(`Rot data of ${player.name}: ${rot}`)
    alt.emitClient(player, 'drawNotification', 'CHAR_COMIC_STORE', 'Rotation', ``, `X:${rot.x} Y:${rot.y} Z:${rot.z}`);
})

alt.onClient('setSkin', (player, arg) => {
    player.model = arg
})

alt.onClient('tpPos', (player, arg) => {
    let x = arg.split(" ")[0]
    let y = arg.split(" ")[1]
    let z = arg.split(" ")[2]

    player.pos = { x: x, y: y, z: z };
})

alt.onClient('setDlcCloth', (player, component, drawble, texture) => {
    alt.log(typeof component, component);
    alt.log(typeof drawble, drawble);
    alt.log(typeof texture, texture);
    player.setDlcClothes(alt.hash('mp_m_eup'), component, drawble, texture)
})

alt.onClient('setDlcCloth2', (player, dlc, component, drawble, texture) => {
    alt.log(typeof component, component);
    alt.log(typeof drawble, drawble);
    alt.log(typeof texture, texture);
    player.setDlcClothes(dlc, component, drawble, texture)
})

alt.onClient('setDlcProp', (player, dlc, component, drawble, texture) => {
    alt.log(typeof component, component);
    alt.log(typeof drawble, drawble);
    alt.log(typeof texture, texture);
    player.setDlcProp(dlc, component, drawble, texture)
})

alt.onClient('setNumberPlateText', (player, vehicle, text) => {
    vehicle.numberPlateText = text
})