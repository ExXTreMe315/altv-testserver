/// <reference types="@altv/types-client" />

import * as alt from 'alt-client';
import * as NativeUI from './includes/NativeUI/NativeUi.js';
import * as data from '../data.js';

const clothMenu = new NativeUI.Menu("Clothes", "Clothe Menü", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");


const masks_1 = new NativeUI.UIMenuListItem("Masks", "Change Masks", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[1].length)));
const torsos_3 = new NativeUI.UIMenuListItem("Torsos", "Change Torsos", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[3].length)));
const legs_4 = new NativeUI.UIMenuListItem("Legs", "Change Legs", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[4].length)));
const bags_5 = new NativeUI.UIMenuListItem("Bags", "Change Bags", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[5].length)));
const shoes_6 = new NativeUI.UIMenuListItem("Shoes", "Change Shoes", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[6].length)));
const accessories_7 = new NativeUI.UIMenuListItem("Accessories", "Change Accessories", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[7].length)));
const undershirts_8 = new NativeUI.UIMenuListItem("Undershirts", "Change Undershirts", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[8].length)));
const bodyArmors_9 = new NativeUI.UIMenuListItem("Body Armors", "Change Body Armors", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[9].length)));
const decals_10 = new NativeUI.UIMenuListItem("Decals", "Change Decals", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[10].length)));
const tops_11 = new NativeUI.UIMenuListItem("Tops", "Change Tops", new NativeUI.ItemsCollection(createNumberArrayTill(data.maleClothes.clothes[11].length)));


const hats_0 = new NativeUI.UIMenuListItem("Hats", "Set Hats", new NativeUI.ItemsCollection(createNumberArrayTill(255)));
const glasses_1 = new NativeUI.UIMenuListItem("Glasses", "Set Glasses", new NativeUI.ItemsCollection(createNumberArrayTill(255)));
const ears_2 = new NativeUI.UIMenuListItem("Ears", "Set Ears", new NativeUI.ItemsCollection(createNumberArrayTill(255)));
const watches_6 = new NativeUI.UIMenuListItem("Watches", "Set Watches", new NativeUI.ItemsCollection(createNumberArrayTill(255)));
const bracelets_7 = new NativeUI.UIMenuListItem("Bracelets", "Set Bracelets", new NativeUI.ItemsCollection(createNumberArrayTill(255)));

clothMenu.AddItem(masks_1)
clothMenu.AddItem(torsos_3)
clothMenu.AddItem(legs_4)
clothMenu.AddItem(bags_5)
clothMenu.AddItem(shoes_6)
clothMenu.AddItem(accessories_7)
clothMenu.AddItem(undershirts_8)
clothMenu.AddItem(bodyArmors_9)
clothMenu.AddItem(decals_10)
clothMenu.AddItem(tops_11)

clothMenu.AddItem(hats_0)
clothMenu.AddItem(glasses_1)
clothMenu.AddItem(ears_2)
clothMenu.AddItem(watches_6)
clothMenu.AddItem(bracelets_7)

let masks_1_texture = 0
let torsos_3_texture = 0
let legs_4_texture = 0
let bags_5_texture = 0
let shoes_6_texture = 0
let accessories_7_texture = 0
let undershirts_8_texture = 0
let bodyArmors_9_texture = 0
let decals_10_texture = 0
let tops_11_texture = 0

let hats_0_texture = 0
let glasses_1_texture = 0
let ears_2_texture = 0
let watches_6_texture = 0
let bracelets_7_texture = 0

