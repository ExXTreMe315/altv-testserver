/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUi.js';
import * as data from './data.js'

let characterSettings = {}
let characterConfig = null

//>NativeUI

//==> Menus
const charEditorMenu = new NativeUI.Menu("Gender", "Choose your gender", new NativeUI.Point(25, 25));
const parentsMenu = new NativeUI.Menu("Parents", "Customize your heredity", new NativeUI.Point(25, 25));
const facialFeaturesMenu = new NativeUI.Menu("Facial features", "customize your face", new NativeUI.Point(25, 25));
const hairsMenu = new NativeUI.Menu("Hairs", "customize your hair styles", new NativeUI.Point(25, 25));
const decorMenu = new NativeUI.Menu("Decor", "customize your decors", new NativeUI.Point(25, 25));

//==> Collections
const genders = new NativeUI.ItemsCollection(["Male", "Female"])

let maxScale = -1.00
let minToMaxScale = []
while (maxScale != 1.05) {
    minToMaxScale.push(maxScale)
    maxScale += 0.05
    maxScale = Math.round(maxScale * 100) / 100
}
const scales = new NativeUI.ItemsCollection(minToMaxScale)

let maxOpacitys = 0
let minToMaxOpacitys = []
while (maxOpacitys != 1.05) {
    minToMaxOpacitys.push(maxOpacitys)
    maxOpacitys += 0.05
    maxOpacitys = Math.round(maxOpacitys * 100) / 100
}
const opacitys = new NativeUI.ItemsCollection(minToMaxOpacitys)

let faceList = []
data.faces.forEach(e => faceList.push(e.name))
const faces = new NativeUI.ItemsCollection(faceList)

let eyesList = []
data.eyes.forEach(e => eyesList.push(e.name))
const eyes = new NativeUI.ItemsCollection(eyesList)

let maxMix = 0.00
let minToMaxMix = []
while (maxMix != 1.1) {
    minToMaxMix.push(maxMix)
    maxMix += 0.1
    maxMix = Math.round(maxMix * 100) / 100
}

//=> Items
//==> Gender
let uiItem_gender = new NativeUI.UIMenuListItem("Gender", "Choose the gender of the character", genders)
let uiItem_savegender = new NativeUI.UIMenuItem("Save gender ", "save your chosen gender and proceed")
//==> Parents
let uiItem_faceFather = new NativeUI.UIMenuListItem("Face Father", "Choose your fathers face", faces)
let uiItem_faceMother = new NativeUI.UIMenuListItem("Face Mother", "Choose your mothers face", faces)
let uiItem_faceMix = new NativeUI.UIMenuSliderItem("Mix Face", minToMaxMix, 5, "Choose your face mix", false)
let uiItem_skinFather = new NativeUI.UIMenuListItem("Skin Father", "Choose your fathers skin", faces)
let uiItem_skinMother = new NativeUI.UIMenuListItem("Skin Mother", "Choose your mothers skin", faces)
let uiItem_skinMix = new NativeUI.UIMenuSliderItem("Mix Skin", minToMaxMix, 5, "Choose your skin mix", false)
let uiItem_eyes = new NativeUI.UIMenuListItem("Eyes", "Choose your eyes", eyes)
let uiItem_saveParents = new NativeUI.UIMenuItem("Save Parents", "save your chosen parents and proceed")
//==> Face
let uiItem_saveFace = new NativeUI.UIMenuItem("Save Face", "save your chosen face parts and proceed")

//==> Hairs
//===> Setup for hair down below

