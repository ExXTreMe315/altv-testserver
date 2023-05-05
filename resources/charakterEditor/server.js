/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';

alt.log("============================================================================");
alt.log("                         ExXTreMe Character Editor                          ");
alt.log("                © 2023 - ExXTreMe - All Rights Reserved.                    ");
alt.log("============================================================================");

//=> On ALt
alt.onClient('playerConnectionComplete', (player) => {
    alt.emitClient(player, 'checkExistingCharakter')
});
//=> On Client
alt.onClient('setGender', (player, gender) => setGender(player, gender))
alt.onClient('createNewChar', (player) => {
    player.spawn(402.8703308105469, -996.5142822265625, -100.0146484375, 100);
    alt.setTimeout(() => {
        player.rot = { x: 0, y: 0, z: 3.0 }
        alt.emitClient(player, 'openEditor');
    }, 150);
});

alt.onClient('createExistingChar', (player, gender) => {
    player.spawn(0, 0, 71, 100);
    switch(gender){
        case 0:
            player.model = 'mp_m_freemode_01'
            break;
        case 1:
            player.model = 'mp_f_freemode_01'
            break;
    }
    alt.emitClient(player, 'loadChar')
});

alt.onClient('charCreated', (player) => {
    alt.setTimeout(() => {
        player.pos = {x:0, y:0, z:71}
        alt.emitClient(player, 'switchIn')
    }, 2500);
})

//=>Functions

function setGender(player, gender) {
    if(gender == 0) {
        player.model = "mp_m_freemode_01"
        player.setClothes(3, 15, 0) //Torso
        player.setClothes(4, 61, 0) //Legs
        player.setClothes(6, 34, 0) //Shoes
        player.setClothes(8, 15, 0) //Undershirt
        player.setClothes(11, 15, 0) //Top
    }
    if(gender == 1) {
        player.model = "mp_f_freemode_01"
        player.setClothes(3, 15, 0) //Torso
        player.setClothes(4, 15, 0) //Legs
        player.setClothes(6, 35, 0) //Shoes
        player.setClothes(8, 15, 0) //Undershirt
        player.setClothes(11, 18, 0) //Top
    }
    return
}

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