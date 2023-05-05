/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';

export function createPedInMenu() {
    const menuHash = native.getHashKey('FE_MENU_VERSION_EMPTY_NO_BACKGROUND');
    native.setFrontendActive(true);
    native.activateFrontendMenu(menuHash, false, -1);
    

    let cloned = native.createPed(native.getPedType(alt.Player.local), alt.Player.local.model, -5000, 10000, -50, 0, false, false)
    alt.setTimeout(() => {
        native.setMouseCursorVisible(false)
        native.clonePedToTarget(alt.Player.local, cloned);
        native.givePedToPauseMenu(cloned, 1);
        native.setPauseMenuPedLighting(true);
        native.setPauseMenuPedSleepState(true);
    }, 100);
    
    alt.on('keydown', (key) => {
        if (key == 27) {
            native.setFrontendActive(false);
            native.deletePed(cloned);
        }
    })
}