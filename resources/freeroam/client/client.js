/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';
import * as amenu from "./amenu.js";
import * as clothMenu from "./clothMenu.js";
import * as noClip from "./noClip.js";
import * as speedometer from "./speedometer.js";
import * as charViewer from "./charViewer.js";
import * as metaTest from "./metaTest.js";

alt.setWeatherSyncActive(true);

alt.onServer('warp', (player, vehicle, seat) => {
    native.taskWarpPedIntoVehicle(player, vehicle, seat);
});

alt.onServer('log:pos', (pos) => {
    console.log(pos.x, pos.y, pos.z);
});

alt.onServer('setTime', (hh, mm, ss) => {
    native.setClockTime(JSON.parse(hh),JSON.parse(mm),JSON.parse(ss))
});

alt.onServer('pausetime', () => {
    if (native.pauseClock()){
        native.pauseClock(false);
    }
    if (!native.pauseClock()){
        native.pauseClock(true);
    }
});

alt.onServer('loadipl', (ipl) => {
    alt.requestIpl(ipl);
});

alt.onServer('warp', (player, vehicle, seat) => {
    native.taskWarpPedIntoVehicle(player, vehicle, seat);
});

alt.onServer('drawNotification', (imageName, headerMsg, detailsMsg, message) =>{
    drawNotification(imageName, headerMsg, detailsMsg, message);
});

alt.onServer('changeExtraTrue', (player, index) =>{
    
    native.setVehicleExtra(player.vehicle, 1, true)
    native.setVehicleExtra(player.vehicle, 2, true)
    native.setVehicleExtra(player.vehicle, 3, true)
    native.setVehicleExtra(player.vehicle, 10, true)
    native.setVehicleExtra(player.vehicle, 11, true)
    native.setVehicleExtra(player.vehicle, 12, true)
});

alt.onServer('changeExtraFalse', (player, index) =>{
    
    native.setVehicleExtra(player.vehicle, 1, false)
    native.setVehicleExtra(player.vehicle, 2, false)
    native.setVehicleExtra(player.vehicle, 3, false)
    native.setVehicleExtra(player.vehicle, 10, false)
    native.setVehicleExtra(player.vehicle, 11, false)
    native.setVehicleExtra(player.vehicle, 12, false)
});

alt.onServer('setWeather', (weatherIndex) => {
    alt.setWeatherCycle([weatherIndex], [1]);
})

export function drawNotification(imageName, headerMsg, detailsMsg, message) {
    native.beginTextCommandThefeedPost('STRING');
    native.addTextComponentSubstringPlayerName(message);
    native.endTextCommandThefeedPostMessagetextTu(
        imageName.toUpperCase(),
        imageName.toUpperCase(),
        false,
        4,
        headerMsg,
        detailsMsg,
        1.0,
        ''
    );
    native.endTextCommandThefeedPostTicker(false, false);
}

alt.on('connectionComplete', (player) => {
    if (alt.Discord.currentUser) {
        let dc_user =  alt.Discord.currentUser;
        alt.emitServer('playerConnectionComplete', true, dc_user.name, dc_user.discriminator, dc_user.id);        
    }else{
        alt.emitServer('playerConnectionComplete', false);
    }
    //alt.log(alt.Discord.requestOAuth2Token("996866494308810762"))
});

