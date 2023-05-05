/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';
import * as mysql from 'mysql';
import * as onClient from './onClient.js';
import * as timers from './timers.js';
import * as metaTest from "./metaTest.js";

console.log(" ==================================================================================================================== ");
console.log(" EEEEEEEEEEEE  XXX       XXX  XXX       XXX  TTTTTTTTTTTTTTT  RRRRRRRRRR    EEEEEEEEEEEE  MMMM     MMMM  EEEEEEEEEEEE ");
console.log(" EEEEEEEEEEEE   XXX     XXX    XXX     XXX   TTTTTTTTTTTTTTT  RRRRRRRRRRRR  EEEEEEEEEEEE  MMMMM   MMMMM  EEEEEEEEEEEE ");
console.log(" EEE             XXX   XXX      XXX   XXX          TTT        RRR      RRR  EEE           MMM MMMMM MMM  EEE          ");
console.log(" EEE              XXX XXX        XXX XXX           TTT        RRR     RRR   EEE           MMM  MMM  MMM  EEE          ");
console.log(" EEEEEEEEEEEE      XXXXX          XXXXX            TTT        RRRRRRRRRR    EEEEEEEEEEEE  MMM       MMM  EEEEEEEEEEEE ");
console.log(" EEEEEEEEEEEE      XXXXX          XXXXX            TTT        RRRRRRRRR     EEEEEEEEEEEE  MMM       MMM  EEEEEEEEEEEE ");
console.log(" EEE              XXX XXX        XXX XXX           TTT        RRRR  RRR     EEE           MMM       MMM  EEE          ");
console.log(" EEE             XXX   XXX      XXX   XXX          TTT        RRRR   RRR    EEE           MMM       MMM  EEE          ");
console.log(" EEEEEEEEEEEE   XXX     XXX    XXX     XXX         TTT        RRRR    RRR   EEEEEEEEEEEE  MMM       MMM  EEEEEEEEEEEE ");
console.log(" EEEEEEEEEEEE  XXX       XXX  XXX       XXX        TTT        RRRR     RRR  EEEEEEEEEEEE  MMM       MMM  EEEEEEEEEEEE ");
console.log(" ==================================================================================================================== ");
console.log(" ==================================================================================================================== ");
console.log("  >>>                    2222222222222       0000000000000      2222222222222      3333333333333                <<<   ");
console.log("    >>>                 22222222222222222   000000000000000   22222222222222222  33333333333333333            <<<     ");
console.log("     >>>                222         22222  000           000  222         22222  333           333           <<<      ");
console.log("      >>>                         2222     000           000            2222     333           333          <<<       ");
console.log("       >>>                      2222       000           000          2222            33333333333          <<<        ");
console.log("       >>>                    2222         000           000        2222              33333333333          <<<        ");
console.log("      >>>                   2222           000           000      2222           333           333          <<<       ");
console.log("     >>>                  2222             000           000    2222             333           333           <<<      ");
console.log("    >>>                 22222222222222222   000000000000000   22222222222222222  33333333333333333            <<<     ");
console.log("  >>>                  22222222222222222     0000000000000    22222222222222222    3333333333333                <<<   ");
console.log(" ==================================================================================================================== ");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////                All rights reserved by ExXTreMe                ////////////////////////////////////
////////////////////////////////////                         © 2022 - 2023                         ////////////////////////////////////
////////////////////////////////////                                                               ////////////////////////////////////
////////////////////////////////////            Do not copy or call it your own script.            ////////////////////////////////////
////////////////////////////////////     Unauthorized use, duplication or misuse is prohibited!    ////////////////////////////////////
////////////////////////////////////                                                               ////////////////////////////////////
////////////////////////////////////        https://discordapp.com/users/396472444388376577        ////////////////////////////////////
////////////////////////////////////                                                               ////////////////////////////////////
////////////////////////////////////                       Germany 03.03.2023                      ////////////////////////////////////
////////////////////////////////////                                                               ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("                               Freeroam Started                               ");
console.log(`                              Time: ${new Date().toLocaleTimeString()} Uhr    `);
console.log(`                               Date: ${new Date().toLocaleDateString()}       `);
console.log(" ============================================================================ ");