//==> Decors
let uiItem_blemishes = new NativeUI.UIMenuListItem("Blemishes", "add Blemishes", new NativeUI.ItemsCollection(arrayToX(data.max.blemishes)))
let uiItem_ageing = new NativeUI.UIMenuListItem("Ageing", "add Ageing", new NativeUI.ItemsCollection(arrayToX(data.max.ageing)))
let uiItem_makeup = new NativeUI.UIMenuListItem("Makeup", "add Makeup", new NativeUI.ItemsCollection(arrayToX(data.max.makeup)))
let uiItem_blush = new NativeUI.UIMenuListItem("Blush", "add Blush", new NativeUI.ItemsCollection(arrayToX(data.max.blush)))
let uiItem_complexion = new NativeUI.UIMenuListItem("Complexion", "add Complexion", new NativeUI.ItemsCollection(arrayToX(data.max.complexion)))
let uiItem_sunDamage = new NativeUI.UIMenuListItem("Sun Damage", "add Sun Damage", new NativeUI.ItemsCollection(arrayToX(data.max.sunDamage)))
let uiItem_lipstick = new NativeUI.UIMenuListItem("Lipstick", "add Lipstick", new NativeUI.ItemsCollection(arrayToX(data.max.lipstick)))
let uiItem_molesFreckles = new NativeUI.UIMenuListItem("Moles & Freckles", "add Moles & Freckles", new NativeUI.ItemsCollection(arrayToX(data.max.molesFreckles)))
let uiItem_bodyBlemishes = new NativeUI.UIMenuListItem("Body Blemishes", "add Body Blemishes", new NativeUI.ItemsCollection(arrayToX(data.max.bodyBlemishes)))
let uiItem_addBodyBlemishes = new NativeUI.UIMenuListItem("more Body Blemishes", "add more Body Blemishes", new NativeUI.ItemsCollection(arrayToX(data.max.addBodyBlemishes)))

let uiItem_blemishesColor = new NativeUI.UIMenuListItem("Blemishes Color", "add Blemishes Color", new NativeUI.ItemsCollection(arrayToX(data.max.blemishes)))
let uiItem_ageingColor = new NativeUI.UIMenuListItem("Ageing Color", "add Ageing Color", new NativeUI.ItemsCollection(arrayToX(data.max.ageing)))
let uiItem_makeupColor = new NativeUI.UIMenuListItem("Makeup Color", "add Makeup Color", new NativeUI.ItemsCollection(arrayToX(data.max.makeup)))
let uiItem_blushColor = new NativeUI.UIMenuListItem("Blush Color", "add Blush Color", new NativeUI.ItemsCollection(arrayToX(data.max.blush)))
let uiItem_complexionColor = new NativeUI.UIMenuListItem("Complexion Color", "add Complexion Color", new NativeUI.ItemsCollection(arrayToX(data.max.complexion)))
let uiItem_sunDamageColor = new NativeUI.UIMenuListItem("Sun Damage Color", "add Sun Damage Color", new NativeUI.ItemsCollection(arrayToX(data.max.sunDamage)))
let uiItem_lipstickColor = new NativeUI.UIMenuListItem("Lipstick Color", "add Lipstick Color", new NativeUI.ItemsCollection(arrayToX(data.max.lipstick)))
let uiItem_molesFrecklesColor = new NativeUI.UIMenuListItem("Moles & Freckles Color", "add Moles & Freckles Color", new NativeUI.ItemsCollection(arrayToX(data.max.molesFreckles)))
let uiItem_bodyBlemishesColor = new NativeUI.UIMenuListItem("Body Blemishes Color", "add Body Blemishes Color", new NativeUI.ItemsCollection(arrayToX(data.max.bodyBlemishes)))
let uiItem_addBodyBlemishesColor = new NativeUI.UIMenuListItem("more Body Blemishes Color", "add more Body Blemishes Color", new NativeUI.ItemsCollection(arrayToX(data.max.addBodyBlemishes)))

let saveCharakter = new NativeUI.UIMenuItem("Save Charakter", "Save your Charakter and proceed")

decorMenu.AddItem(uiItem_blemishes)
decorMenu.AddItem(uiItem_ageing)
decorMenu.AddItem(uiItem_makeup)
decorMenu.AddItem(uiItem_blush)
decorMenu.AddItem(uiItem_complexion)
decorMenu.AddItem(uiItem_sunDamage)
decorMenu.AddItem(uiItem_lipstick)
decorMenu.AddItem(uiItem_molesFreckles)
decorMenu.AddItem(uiItem_bodyBlemishes)
decorMenu.AddItem(uiItem_addBodyBlemishes)
decorMenu.AddItem(uiItem_blemishesColor)
decorMenu.AddItem(uiItem_ageingColor)
decorMenu.AddItem(uiItem_makeupColor)
decorMenu.AddItem(uiItem_blushColor)
decorMenu.AddItem(uiItem_complexionColor)
decorMenu.AddItem(uiItem_sunDamageColor)
decorMenu.AddItem(uiItem_lipstickColor)
decorMenu.AddItem(uiItem_molesFrecklesColor)
decorMenu.AddItem(uiItem_bodyBlemishesColor)
decorMenu.AddItem(uiItem_addBodyBlemishesColor)
decorMenu.AddItem(saveCharakter)