clothMenu.ListChange.on((item, index) => {
    switch(item){
        case masks_1:
            masks_1_texture = 0
            break;

        case torsos_3:
            torsos_3_texture = 0
            break;

        case legs_4:
            legs_4_texture = 0
            break;

        case bags_5:
            bags_5_texture = 0
            break;

        case shoes_6:
            shoes_6_texture = 0
            break;

        case accessories_7:
            accessories_7_texture = 0
            break;

        case undershirts_8:
            undershirts_8_texture = 0
            break;

        case bodyArmors_9:
            bodyArmors_9_texture = 0
            break;

        case decals_10:
            decals_10_texture = 0
            break;

        case tops_11:
            tops_11_texture = 0
            break;

        case hats_0:
            hats_0_texture = 0
            break;

        case glasses_1:
            glasses_1_texture = 0
            break;

        case ears_2:
            ears_2_texture = 0
            break;

        case watches_6:
            watches_6_texture = 0
            break;

        case bracelets_7:
            bracelets_7_texture = 0
            break;
    }
    
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[1][masks_1.Index].dlc, 1, data.maleClothes.clothes[1][masks_1.Index].drawable, masks_1_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[3][torsos_3.Index].dlc, 3, data.maleClothes.clothes[3][torsos_3.Index].drawable, torsos_3_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[4][legs_4.Index].dlc, 4, data.maleClothes.clothes[4][legs_4.Index].drawable, legs_4_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[5][bags_5.Index].dlc, 5, data.maleClothes.clothes[5][bags_5.Index].drawable, bags_5_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[6][shoes_6.Index].dlc, 6, data.maleClothes.clothes[6][shoes_6.Index].drawable, shoes_6_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[7][accessories_7.Index].dlc, 7, data.maleClothes.clothes[7][accessories_7.Index].drawable, accessories_7_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[8][undershirts_8.Index].dlc, 8, data.maleClothes.clothes[8][undershirts_8.Index].drawable, undershirts_8_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[9][bodyArmors_9.Index].dlc, 9, data.maleClothes.clothes[9][bodyArmors_9.Index].drawable, bodyArmors_9_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[10][decals_10.Index].dlc, 10, data.maleClothes.clothes[10][decals_10.Index].drawable, decals_10_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[11][tops_11.Index].dlc, 11, data.maleClothes.clothes[11][tops_11.Index].drawable, tops_11_texture)
    
    alt.emitServer('setDlcProp', data.maleClothes.props[0][hats_0.Index].dlc, 0, data.maleClothes.props[0][hats_0.Index].drawable, hats_0_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[1][glasses_1.Index].dlc, 1, data.maleClothes.props[1][glasses_1.Index].drawable, glasses_1_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[2][ears_2.Index].dlc, 2, data.maleClothes.props[2][ears_2.Index].drawable, ears_2_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[6][watches_6.Index].dlc, 6, data.maleClothes.props[6][watches_6.Index].drawable, watches_6_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[7][bracelets_7.Index].dlc, 7, data.maleClothes.props[7][bracelets_7.Index].drawable, bracelets_7_texture)
})

clothMenu.ItemSelect.on((item) => {
    switch(item){
        case masks_1:
            masks_1_texture ++
            break;

        case torsos_3:
            torsos_3_texture ++
            break;

        case legs_4:
            legs_4_texture ++
            break;

        case bags_5:
            bags_5_texture ++
            break;

        case shoes_6:
            shoes_6_texture ++
            break;

        case accessories_7:
            accessories_7_texture ++
            break;

        case undershirts_8:
            undershirts_8_texture ++
            break;

        case bodyArmors_9:
            bodyArmors_9_texture ++
            break;

        case decals_10:
            decals_10_texture ++
            break;

        case tops_11:
            tops_11_texture ++
            break;

        case hats_0:
            hats_0_texture ++
            break;

        case glasses_1:
            glasses_1_texture ++
            break;

        case ears_2:
            ears_2_texture ++
            break;

        case watches_6:
            watches_6_texture ++
            break;

        case bracelets_7:
            bracelets_7_texture ++
            break;
    }
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[1][masks_1.Index].dlc, 1, data.maleClothes.clothes[1][masks_1.Index].drawable, masks_1_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[3][torsos_3.Index].dlc, 3, data.maleClothes.clothes[3][torsos_3.Index].drawable, torsos_3_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[4][legs_4.Index].dlc, 4, data.maleClothes.clothes[4][legs_4.Index].drawable, legs_4_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[5][bags_5.Index].dlc, 5, data.maleClothes.clothes[5][bags_5.Index].drawable, bags_5_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[6][shoes_6.Index].dlc, 6, data.maleClothes.clothes[6][shoes_6.Index].drawable, shoes_6_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[7][accessories_7.Index].dlc, 7, data.maleClothes.clothes[7][accessories_7.Index].drawable, accessories_7_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[8][undershirts_8.Index].dlc, 8, data.maleClothes.clothes[8][undershirts_8.Index].drawable, undershirts_8_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[9][bodyArmors_9.Index].dlc, 9, data.maleClothes.clothes[9][bodyArmors_9.Index].drawable, bodyArmors_9_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[10][decals_10.Index].dlc, 10, data.maleClothes.clothes[10][decals_10.Index].drawable, decals_10_texture)
    alt.emitServer('setDlcCloth2', data.maleClothes.clothes[11][tops_11.Index].dlc, 11, data.maleClothes.clothes[11][tops_11.Index].drawable, tops_11_texture)
    
    alt.emitServer('setDlcProp', data.maleClothes.props[0][hats_0.Index].dlc, 0, data.maleClothes.props[0][hats_0.Index].drawable, hats_0_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[1][glasses_1.Index].dlc, 1, data.maleClothes.props[1][glasses_1.Index].drawable, glasses_1_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[2][ears_2.Index].dlc, 2, data.maleClothes.props[2][ears_2.Index].drawable, ears_2_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[6][watches_6.Index].dlc, 6, data.maleClothes.props[6][watches_6.Index].drawable, watches_6_texture)
    alt.emitServer('setDlcProp', data.maleClothes.props[7][bracelets_7.Index].dlc, 7, data.maleClothes.props[7][bracelets_7.Index].drawable, bracelets_7_texture)
})

//=> other Functions
function createNumberArrayTill(max) {
    let i = 0
    let array = []
    while (i <= max) {
        array.push(i)
        i++
    }
    return array
}

alt.on('openClothMenu', () => {
    clothMenu.Open()
})