const BodyParts = [
    "Pelvis",
    "LeftHip",
    "LeftLeg",
    "LeftFoot",
    "RightHip",
    "RightLeg",
    "RightFoot",
    "LowerTorso",
    "UpperTorso",
    "Chest",
    "UnderNeck",
    "LeftShoulder",
    "LeftUpperArm",
    "LeftElbrow",
    "LeftWrist",
    "RightShoulder",
    "RightUpperArm",
    "RightElbrow",
    "RightWrist",
    "Neck",
    "Head"
];

const spawns = [
    { x:-1134.896728515625, y:-1568.980224609375, z:4.3927001953125 },
    { x:-1129.6483154296875, y:-1604.822021484375, z:4.3927001953125 },
    { x:-1105.6483154296875, y:-1601.5120849609375, z:4.6622314453125 },
    { x:-1107.3231201171875, y:-1640.861572265625, z:4.6285400390625 },
    { x:-1075.6878662109375, y:-1649.7890625, z:4.4937744140625 },
    { x:-1077.3626708984375, y:-1676.967041015625, z:4.5611572265625 }
]

let worldConditions = {
    time: {
        hour: 12,
        minute: 0,
        second: 0
    },
    weather: 0
}
export let banList = []

//=> MySQL
// =============================== Database ==================================================
/*
const db = mysql.createConnection({
	host     : '89.58.63.131',
	user     : 'Admin',
	password : 'nfEX4Y9u_p(Px@@T',
	database : 'roottest'
});
  
db.connect((err) => {
    if(err) {
        console.log("Database Connection Failed")
        throw err;
    } else {
        console.log("Database connected!")
    }
});
*/
// =============================== Ende Database =============================================

//=> Player Connect
alt.on('playerConnect', handleConnect);
alt.on('playerDeath', (victim, killer, weapon) => handleDeath(victim, killer, weapon));
alt.on('beforePlayerConnect', (connectionInfo) => {
    if(banList.includes(connectionInfo.socialID)) {  
        alt.log(`User tried to connect but is banned`);
        alt.log(`SCID: ${connectionInfo.socialID}`);
        alt.log(`HWID: ${connectionInfo.hwidHash}`);
        alt.log("====================================");
      return "You are banned from this Server"; 
    }
});
alt.on('consoleCommand', (cmd, ...args) => {
    if(cmd.charAt(0) != "/") return
    
    if(cmd == "/kick"){
        alt.Player.all.forEach(player => {
            if(player.name == args[0]) player.kick()
        });
    }

    if(cmd == "/destroyVehs"){
        alt.Vehicle.all.forEach(veh => {
            veh.destroy()
        })
    }
});

alt.onClient('playerConnectionComplete', (player, usingDc, dc_name, dc_disc, dc_id) => {
    //Spawn
    //player.model = "mp_m_freemode_01";
    //let random = Math.floor(Math.random() * spawns.length)
    //player.spawn(spawns[random].x, spawns[random].y, spawns[random].z, 100);

    //Time & Weather
    alt.emitClient(player, 'setTime', worldConditions.time.hour, worldConditions.time.minute, worldConditions.time.second);
    alt.emitClient(player, 'setWeather', worldConditions.weather);

    //Log connect
    if (usingDc) {
        alt.log(`${player.name} connected to the Server`);
        alt.log("User-Informations:");
        alt.log(`ID: ${player.id}`);
        alt.log(`DC Name: ${dc_name}#${dc_disc}`);
        alt.log(`DCID: ${dc_id}`);
        alt.log(`SCID: ${player.socialID}`);
        alt.log(`HWID: ${player.hwidHash}`);
        alt.log(`IP: ${player.ip}`);
        alt.log(`Ping: ${player.ping}`);
        alt.log("====================================");   
    } else {
        alt.log(`${player.name} connected to the Server`);
        alt.log("User-Informations:");
        alt.log(`ID: ${player.id}`);
        alt.log("Discord: disabled");
        alt.log(`SCID: ${player.socialID}`);
        alt.log(`HWID: ${player.hwidHash}`);
        alt.log(`IP: ${player.ip}`);
        alt.log(`Ping: ${player.ping}`);
        alt.log("====================================");
    }
    /*
    db.query(`SELECT * FROM userdata WHERE dcid = '${dc_id}'`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if(result.length >= 2) {
            player.kick("ERROR (Multy Discord)")
        } else if (result.length == 1) {
            player.model = result[0].ped;
            player.spawn(result[0].lastpos_x, result[0].lastpos_y, result[0].lastpos_z);
        }else if (result.length == 0) {
            var sql = `INSERT INTO userdata (username, dcid) VALUES ('${player.name}', '${dc_id}')`;
            db.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
            player.model = "mp_m_freemode_01";
            player.spawn(-6, 3, 72);            
        }
    });*/
});