//=> bind Items
charEditorMenu.AddItem(uiItem_gender)
parentsMenu.AddItem(uiItem_faceFather)
parentsMenu.AddItem(uiItem_faceMother)
parentsMenu.AddItem(uiItem_faceMix)
parentsMenu.AddItem(uiItem_skinFather)
parentsMenu.AddItem(uiItem_skinMother)
parentsMenu.AddItem(uiItem_skinMix)
parentsMenu.AddItem(uiItem_eyes)
data.facialFeatures.forEach(item =>{
    facialFeaturesMenu.AddItem(new NativeUI.UIMenuListItem(item.name, item.desc, scales, 20, "facialFeatures"))
})

charEditorMenu.BindMenuToItem(parentsMenu, uiItem_savegender)
parentsMenu.BindMenuToItem(facialFeaturesMenu, uiItem_saveParents)



//=> Event Handlers
charEditorMenu.ListChange.on((UIMenuListItem, Index) => {
    if(Index == 0) alt.emitServer('setGender', 0)
    else if (Index == 1) alt.emitServer('setGender', 1)
})

charEditorMenu.ItemSelect.on((item) => {
    if(item == uiItem_savegender){
        native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, parseFloat(0.5), parseFloat(0.5), 0, false);
    
        //=> Hair Setup
        let maxHairs
        if(uiItem_gender.Index == 0) { //Male
            maxHairs = data.max.male
        } else if(uiItem_gender.Index == 1) { //Female
            maxHairs = data.max.female
        }

        let uiItem_hair = new NativeUI.UIMenuListItem("Hair", "Choose your Hair", new NativeUI.ItemsCollection(arrayToX(maxHairs)))
        let uiItem_hairColor1 = new NativeUI.UIMenuListItem("Hair Color 1", "Choose your Hair Color 1", new NativeUI.ItemsCollection(arrayToX(data.max.hairColors)))
        let uiItem_hairColor2 = new NativeUI.UIMenuListItem("Hair Color 2", "Choose your Hair Color 2", new NativeUI.ItemsCollection(arrayToX(data.max.hairColors)))
        let uiItem_facialHair = new NativeUI.UIMenuListItem("Facial Hair", "Choose your facial hair", new NativeUI.ItemsCollection(arrayToX(data.max.facialHair)))
        let uiItem_facialHairColor = new NativeUI.UIMenuListItem("Facial Hair Color", "Choose your facial hair color", new NativeUI.ItemsCollection(arrayToX(data.max.hairColors)))
        let uiItem_eyebrow = new NativeUI.UIMenuListItem("Eyebrows", "Choose your Eyebrows", new NativeUI.ItemsCollection(arrayToX(data.max.eyebrows)))
        let uiItem_eyebrowColor = new NativeUI.UIMenuListItem("Eyebrows Colors", "Choose your eyebrows colors", new NativeUI.ItemsCollection(arrayToX(data.max.hairColors)))
        let uiItem_chestHair = new NativeUI.UIMenuListItem("Chest Hairs", "Choose your Chest Hairs", new NativeUI.ItemsCollection(arrayToX(data.max.chestHair)))
        let uiItem_chestHairColor = new NativeUI.UIMenuListItem("Chest Hairs Color", "Choose your Chest Hairs Color", new NativeUI.ItemsCollection(arrayToX(data.max.hairColors)))
        let uiItem_saveHairs = new NativeUI.UIMenuItem("Save Hairs", "save your chosen hairs and proceed")
        
        hairsMenu.Clear()
        hairsMenu.AddItem(uiItem_hair)
        hairsMenu.AddItem(uiItem_hairColor1)
        hairsMenu.AddItem(uiItem_hairColor2)
        hairsMenu.AddItem(uiItem_facialHair)
        hairsMenu.AddItem(uiItem_facialHairColor)
        hairsMenu.AddItem(uiItem_eyebrow)
        hairsMenu.AddItem(uiItem_eyebrowColor)
        hairsMenu.AddItem(uiItem_chestHair)
        hairsMenu.AddItem(uiItem_chestHairColor)
        hairsMenu.BindMenuToItem(decorMenu, uiItem_saveHairs)

        facialFeaturesMenu.BindMenuToItem(hairsMenu, uiItem_saveFace)

        
        let facialHear
        let eyebrow
        let chestHair
        
        hairsMenu.ListChange.on(() => {
            facialHear = uiItem_facialHair.Index-1
            eyebrow = uiItem_eyebrow.Index-1
            chestHair = uiItem_chestHair.Index-1

            if (facialHear == -1) facialHear = 255
            if (eyebrow == -1) eyebrow = 255
            if (chestHair == -1) chestHair = 255

            //Hair
            native.setPedComponentVariation(alt.Player.local.scriptID, 2, uiItem_hair.Index, 0, 0);
            native.setPedHairTint(alt.Player.local.scriptID, uiItem_hairColor1.Index, uiItem_hairColor2.Index)
            //Facial Hair
            native.setPedHeadOverlay(alt.Player.local.scriptID, 1, facialHear, 1);
            native.setPedHeadOverlayTint(alt.Player.local.scriptID, 1, 1, uiItem_facialHairColor.Index, uiItem_facialHairColor.Index)
            //Eyebrows
            native.setPedHeadOverlay(alt.Player.local.scriptID, 2, eyebrow, 1);
            native.setPedHeadOverlayTint(alt.Player.local.scriptID, 2, 1, uiItem_eyebrowColor.Index, uiItem_eyebrowColor.Index);
            //Chesthair
            native.setPedHeadOverlay(alt.Player.local.scriptID, 10, chestHair, 1);
            native.setPedHeadOverlayTint(alt.Player.local.scriptID, 10, 1, uiItem_chestHairColor.Index, uiItem_chestHairColor.Index);
        })

        hairsMenu.ItemSelect.on(item =>{
            if(item != uiItem_saveHairs) return
            characterSettings.hairs = {
                hair: uiItem_hair.Index,
                hairColor1: uiItem_hairColor1.Index,
                hairColor2: uiItem_hairColor2.Index,
                facialHair: facialHear,
                facialHairColor: uiItem_facialHairColor.Index,
                eyebrows: eyebrow,
                eyebrowsColor: uiItem_eyebrowColor.Index,
                chestHair: chestHair,
                chestHairColor: uiItem_chestHairColor.Index
            }
        })
    }
})