//Load Cayo
alt.on('connectionComplete', (player) => {
    let blip = native.addBlipForCoord(5943.5679611650485, -6272.114833599767, 2); // a invisible blip to make the map clickable at the island
    native.setBlipSprite(blip, 407);
    native.setBlipScale(blip, 0);
    native.setBlipAsShortRange(blip, false);

    alt.requestIpl('h4_islandairstrip');
    alt.requestIpl('h4_islandairstrip_props');
    alt.requestIpl('h4_islandx_mansion');
    alt.requestIpl('h4_islandx_mansion_props');
    alt.requestIpl('h4_islandx_props');
    alt.requestIpl('h4_islandxdock');
    alt.requestIpl('h4_islandxdock_props');
    alt.requestIpl('h4_islandxdock_props_2');
    alt.requestIpl('h4_islandxtower');
    alt.requestIpl('h4_islandx_maindock');
    alt.requestIpl('h4_islandx_maindock_props');
    alt.requestIpl('h4_islandx_maindock_props_2');
    alt.requestIpl('h4_IslandX_Mansion_Vault');
    alt.requestIpl('h4_islandairstrip_propsb');
    alt.requestIpl('h4_beach');
    alt.requestIpl('h4_beach_props');
    alt.requestIpl('h4_beach_bar_props');
    alt.requestIpl('h4_islandx_barrack_props');
    alt.requestIpl('h4_islandx_checkpoint');
    alt.requestIpl('h4_islandx_checkpoint_props');
    alt.requestIpl('h4_islandx_Mansion_Office');
    alt.requestIpl('h4_islandx_Mansion_LockUp_01');
    alt.requestIpl('h4_islandx_Mansion_LockUp_02');
    alt.requestIpl('h4_islandx_Mansion_LockUp_03');
    alt.requestIpl('h4_islandairstrip_hangar_props');
    alt.requestIpl('h4_IslandX_Mansion_B');
    alt.requestIpl('h4_islandairstrip_doorsclosed');
    alt.requestIpl('h4_Underwater_Gate_Closed');
    alt.requestIpl('h4_mansion_gate_closed');
    alt.requestIpl('h4_aa_guns');
    alt.requestIpl('h4_IslandX_Mansion_GuardFence');
    alt.requestIpl('h4_IslandX_Mansion_Entrance_Fence');
    alt.requestIpl('h4_IslandX_Mansion_B_Side_Fence');
    alt.requestIpl('h4_IslandX_Mansion_Lights');
    alt.requestIpl('h4_islandxcanal_props');
    alt.requestIpl('h4_beach_props_party');
    alt.requestIpl('h4_islandX_Terrain_props_06_a');
    alt.requestIpl('h4_islandX_Terrain_props_06_b');
    alt.requestIpl('h4_islandX_Terrain_props_06_c');
    alt.requestIpl('h4_islandX_Terrain_props_05_a');
    alt.requestIpl('h4_islandX_Terrain_props_05_b');
    alt.requestIpl('h4_islandX_Terrain_props_05_c');
    alt.requestIpl('h4_islandX_Terrain_props_05_d');
    alt.requestIpl('h4_islandX_Terrain_props_05_e');
    alt.requestIpl('h4_islandX_Terrain_props_05_f');
    alt.requestIpl('H4_islandx_terrain_01');
    alt.requestIpl('H4_islandx_terrain_02');
    alt.requestIpl('H4_islandx_terrain_03');
    alt.requestIpl('H4_islandx_terrain_04');
    alt.requestIpl('H4_islandx_terrain_05');
    alt.requestIpl('H4_islandx_terrain_06');
    alt.requestIpl('h4_ne_ipl_00');
    alt.requestIpl('h4_ne_ipl_01');
    alt.requestIpl('h4_ne_ipl_02');
    alt.requestIpl('h4_ne_ipl_03');
    alt.requestIpl('h4_ne_ipl_04');
    alt.requestIpl('h4_ne_ipl_05');
    alt.requestIpl('h4_ne_ipl_06');
    alt.requestIpl('h4_ne_ipl_07');
    alt.requestIpl('h4_ne_ipl_08');
    alt.requestIpl('h4_ne_ipl_09');
    alt.requestIpl('h4_nw_ipl_00');
    alt.requestIpl('h4_nw_ipl_01');
    alt.requestIpl('h4_nw_ipl_02');
    alt.requestIpl('h4_nw_ipl_03');
    alt.requestIpl('h4_nw_ipl_04');
    alt.requestIpl('h4_nw_ipl_05');
    alt.requestIpl('h4_nw_ipl_06');
    alt.requestIpl('h4_nw_ipl_07');
    alt.requestIpl('h4_nw_ipl_08');
    alt.requestIpl('h4_nw_ipl_09');
    alt.requestIpl('h4_se_ipl_00');
    alt.requestIpl('h4_se_ipl_01');
    alt.requestIpl('h4_se_ipl_02');
    alt.requestIpl('h4_se_ipl_03');
    alt.requestIpl('h4_se_ipl_04');
    alt.requestIpl('h4_se_ipl_05');
    alt.requestIpl('h4_se_ipl_06');
    alt.requestIpl('h4_se_ipl_07');
    alt.requestIpl('h4_se_ipl_08');
    alt.requestIpl('h4_se_ipl_09');
    alt.requestIpl('h4_sw_ipl_00');
    alt.requestIpl('h4_sw_ipl_01');
    alt.requestIpl('h4_sw_ipl_02');
    alt.requestIpl('h4_sw_ipl_03');
    alt.requestIpl('h4_sw_ipl_04');
    alt.requestIpl('h4_sw_ipl_05');
    alt.requestIpl('h4_sw_ipl_06');
    alt.requestIpl('h4_sw_ipl_07');
    alt.requestIpl('h4_sw_ipl_08');
    alt.requestIpl('h4_sw_ipl_09');
    alt.requestIpl('h4_islandx_mansion');
    alt.requestIpl('h4_islandxtower_veg');
    alt.requestIpl('h4_islandx_sea_mines');
    alt.requestIpl('h4_islandx');
    alt.requestIpl('h4_islandx_barrack_hatch');
    alt.requestIpl('h4_islandxdock_water_hatch');
    alt.requestIpl('h4_beach_party');
    alt.requestIpl('h4_mph4_terrain_01_grass_0');
    alt.requestIpl('h4_mph4_terrain_01_grass_1');
    alt.requestIpl('h4_mph4_terrain_02_grass_0');
    alt.requestIpl('h4_mph4_terrain_02_grass_1');
    alt.requestIpl('h4_mph4_terrain_02_grass_2');
    alt.requestIpl('h4_mph4_terrain_02_grass_3');
    alt.requestIpl('h4_mph4_terrain_04_grass_0');
    alt.requestIpl('h4_mph4_terrain_04_grass_1');
    alt.requestIpl('h4_mph4_terrain_04_grass_2');
    alt.requestIpl('h4_mph4_terrain_04_grass_3');
    alt.requestIpl('h4_mph4_terrain_05_grass_0');
    alt.requestIpl('h4_mph4_terrain_06_grass_0');
    alt.requestIpl('h4_mph4_airstrip_interior_0_airstrip_hanger');

    alt.requestIpl('ex_dt1_02_office_02b');
    alt.requestIpl('chop_props');
    alt.requestIpl('FIBlobby');
    alt.removeIpl('FIBlobbyfake');
    alt.requestIpl('FBI_colPLUG');
    alt.requestIpl('FBI_repair');
    alt.requestIpl('v_tunnel_hole');
    alt.requestIpl('TrevorsMP');
    alt.requestIpl('TrevorsTrailer');
    alt.requestIpl('TrevorsTrailerTidy');
    alt.removeIpl('farm_burnt');
    alt.removeIpl('farm_burnt_lod');
    alt.removeIpl('farm_burnt_props');
    alt.removeIpl('farmint_cap');
    alt.removeIpl('farmint_cap_lod');
    alt.requestIpl('farm');
    alt.requestIpl('farmint');
    alt.requestIpl('farm_lod');
    alt.requestIpl('farm_props');
    alt.requestIpl('facelobby');
    alt.removeIpl('CS1_02_cf_offmission');
    alt.requestIpl('CS1_02_cf_onmission1');
    alt.requestIpl('CS1_02_cf_onmission2');
    alt.requestIpl('CS1_02_cf_onmission3');
    alt.requestIpl('CS1_02_cf_onmission4');
    alt.requestIpl('v_rockclub');
    alt.requestIpl('v_janitor');
    alt.removeIpl('hei_bi_hw1_13_door');
    alt.requestIpl('bkr_bi_hw1_13_int');
    alt.requestIpl('ufo');
    alt.requestIpl('ufo_lod');
    alt.requestIpl('ufo_eye');
    alt.removeIpl('v_carshowroom');
    alt.removeIpl('shutter_open');
    alt.removeIpl('shutter_closed');
    alt.removeIpl('shr_int');
    alt.requestIpl('csr_afterMission');
    alt.requestIpl('v_carshowroom');
    alt.requestIpl('shr_int');
    alt.requestIpl('shutter_closed');
    alt.requestIpl('smboat');
    alt.requestIpl('smboat_distantlights');
    alt.requestIpl('smboat_lod');
    alt.requestIpl('smboat_lodlights');
    alt.requestIpl('cargoship');
    alt.requestIpl('railing_start');
    alt.removeIpl('sp1_10_fake_interior');
    alt.removeIpl('sp1_10_fake_interior_lod');
    alt.requestIpl('sp1_10_real_interior');
    alt.requestIpl('sp1_10_real_interior_lod');
    alt.removeIpl('id2_14_during_door');
    alt.removeIpl('id2_14_during1');
    alt.removeIpl('id2_14_during2');
    alt.removeIpl('id2_14_on_fire');
    alt.removeIpl('id2_14_post_no_int');
    alt.removeIpl('id2_14_pre_no_int');
    alt.removeIpl('id2_14_during_door');
    alt.requestIpl('id2_14_during1');
    alt.removeIpl('Coroner_Int_off');
    alt.requestIpl('coronertrash');
    alt.requestIpl('Coroner_Int_on');
    alt.removeIpl('bh1_16_refurb');
    alt.removeIpl('jewel2fake');
    alt.removeIpl('bh1_16_doors_shut');
    alt.requestIpl('refit_unload');
    alt.requestIpl('post_hiest_unload');
    alt.requestIpl('Carwash_with_spinners');
    alt.requestIpl('KT_CarWash');
    alt.requestIpl('ferris_finale_Anim');
    alt.removeIpl('ch1_02_closed');
    alt.requestIpl('ch1_02_open');
    alt.requestIpl('AP1_04_TriAf01');
    alt.requestIpl('CS2_06_TriAf02');
    alt.requestIpl('CS4_04_TriAf03');
    alt.removeIpl('scafstartimap');
    alt.requestIpl('scafendimap');
    alt.removeIpl('DT1_05_HC_REMOVE');
    alt.requestIpl('DT1_05_HC_REQ');
    alt.requestIpl('DT1_05_REQUEST');
    alt.requestIpl('dt1_05_hc_remove');
    alt.requestIpl('dt1_05_hc_remove_lod');
    alt.requestIpl('FINBANK');
    alt.removeIpl('DT1_03_Shutter');
    alt.removeIpl('DT1_03_Gr_Closed');
    alt.requestIpl('golfflags');
    alt.requestIpl('airfield');
    alt.requestIpl('v_garages');
    alt.requestIpl('v_foundry');
    alt.requestIpl('hei_yacht_heist');
    alt.requestIpl('hei_yacht_heist_Bar');
    alt.requestIpl('hei_yacht_heist_Bedrm');
    alt.requestIpl('hei_yacht_heist_Bridge');
    alt.requestIpl('hei_yacht_heist_DistantLights');
    alt.requestIpl('hei_yacht_heist_enginrm');
    alt.requestIpl('hei_yacht_heist_LODLights');
    alt.requestIpl('hei_yacht_heist_Lounge');
    alt.requestIpl('hei_carrier');
    alt.requestIpl('hei_carrier_DistantLights');
    alt.requestIpl('hei_Carrier_int1');
    alt.requestIpl('hei_Carrier_int2');
    alt.requestIpl('hei_Carrier_int3');
    alt.requestIpl('hei_Carrier_int4');
    alt.requestIpl('hei_Carrier_int5');
    alt.requestIpl('hei_Carrier_int6');
    alt.requestIpl('hei_carrier_LODLights');
    alt.requestIpl('bkr_bi_id1_23_door');
    alt.requestIpl('lr_cs6_08_grave_closed');
    alt.requestIpl('hei_sm_16_interior_v_bahama_milo_');
    alt.requestIpl('CS3_07_MPGates');
    alt.requestIpl('cs5_4_trains');
    alt.requestIpl('v_lesters');
    alt.requestIpl('v_trevors');
    alt.requestIpl('v_michael');
    alt.requestIpl('v_comedy');
    alt.requestIpl('v_cinema');
    alt.requestIpl('V_Sweat');
    alt.requestIpl('V_35_Fireman');
    alt.requestIpl('redCarpet');
    alt.requestIpl('triathlon2_VBprops');
    alt.requestIpl('jetstenativeurnel');
    alt.requestIpl('Jetsteal_ipl_grp1');
    alt.requestIpl('v_hospital');
    alt.removeIpl('RC12B_Default');
    alt.removeIpl('RC12B_Fixed');
    alt.requestIpl('RC12B_Destroyed');
    alt.requestIpl('RC12B_HospitalInterior');
    alt.requestIpl('canyonriver01');
    alt.requestIpl('canyonriver01_lod');
    alt.requestIpl('cs3_05_water_grp1');
    alt.requestIpl('cs3_05_water_grp1_lod');
    alt.requestIpl('trv1_trail_start');
    alt.requestIpl('CanyonRvrShallow');

    // CASINO
    alt.requestIpl('vw_casino_penthouse');
    alt.requestIpl('vw_casino_main');
    alt.requestIpl('vw_casino_carpark');
    alt.requestIpl('vw_dlc_casino_door');
    alt.requestIpl('vw_casino_door');
    alt.requestIpl('hei_dlc_windows_casino');
    alt.requestIpl('hei_dlc_casino_door');
    alt.requestIpl('hei_dlc_casino_aircon');
    alt.requestIpl('vw_casino_garage');

    let interiorID = native.getInteriorAtCoords(1100.0, 220.0, -50.0);
    if (native.isValidInterior(interiorID)) {
        native.activateInteriorEntitySet(interiorID, '0x30240D11');
        native.activateInteriorEntitySet(interiorID, '0xA3C89BB2');
        native.refreshInterior(interiorID);
    }

    interiorID = native.getInteriorAtCoords(976.6364, 70.29476, 115.1641);
    if (native.isValidInterior(interiorID)) {
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Tint_Shell');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Pattern_09');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Spa_Bar_Open');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Media_Bar_Open');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Arcade_Modern');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Bar_Clutter');
        native.activateInteriorEntitySet(interiorID, 'Set_Pent_Clutter_03');
        native.activateInteriorEntitySet(interiorID, 'Set_pent_bar_light_02');
        native.refreshInterior(interiorID);
    }  
});

let nearIsland = false;

alt.everyTick(() => {
    let distance = alt.Player.local.pos.distanceTo(new alt.Vector3(4840.571, -5174.425, 2.0));

    if (distance < 2000) {
        if (!nearIsland) {
            nearIsland = true;
            native.setScenarioGroupEnabled('Heist_Island_Peds', true);
            native.setAudioFlag('PlayerOnDLCHeist4Island', true);
            native.setAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Zones', true, true);
            native.setAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Disabled_Zones', false, true);
            native.setDeepOceanScaler(0.1);
        }
    } else {
        if (nearIsland) {
            nearIsland = false;
            native.setScenarioGroupEnabled('Heist_Island_Peds', false);
            native.setAudioFlag('PlayerOnDLCHeist4Island', false);
            native.setAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Zones', false, false);
            native.setAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Disabled_Zones', false, false);
            native.resetDeepOceanScaler();
        }
    }

    if (nearIsland) {
        native.setRadarAsExteriorThisFrame();
        native.setRadarAsInteriorThisFrame(alt.hash('h4_fake_islandx'), 4700.0, -5145.0, 0, 0);
    }
});

alt.log("Client loaded...");