/**
 * @param {alt.Player} player
 */

function handleConnect(player) {
    alt.log(`${player.name} connecting to the Server...`);
}

/*
//Every 1 Minutes
alt.setInterval(() => {
    
    let onlinePlayers = alt.Player.all

    let updatecount = 0

    onlinePlayers.forEach(player => {
        let dcid = player.discordID

        let pos_x = player.pos.x
        let pos_y = player.pos.y
        let pos_z = player.pos.z
        updatecount++

        var sql = `UPDATE userdata SET lastpos_x = '${pos_x}' WHERE dcid = '${dcid}'`;
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
        
        var sql = `UPDATE userdata SET lastpos_y = '${pos_y}' WHERE dcid = '${dcid}'`;
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
        
        var sql = `UPDATE userdata SET lastpos_z = '${pos_z}' WHERE dcid = '${dcid}'`;
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
    });

    alt.log(`updated ${updatecount} player DB enterys`);
}, 60000);*/


//=> Player Death
export const deadPlayers = {};
const TimeBetweenRespawn = 1000; // 1 Seconds

function handleDeath(player, killer, weapon) {
    if (deadPlayers[player.id]) {
        return;
    }

    deadPlayers[player.id] = alt.setTimeout(() => {
        // Check if the player still has an entry.
        if (deadPlayers[player.id]) {
            delete deadPlayers[player.id];
        }

        // Check if the player hasn't just left the server yet.
        if (!player || !player.valid) {
            return;
        }

        
        let random = Math.floor(Math.random() * spawns.length)
        player.spawn(spawns[random].x, spawns[random].y, spawns[random].z, 5000); // Respawn the player.
    }, TimeBetweenRespawn);
    if (!killer || !player) return
    alt.emitAllClients('drawNotification', 'CHAR_LESTER_DEATHWISH', 'Player Kill', `${killer.name} killed ${player.name}`, `${player.name} was killed by ${killer.name}`);
}

alt.on('updateWorldData', () => {
    alt.emitAllClients('setTime', worldConditions.time.hour, worldConditions.time.minute, worldConditions.time.second);
    alt.emitAllClients('setWeather', worldConditions.weather);
})

alt.on('updateWeather', (weatherIndex) => {
    worldConditions.weather = weatherIndex
    alt.emitAllClients('setWeather', weatherIndex);
})

alt.on('addPlayerBan', (scid) => {
    banList.push(scid)
})

alt.onClient('getVehDmg', (player, veh) => {
    alt.log(veh.getPartDamageLevel(1))
    alt.log(veh.getPartDamageLevel(2))
    alt.log(veh.getPartDamageLevel(3))
    alt.log(veh.getPartDamageLevel(4))
    alt.log(veh.getPartDamageLevel(5))
});

//=> Test
alt.on('weaponDamage', (attacker, victim, weaponHash, damage, offset, bodyPart) => {
    if (weaponHash === 0x787F0BB) {
        alt.log(victim.health);
        victim.health = victim.health-1
        alt.log(victim.health);
    }
});

alt.on('weaponDamage', (attacker, victim, weaponHash, damage, offset, bodyPart) => {
    if (weaponHash === 0x83BF0278) {
        if(bodyPart == 20){
            victim.health = victim.health-100
        } else {
            victim.health = victim.health-25

        }
    }
});