parentsMenu.SliderChange.on(() => {
    native.setPedHeadBlendData(
        alt.Player.local.scriptID,
        uiItem_faceFather.Index,
        uiItem_faceMother.Index,
        0,
        uiItem_skinFather.Index,
        uiItem_skinMother.Index,
        0,
        parseFloat(uiItem_faceMix.Index/10),
        parseFloat(uiItem_skinMix.Index/10),
        0,
        false
    );
})

parentsMenu.ListChange.on(() => {
    native.setPedHeadBlendData(
        alt.Player.local.scriptID,
        uiItem_faceFather.Index,
        uiItem_faceMother.Index,
        0,
        uiItem_skinFather.Index,
        uiItem_skinMother.Index,
        0,
        parseFloat(uiItem_faceMix.Index/10),
        parseFloat(uiItem_skinMix.Index/10),
        0,
        false
    );
    native.setHeadBlendEyeColor(alt.Player.local.scriptID, uiItem_eyes.Index)
})

facialFeaturesMenu.ListChange.on((UIMenuListItem, Index) =>{
    data.facialFeatures.forEach(feature => {
        if(UIMenuListItem.Text == feature.name){
            native.setPedMicroMorph(alt.Player.local, feature.id, minToMaxScale[Index])
        }
    })
})

decorMenu.ListChange.on((UIMenuListItem, Index) =>{
    let blemishes = uiItem_blemishes.Index-1
    let ageing = uiItem_ageing.Index-1
    let makeup = uiItem_makeup.Index-1
    let blush = uiItem_blush.Index-1
    let complexion = uiItem_complexion.Index-1
    let sunDamage = uiItem_sunDamage.Index-1
    let lipstick = uiItem_lipstick.Index-1
    let molesFreckles = uiItem_molesFreckles.Index-1
    let bodyBlemishes = uiItem_bodyBlemishes.Index-1
    let addBodyBlemishes = uiItem_addBodyBlemishes.Index-1

    if (blemishes == -1) blemishes = 255
    if (ageing == -1) ageing = 255
    if (makeup == -1) makeup = 255
    if (blush == -1) blush = 255
    if (complexion == -1) complexion = 255
    if (sunDamage == -1) sunDamage = 255
    if (lipstick == -1) lipstick = 255
    if (molesFreckles == -1) molesFreckles = 255
    if (bodyBlemishes == -1) bodyBlemishes = 255
    if (addBodyBlemishes == -1) addBodyBlemishes = 255

    native.setPedHeadOverlay(alt.Player.local.scriptID, 0, blemishes, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 3, ageing, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 4, makeup, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 5, blush, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 6, complexion, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 7, sunDamage, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 8, lipstick, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 9, molesFreckles, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 11, bodyBlemishes, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 12, addBodyBlemishes, 1)
    
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 0, 0, uiItem_blemishesColor.Index, uiItem_blemishesColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 3, 0, uiItem_ageingColor.Index, uiItem_ageingColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 4, 0, uiItem_makeupColor.Index, uiItem_makeupColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 5, 2, uiItem_blushColor.Index, uiItem_blushColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 6, 0, uiItem_complexionColor.Index, uiItem_complexionColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 7, 0, uiItem_sunDamageColor.Index, uiItem_sunDamageColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 8, 2, uiItem_lipstickColor.Index, uiItem_lipstickColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 9, 0, uiItem_molesFrecklesColor.Index, uiItem_molesFrecklesColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 11, 0, uiItem_bodyBlemishesColor.Index, uiItem_bodyBlemishesColor.Index)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 12, 0, uiItem_addBodyBlemishesColor.Index, uiItem_addBodyBlemishesColor.Index)
})

