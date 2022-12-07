import * as alt from "alt-server";

export function createVehicle(player, vehicleModel) {
    let vehicle;

    try {
        vehicle = new alt.Vehicle(vehicleModel, -224.436, -1338.367, 30.400, 0, 0, 0);
    } catch (err) {
        console.error(`${vehicleModel} does not exist.`);
        throw err;
    }

    if (!vehicle) {
        console.error(`${vehicleModel} does not exist.`);
        return;
    }

    console.log('Spawned a vehicle');
    return vehicle;
}
//Needy
alt.onClient('spawn:dynasty', player => {
    let vehicle = new alt.Vehicle("dynasty", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:bodhi' , player => {
    let vehicle = new alt.Vehicle("bodhi2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:rustyRebell', player => {
    let vehicle = new alt.Vehicle("rebel", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:warrener', player => {
    let vehicle = new alt.Vehicle("warrener", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:blista', player => {
    let vehicle = new alt.Vehicle("blista", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:intruder', player => {
    let vehicle = new alt.Vehicle("intruder", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//Mosleys
alt.onClient('spawn:peyote', player => {
    let vehicle = new alt.Vehicle("peyote", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:buccaneer', player => {
    let vehicle = new alt.Vehicle("buccaneer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:buffalo', player => {
    let vehicle = new alt.Vehicle("buffalo", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:dukes', player => {
    let vehicle = new alt.Vehicle("dukes", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:virgo', player => {
    let vehicle = new alt.Vehicle("virgo", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:voodoo', player => {
    let vehicle = new alt.Vehicle("voodoo", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:schwarzer', player => {
    let vehicle = new alt.Vehicle("schwarzer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:sabreTurbo', player => {
    let vehicle = new alt.Vehicle("sabregt2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:prairie', player => {
    let vehicle = new alt.Vehicle("prairie", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

alt.onClient('spawn:jackal', player => {
    let vehicle = new alt.Vehicle("jackal", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//PDM
alt.onClient('spawn:cyclone', player => {
    let vehicle = new alt.Vehicle("cyclone", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:vstr', player => {
    let vehicle = new alt.Vehicle("vstr", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:neo', player => {
    let vehicle = new alt.Vehicle("neo", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:schafter', player => {
    let vehicle = new alt.Vehicle("schafter2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:zion', player => {
    let vehicle = new alt.Vehicle("zion", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:komoda', player => {
    let vehicle = new alt.Vehicle("komoda", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:revolter', player => {
    let vehicle = new alt.Vehicle("revolter", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:sultanRs', player => {
    let vehicle = new alt.Vehicle("sultanRs", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:exemplar', player => {
    let vehicle = new alt.Vehicle("exemplar", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:jugular', player => {
    let vehicle = new alt.Vehicle("jugular", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//Galaxy
alt.onClient('spawn:entityXxr', player => {
    let vehicle = new alt.Vehicle("entity2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:thrax', player => {
    let vehicle = new alt.Vehicle("thrax", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:t20', player => {
    let vehicle = new alt.Vehicle("t20", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:autarch', player => {
    let vehicle = new alt.Vehicle("autarch", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:tyrant', player => {
    let vehicle = new alt.Vehicle("tyrant", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:krieger', player => {
    let vehicle = new alt.Vehicle("krieger", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:vacca', player => {
    let vehicle = new alt.Vehicle("vacca", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:zentorno', player => {
    let vehicle = new alt.Vehicle("zentorno", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//Jims
alt.onClient('spawn:surfer', player => {
    let vehicle = new alt.Vehicle("surfer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:burrito', player => {
    let vehicle = new alt.Vehicle("burrito", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:speedo', player => {
    let vehicle = new alt.Vehicle("speedo", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:tanker', player => {
    let vehicle = new alt.Vehicle("tanker", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:docktrailer', player => {
    let vehicle = new alt.Vehicle("docktrailer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:packer', player => {
    let vehicle = new alt.Vehicle("packer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:phantom', player => {
    let vehicle = new alt.Vehicle("phantom", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:mule', player => {
    let vehicle = new alt.Vehicle("mule", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:benson', player => {
    let vehicle = new alt.Vehicle("benson", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:pounder', player => {
    let vehicle = new alt.Vehicle("pounder", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//Larrys
alt.onClient('spawn:dubsta2', player => {
    let vehicle = new alt.Vehicle("dubsta2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:sandkingXl', player => {
    let vehicle = new alt.Vehicle("sandking", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:huntleyS', player => {
    let vehicle = new alt.Vehicle("huntley", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:novak', player => {
    let vehicle = new alt.Vehicle("novak", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:caracara', player => {
    let vehicle = new alt.Vehicle("caracara2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:xls', player => {
    let vehicle = new alt.Vehicle("xls", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:fq', player => {
    let vehicle = new alt.Vehicle("fq2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:ballerLeLwb', player => {
    let vehicle = new alt.Vehicle("baller4", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:guardian', player => {
    let vehicle = new alt.Vehicle("guardian", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:reblaGts', player => {
    let vehicle = new alt.Vehicle("rebla", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});

//Sanders
alt.onClient('spawn:ratBike', player => {
    let vehicle = new alt.Vehicle("ratBike", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:daemon', player => {
    let vehicle = new alt.Vehicle("daemon", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:blazer', player => {
    let vehicle = new alt.Vehicle("blazer", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:bagger', player => {
    let vehicle = new alt.Vehicle("bagger", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:zombie', player => {
    let vehicle = new alt.Vehicle("zombieb", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:cliffhanger', player => {
    let vehicle = new alt.Vehicle("cliffhanger", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:bf', player => {
    let vehicle = new alt.Vehicle("bf400", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:bati', player => {
    let vehicle = new alt.Vehicle("bati", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:avarus', player => {
    let vehicle = new alt.Vehicle("avarus", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});
alt.onClient('spawn:hakuchouDrag', player => {
    let vehicle = new alt.Vehicle("hakuchou2", player.pos.x+2, player.pos.y+2, player.pos.z+2, 0, 0, 0);
});