alt.on('weaponDamage', (attacker, victim, weaponHash, damage, offset, bodyPart) => {
    setTimeout(() => {
        if(victim.isDead()){
            alt.log(attacker, "killed", victim, "with", weaponHash, "and", damage, "damage", "and offset", offset, "at body part", bodyPart, BodyParts[bodyPart])
        }     
    }, 1000);
});

//=> Default Functions
/**
 * Get all players in a certain range of a position.
 * @param  {} pos
 * @param  {} range
 * @param  {} dimension=0
 * @returns {Array<alt.Player>}
 */
 export function getPlayersInRange(pos, range, dimension = 0) {
    if (pos === undefined || range === undefined) {
        throw new Error('GetPlayersInRange => pos or range is undefined');
    }

    return alt.Player.all.filter(player => {
        return player.dimension === dimension && distance2d(pos, player.pos) <= range;
    });
}

/**
 * Get the forward vector of a player.
 * @param  {} rot
 * @returns {{x,y,z}}
 */
export function getForwardVectorServer(rot) {
    const z = -rot.z;
    const x = rot.x;
    const num = Math.abs(Math.cos(x));
    return {
        x: -Math.sin(z) * num,
        y: Math.cos(z) * num,
        z: Math.sin(x)
    };
}

/**
 * Get the distance from one vector to another.
 * Does take Z-Axis into consideration.
 * @param  {} vector1
 * @param  {} vector2
 * @returns {number}
 */
export function distance(vector1, vector2) {
    if (vector1 === undefined || vector2 === undefined) {
        throw new Error('AddVector => vector1 or vector2 is undefined');
    }

    return Math.sqrt(
        Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2) + Math.pow(vector1.z - vector2.z, 2)
    );
}

/**
 * Get the distance from one vector to another.
 * Does not take Z-Axis into consideration.
 * @param  {} vector1
 * @param  {} vector2
 * @returns {{x,y,z}}
 */
export function distance2d(vector1, vector2) {
    if (vector1 === undefined || vector2 === undefined) {
        throw new Error('AddVector => vector1 or vector2 is undefined');
    }

    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}

/**
 * Check if a position is between two vectors.
 * @param  {} pos
 * @param  {} vector1
 * @param  {} vector2
 * @returns {boolean}
 */
export function isBetween(pos, vector1, vector2) {
    const validX = pos.x > vector1.x && pos.x < vector2.x;
    const validY = pos.y > vector1.y && pos.y < vector2.y;
    return validX && validY ? true : false;
}

/**
 * Get a random position around a position.
 * @param  {} position
 * @param  {} range
 * @returns {{x,y,z}}
 */
export function randomPositionAround(position, range) {
    return {
        x: position.x + Math.random() * (range * 2) - range,
        y: position.y + Math.random() * (range * 2) - range,
        z: position.z
    };
}

/**
 * Get the closest vector from a group of vectors.
 * @param  {alt.Vector3} pos
 * @param  {Array<{x,y,z}> | Array<{pos:alt.Vector3}} arrayOfPositions
 * @returns {Array<any>}
 */
export function getClosestVectorFromGroup(pos, arrayOfPositions) {
    arrayOfPositions.sort((a, b) => {
        if (a.pos && b.pos) {
            return distance(pos, a.pos) - distance(pos, b.pos);
        }

        return distance(pos, a.pos) - distance(pos, b.pos);
    });

    return arrayOfPositions[0];
}

/**
 * Get the closest player to a player.
 * @param  {} player
 * @returns {Array<alt.Player>}
 */
export function getClosestPlayer(player) {
    return getClosestVectorFromGroup(player.pos, [...alt.Player.all]);
}

/**
 * Get the closest vehicle to a player.
 * @param  {alt.Vector3} player
 * @returns {Array<alt.Vehicle>}
 */
export function getClosestVehicle(player) {
    return getClosestVectorFromGroup(player.pos, [...alt.Vehicle.all]);
}