decorMenu.ItemSelect.on(item => {
    if(item != saveCharakter) return
    saveCharakterToLocalStorage()  
    decorMenu.Close()
    destroyCams()
    enableControls()
    alt.LocalStorage.set('charakterConfig', characterSettings)
    alt.LocalStorage.save()
    native.switchToMultiFirstpart(alt.Player.local.scriptID, 0, 2);
    alt.setTimeout(() => {
        alt.emitServer('charCreated')
    }, 1000);
})

//=> Menu Changes
charEditorMenu.MenuChange.on(menu => {
    if(menu == parentsMenu){
        destroyCams()
        createHeadCam()
    }
})
parentsMenu.MenuChange.on(menu => {
    if(menu == charEditorMenu){
        destroyCams()
        createTotalCam()
    }
})

//=> Menu Close
charEditorMenu.MenuClose.on(() =>{
    if (camera) {
        charEditorMenu.Open()
    }
})

//> AltV Events
alt.onServer('openEditor', () => {
    createTotalCam()
    charEditorMenu.Open()
    disableControls()
})

alt.onServer('checkExistingCharakter', () => {
    characterConfig = alt.LocalStorage.get('charakterConfig');
    switch(characterConfig){
        case null:
            alt.emitServer('createNewChar')
            break;
        default:
            alt.emitServer('createExistingChar', characterConfig.gender)
            break;
    }
})

