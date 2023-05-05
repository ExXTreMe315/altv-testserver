/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';

alt.on('keyup', key => {
    if(key != 112) return
    spawnLogo()
})


alt.on('streamSyncedMetaChange', (entity, key, value, oldValue) => {

})

async function spawnLogo() {
    const modelHash = alt.hash("v_ind_cfcovercrate");
    await alt.Utils.requestModel(modelHash);
    let obj = native.createObject(modelHash, 1, 1, 70, false, false, false);
    alt.log(obj)
}