alt.onServer('loadChar', () => {
    native.setPedHeadBlendData(
        alt.Player.local.scriptID,
        characterConfig.headBlendData.faceFather,
        characterConfig.headBlendData.faceMother,
        0,
        characterConfig.headBlendData.skinFather,
        characterConfig.headBlendData.skinMother,
        0,
        parseFloat(characterConfig.headBlendData.faceMix),
        parseFloat(characterConfig.headBlendData.skinMix),
        0,
        false
    );
    
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, characterConfig.hairs.hair, 0, 0);
    native.setPedHairTint(alt.Player.local.scriptID, characterConfig.hairs.hairColor1, characterConfig.hairs.hairColor2)

    native.setHeadBlendEyeColor(alt.Player.local.scriptID, characterConfig.eyes)
    native.setPedMicroMorph(alt.Player.local.scriptID, 0, characterConfig.pedMicroMorph.noseWidth)
    native.setPedMicroMorph(alt.Player.local.scriptID, 1, characterConfig.pedMicroMorph.nosePeak)
    native.setPedMicroMorph(alt.Player.local.scriptID, 2, characterConfig.pedMicroMorph.noseLength)
    native.setPedMicroMorph(alt.Player.local.scriptID, 3, characterConfig.pedMicroMorph.nodeBone)
    native.setPedMicroMorph(alt.Player.local.scriptID, 4, characterConfig.pedMicroMorph.noseTip)
    native.setPedMicroMorph(alt.Player.local.scriptID, 5, characterConfig.pedMicroMorph.noseTwist)
    native.setPedMicroMorph(alt.Player.local.scriptID, 6, characterConfig.pedMicroMorph.eyebrowUD)
    native.setPedMicroMorph(alt.Player.local.scriptID, 7, characterConfig.pedMicroMorph.eyebrowIO)
    native.setPedMicroMorph(alt.Player.local.scriptID, 8, characterConfig.pedMicroMorph.cheekBones)
    native.setPedMicroMorph(alt.Player.local.scriptID, 9, characterConfig.pedMicroMorph.cheekSide)
    native.setPedMicroMorph(alt.Player.local.scriptID, 10, characterConfig.pedMicroMorph.cheekWidth)
    native.setPedMicroMorph(alt.Player.local.scriptID, 11, characterConfig.pedMicroMorph.eye)
    native.setPedMicroMorph(alt.Player.local.scriptID, 12, characterConfig.pedMicroMorph.lip)
    native.setPedMicroMorph(alt.Player.local.scriptID, 13, characterConfig.pedMicroMorph.jawWidth)
    native.setPedMicroMorph(alt.Player.local.scriptID, 14, characterConfig.pedMicroMorph.jawShape)
    native.setPedMicroMorph(alt.Player.local.scriptID, 15, characterConfig.pedMicroMorph.chinBone)
    native.setPedMicroMorph(alt.Player.local.scriptID, 16, characterConfig.pedMicroMorph.chinBoneLength)
    native.setPedMicroMorph(alt.Player.local.scriptID, 17, characterConfig.pedMicroMorph.chinBoneShape)
    native.setPedMicroMorph(alt.Player.local.scriptID, 18, characterConfig.pedMicroMorph.chinHole)
    native.setPedMicroMorph(alt.Player.local.scriptID, 19, characterConfig.pedMicroMorph.neck)

    native.setPedHeadOverlay(alt.Player.local.scriptID, 0, characterConfig.decor.blemishes, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 1, characterConfig.hairs.facialHair, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 2, characterConfig.hairs.eyebrows, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 3, characterConfig.decor.ageing, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 4, characterConfig.decor.makeup, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 5, characterConfig.decor.blush, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 6, characterConfig.decor.complexion, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 7, characterConfig.decor.sunDamage, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 8, characterConfig.decor.lipstick, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 9, characterConfig.decor.molesFreckles, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 10, characterConfig.hairs.chestHair, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 11, characterConfig.decor.bodyBlemishes, 1)
    native.setPedHeadOverlay(alt.Player.local.scriptID, 12, characterConfig.decor.addBodyBlemishes, 1)
    
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 0, 0, characterConfig.decor.blemishesColor, characterConfig.decor.blemishesColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 1, 1, characterConfig.hairs.facialHairColor, characterConfig.hairs.facialHairColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 2, 1, characterConfig.hairs.eyebrowsColor, characterConfig.hairs.eyebrowsColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 3, 0, characterConfig.decor.ageingColor, characterConfig.decor.ageingColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 4, 0, characterConfig.decor.makeupColor, characterConfig.decor.makeupColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 5, 2, characterConfig.decor.blushColor, characterConfig.decor.blushColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 6, 0, characterConfig.decor.complexionColor, characterConfig.decor.complexionColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 7, 0, characterConfig.decor.sunDamageColor, characterConfig.decor.sunDamageColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 8, 2, characterConfig.decor.lipstickColor, characterConfig.decor.lipstickColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 9, 0, characterConfig.decor.molesFrecklesColor, characterConfig.decor.molesFrecklesColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 10, 1, characterConfig.hairs.chestHairColor, characterConfig.hairs.chestHairColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 11, 0, characterConfig.decor.bodyBlemishesColor, characterConfig.decor.bodyBlemishesColor)
    native.setPedHeadOverlayTint(alt.Player.local.scriptID, 12, 0, characterConfig.decor.addBodyBlemishesColor, characterConfig.decor.addBodyBlemishesColor)
})

//>Functions
//=> Control Functions
let controlAction = undefined
function disableControls(){
    controlAction = alt.everyTick(() => {
        native.disableControlAction(0, 0, true) //INPUT_NEXT_CAMERA
        native.disableControlAction(0, 1, true) //INPUT_LOOK_LR
        native.disableControlAction(0, 2, true) //INPUT_LOOK_UD
        native.disableControlAction(0, 4, true) //INPUT_LOOK_DOWN_ONLY
        native.disableControlAction(0, 6, true) //INPUT_LOOK_RIGHT_ONLY
        native.disableControlAction(0, 24, true) //INPUT_ATTACK
        native.disableControlAction(0, 25, true) //INPUT_AIM
        native.disableControlAction(0, 30, true) //INPUT_MOVE_LR (Left/Right)
        native.disableControlAction(0, 31, true) //INPUT_MOVE_UD (Up/Down)
        native.disableControlAction(0, 37, true) //INPUT_SELECT_WEAPON
        native.disableControlAction(0, 199, true) //INPUT_FRONTEND_PAUSE
        native.disableControlAction(0, 200, true) //INPUT_FRONTEND_PAUSE_ALTERNATE
        native.disableControlAction(0, 140, true) //INPUT_MELEE_ATTACK_LIGHT
        native.disableControlAction(0, 36, true) //INPUT_DUCK
    });
}
function enableControls(){
    alt.clearEveryTick(controlAction);
}


//==> Cam Functions
let cameraControlsInterval;
let camera;
let fov = 90;
let startPosition;
let startCamPosition;

function createTotalCam() {
    startPosition = { ...alt.Player.local.pos };
    if (!camera) {
        const forwardVector = native.getEntityForwardVector(alt.Player.local.scriptID);
        const forwardCameraPosition = {
            x: startPosition.x + forwardVector.x,
            y: startPosition.y + forwardVector.y,
            z: startPosition.z
        };

        fov = 90;
        startCamPosition = forwardCameraPosition;

        camera = native.createCamWithParams(
            'DEFAULT_SCRIPTED_CAMERA',
            forwardCameraPosition.x,
            forwardCameraPosition.y,
            forwardCameraPosition.z,
            0,
            0,
            0,
            fov,
            true,
            0
        );

        native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z);
        native.setCamActive(camera, true);
        native.renderScriptCams(true, false, 0, true, false, 0);
    }
}

function createHeadCam() {
    startPosition = { ...alt.Player.local.pos };
    if (!camera) {
        const forwardVector = native.getEntityForwardVector(alt.Player.local.scriptID);
        const forwardCameraPosition = {
            x: startPosition.x + forwardVector.x/3,
            y: startPosition.y + forwardVector.y/3,
            z: startPosition.z + 0.7
        };

        fov = 90;
        startCamPosition = forwardCameraPosition;

        camera = native.createCamWithParams(
            'DEFAULT_SCRIPTED_CAMERA',
            forwardCameraPosition.x,
            forwardCameraPosition.y,
            forwardCameraPosition.z,
            0,
            0,
            0,
            fov,
            true,
            0
        );

        native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z+0.7);
        native.setCamActive(camera, true);
        native.renderScriptCams(true, false, 0, true, false, 0);
    }
}

function destroyCams() {
    if (cameraControlsInterval !== undefined || cameraControlsInterval !== null) {
        cameraControlsInterval = null;
    }

    if (camera) {
        camera = null;
    }

    native.destroyAllCams(true);
    native.renderScriptCams(false, false, 0, false, false, 0);

    fov = 90;
    startPosition = null;
    startCamPosition = null;
}

function arrayToX(X) {
    let maxX = 0
    let minToMaxX = []
    while (maxX <= X) {
        minToMaxX.push(maxX)
        maxX ++
    }
    return minToMaxX
}

function saveCharakterToLocalStorage(){
    characterSettings.gender = uiItem_gender.Index
    characterSettings.headBlendData = {
        faceFather: uiItem_faceFather.Index,
        faceMother: uiItem_faceMother.Index,
        skinFather: uiItem_skinFather.Index,
        skinMother: uiItem_skinMother.Index,
        faceMix: uiItem_faceMix.Index/10,
        skinMix: uiItem_skinMix.Index/10
    }
    characterSettings.eyes = uiItem_eyes.Index
    characterSettings.pedMicroMorph = {
        noseWidth: minToMaxScale[facialFeaturesMenu.MenuItems[0].Index],
        nosePeak: minToMaxScale[facialFeaturesMenu.MenuItems[1].Index],
        noseLength: minToMaxScale[facialFeaturesMenu.MenuItems[2].Index],
        nodeBone: minToMaxScale[facialFeaturesMenu.MenuItems[3].Index],
        noseTip: minToMaxScale[facialFeaturesMenu.MenuItems[4].Index],
        noseTwist: minToMaxScale[facialFeaturesMenu.MenuItems[5].Index],
        eyebrowUD: minToMaxScale[facialFeaturesMenu.MenuItems[6].Index],
        eyebrowIO: minToMaxScale[facialFeaturesMenu.MenuItems[7].Index],
        cheekBones: minToMaxScale[facialFeaturesMenu.MenuItems[8].Index],
        cheekSide: minToMaxScale[facialFeaturesMenu.MenuItems[9].Index],
        cheekWidth: minToMaxScale[facialFeaturesMenu.MenuItems[10].Index],
        eye: minToMaxScale[facialFeaturesMenu.MenuItems[11].Index],
        lip: minToMaxScale[facialFeaturesMenu.MenuItems[12].Index],
        jawWidth: minToMaxScale[facialFeaturesMenu.MenuItems[13].Index],
        jawShape: minToMaxScale[facialFeaturesMenu.MenuItems[14].Index],
        chinBone: minToMaxScale[facialFeaturesMenu.MenuItems[15].Index],
        chinBoneLength: minToMaxScale[facialFeaturesMenu.MenuItems[16].Index],
        chinBoneShape: minToMaxScale[facialFeaturesMenu.MenuItems[17].Index],
        chinHole: minToMaxScale[facialFeaturesMenu.MenuItems[18].Index],
        neck: minToMaxScale[facialFeaturesMenu.MenuItems[19].Index]
    }
    let blemishes = uiItem_blemishes.Index-1
    let ageing = uiItem_ageing.Index-1
    let makeup = uiItem_makeup.Index-1
    let blush = uiItem_blush.Index-1
    let complexion = uiItem_complexion.Index-1
    let sunDamage = uiItem_sunDamage.Index-1
    let lipstick = uiItem_lipstick.Index-1
    let molesFreckles = uiItem_molesFreckles.Index-1
    let bodyBlemishes = uiItem_bodyBlemishes.Index-1
    let addBodyBlemishes = uiItem_addBodyBlemishes.Index-1

    if (blemishes == -1) blemishes = 255
    if (ageing == -1) ageing = 255
    if (makeup == -1) makeup = 255
    if (blush == -1) blush = 255
    if (complexion == -1) complexion = 255
    if (sunDamage == -1) sunDamage = 255
    if (lipstick == -1) lipstick = 255
    if (molesFreckles == -1) molesFreckles = 255
    if (bodyBlemishes == -1) bodyBlemishes = 255
    if (addBodyBlemishes == -1) addBodyBlemishes = 255
    characterSettings.decor = {
        blemishes: blemishes,
        ageing: ageing,
        makeup: makeup,
        blush: blush,
        complexion: complexion,
        sunDamage: sunDamage,
        lipstick: lipstick,
        molesFreckles: molesFreckles,
        bodyBlemishes: bodyBlemishes,
        addBodyBlemishes: addBodyBlemishes,

        blemishesColor: uiItem_blemishesColor.Index,
        ageingColor: uiItem_ageingColor.Index,
        makeupColor: uiItem_makeupColor.Index,
        blushColor: uiItem_blushColor.Index,
        complexionColor: uiItem_complexionColor.Index,
        sunDamageColor: uiItem_sunDamageColor.Index,
        lipstickColor: uiItem_lipstickColor.Index,
        molesFrecklesColor: uiItem_molesFrecklesColor.Index,
        bodyBlemishesColor: uiItem_bodyBlemishesColor.Index,
        addBodyBlemishesColor: uiItem_addBodyBlemishesColor.Index,
    }
}  

alt.on('charCreator:clearLocalStorage', () => {
    alt.LocalStorage.deleteAll()
    alt.LocalStorage.save()
    alt.log("Local Storage for Char Creator deleted")
})

alt.onServer('switchIn', () => {
    native.switchToMultiSecondpart(alt.Player.local.scriptID);
})