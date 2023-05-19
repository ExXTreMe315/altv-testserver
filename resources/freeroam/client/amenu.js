/// <reference types="@altv/types-client" />

import * as alt from 'alt-client';
import * as NativeUI from './includes/NativeUI/NativeUi.js';
import * as charViewer from './charViewer.js';

const adminMenu = new NativeUI.Menu("Admin", "Admin Menü", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");

const playerMenu = new NativeUI.Menu("Player", "Player verwalten", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const onlinePlayersMenu = new NativeUI.Menu("Online Spieler", "Alle Spieler die Online sind", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const adminOptionsMenu = new NativeUI.Menu("Admin", "Administrative optionen", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const vehicleMenu = new NativeUI.Menu("Fahrzeug", "Fahrzeug verwalten", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const weaponsMenu = new NativeUI.Menu("Waffen", "Waffen verwalten", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const worldMenu = new NativeUI.Menu("Umwelt", "Umwelt verwalten", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");
const testMenu = new NativeUI.Menu("Test", "Test Menu", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");

const player = new NativeUI.UIMenuItem("Player", "Player verwalten");
const onlinePlayers = new NativeUI.UIMenuItem("Online Spieler", "Alle Spieler die Online sind");
const adminOptions = new NativeUI.UIMenuItem("Admin", "Administrative optionen");
const vehicle = new NativeUI.UIMenuItem("Fahrzeug", "Fahrzeug verwalten");
const weapons = new NativeUI.UIMenuItem("Waffen", "Waffen verwalten");
const world = new NativeUI.UIMenuItem("Umwelt", "Umwelt verwalten");

adminMenu.AddSubMenu(playerMenu, player)
adminMenu.AddSubMenu(onlinePlayersMenu, onlinePlayers)
adminMenu.AddSubMenu(adminOptionsMenu, adminOptions)
adminMenu.AddSubMenu(vehicleMenu, vehicle)
adminMenu.AddSubMenu(weaponsMenu, weapons)
adminMenu.AddSubMenu(worldMenu, world)

let onlinePlayerMenus = []

function refreshOnlinePlayersList() {
    onlinePlayersMenu.Clear()
    alt.emitServer('checkPlayerStatusOnline')

}

//=> PlayerMenu
const heal = new NativeUI.UIMenuItem("Heal", "Heal Player");
const kill = new NativeUI.UIMenuItem("Kill", "Kill Player");
const godmode = new NativeUI.UIMenuItem("Godmode", "Godmode Player");
const invisible = new NativeUI.UIMenuItem("Invisible", "Invisible Player");
const noClip = new NativeUI.UIMenuItem("NoClip", "NoClip Player");
const setSkin = new NativeUI.UIMenuItem("Skin", "Set a skin for your player");
const tpPos = new NativeUI.UIMenuItem("TP to Pos", "Teleport to X Y Z Coordinates");

playerMenu.AddItem(heal)
playerMenu.AddItem(kill)
playerMenu.AddItem(godmode)
playerMenu.AddItem(invisible)
playerMenu.AddItem(noClip)
playerMenu.AddItem(setSkin)
playerMenu.AddItem(tpPos)

//=> VehMenu
const createVeh = new NativeUI.UIMenuItem("Spawn", "Spawn a Vehicle");
const repairVeh = new NativeUI.UIMenuItem("Repair", "Repair your current Vehicle");
const delVeh = new NativeUI.UIMenuItem("Delete Vehicle", "Delete your current Vehicle");
const delAllVehs = new NativeUI.UIMenuItem("Delete all Vehicles", "Delete all Vehicles on the Server");

vehicleMenu.AddItem(createVeh)
vehicleMenu.AddItem(repairVeh)
vehicleMenu.AddItem(delVeh)
vehicleMenu.AddItem(delAllVehs)

//=> Weapons Menu
const giveWeapons = new NativeUI.UIMenuItem("Give Weapons", "Give all weapons to Player");
const removeWeapons = new NativeUI.UIMenuItem("Remove Weapons", "Remove all weapons from Player");

weaponsMenu.AddItem(giveWeapons)
weaponsMenu.AddItem(removeWeapons)

//=> VehMenu
const timeHH = new NativeUI.UIMenuListItem("HH", "Set hour", new NativeUI.ItemsCollection(createNumberArrayTill(24)));
const timeMM = new NativeUI.UIMenuListItem("MM", "Set minute", new NativeUI.ItemsCollection(createNumberArrayTill(59)));
const timeSS = new NativeUI.UIMenuListItem("SS", "Set seconds", new NativeUI.ItemsCollection(createNumberArrayTill(59)));
const weather = new NativeUI.UIMenuListItem("Weather", "Set weather", new NativeUI.ItemsCollection([
    "EXTRASUNNY",
    "CLEAR",
    "CLOUDS",
    "SMOG",
    "FOGGY",
    "OVERCAST",
    "RAIN",
    "THUNDER",
    "CLEARING",
    "NEUTRAL",
    "SNOW",
    "BLIZZARD",
    "SNOWLIGHT",
    "XMAS",
    "HALLOWEEN"
]));

worldMenu.AddItem(weather)
worldMenu.AddItem(timeHH)
worldMenu.AddItem(timeMM)
worldMenu.AddItem(timeSS)

//=> Admin Options
const bansMenu = new NativeUI.Menu("Bans", "List of all banned Players", new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd");

const bans = new NativeUI.UIMenuItem("Bans", "List of all banned Players");
const announce = new NativeUI.UIMenuItem("Announce", "Announce a message to all Players");
const log = new NativeUI.UIMenuItem("Log", "Log something in Server Console");
const setServerPw = new NativeUI.UIMenuItem("Set Password", "Set Server Password");
const stopServer = new NativeUI.UIMenuItem("Stop Server", "Stops the Server");
const logPos = new NativeUI.UIMenuItem("Get Position", "Get the current Position of the player");
const logRot = new NativeUI.UIMenuItem("Get Rotation", "Get the current Rotation of the player");

adminOptionsMenu.AddSubMenu(bansMenu, bans)
adminOptionsMenu.AddItem(announce)
adminOptionsMenu.AddItem(log)
adminOptionsMenu.AddItem(setServerPw)
adminOptionsMenu.AddItem(stopServer)
adminOptionsMenu.AddItem(logPos)
adminOptionsMenu.AddItem(logRot)

//=> ItemSelect
let playerStatus = {
    noClip: false
}

adminMenu.ItemSelect.on(item => {
    switch(item){
        case player:
            alt.emitServer('checkPlayerStatusLocal', alt.Player.local)
            break;
        
        case onlinePlayers:
            refreshOnlinePlayersList()
            break;
    }
})

playerMenu.ItemSelect.on(item => {
    switch (item) {
        case heal:
            alt.emitServer('healPlayer');
            break;

        case kill:
            alt.emitServer('killPlayer');
            break;
        
        case godmode:
            alt.emitServer('godmodePlayer');
            break;
        
        case invisible:
            alt.emitServer('invisiblePlayer');
            break;
        
        case noClip:
            alt.emitServer('noClipPlayer');
            if(!playerStatus.noClip){
                noClip.SetRightBadge(22)
                playerStatus.noClip = true
                alt.emit('NoClip');
            } else if(playerStatus.noClip){
                noClip.SetRightBadge(0)
                playerStatus.noClip = false
                alt.emit('NoClip');
            }
            break;

        case setSkin:
            doCmd('setSkin')
            playerMenu.Close()
            break;

        case tpPos:
            doCmd('tpPos')
            playerMenu.Close()
            break;
    }
})

vehicleMenu.ItemSelect.on(item => {
    switch(item){
        case createVeh:
            doCmd('spawnveh')
            vehicleMenu.Close()
            break;

        case repairVeh:
            alt.emitServer('repairVeh');
            break;

        case delVeh:
            alt.emitServer('delCurrVeh');
            break;

        case delAllVehs:
            alt.emitServer('destroyAllVehs');
            break;
    }
})

weaponsMenu.ItemSelect.on(item => {
    switch(item){
        case giveWeapons:
            alt.emitServer('giveAllWeapons')
            break;
    
        case removeWeapons:
            alt.emitServer('removeAllWeapons')
            break;
    }    
})

worldMenu.ItemSelect.on(item => {
    switch(item){
        case timeHH:
            alt.emitServer('setTime', timeHH.SelectedValue, timeMM.SelectedValue, timeSS.SelectedValue);
            break;

        case timeMM:
            alt.emitServer('setTime', timeHH.SelectedValue, timeMM.SelectedValue, timeSS.SelectedValue);
            break;

        case timeSS:
            alt.emitServer('setTime', timeHH.SelectedValue, timeMM.SelectedValue, timeSS.SelectedValue);
            break;

        case weather:
            alt.emitServer('setWeather', weather.Index)
            
    }
})

adminOptionsMenu.ItemSelect.on(item => {
    switch(item){
        case announce:
            doCmd('announce')
            adminOptionsMenu.Close()
            break;

        case log:
            doCmd('log')
            adminOptionsMenu.Close()
            break;  

        case setServerPw:
            doCmd('setServerPw')
            adminOptionsMenu.Close()
            break;

        case stopServer:
            doCmd('stopServer')
            adminOptionsMenu.Close()
            break;

        case logPos:
            if(alt.Player.local.vehicle){
                alt.log(alt.Player.local.vehicle.pos)
                alt.emitServer('logPos', alt.Player.local.vehicle.pos)
            } else {
                alt.log(alt.Player.local.pos)
                alt.emitServer('logPos', alt.Player.local.pos)
            }
            break;

        case logRot:
            if(alt.Player.local.vehicle){
                alt.log(alt.Player.local.vehicle.rot)
                alt.emitServer('logRot', alt.Player.local.vehicle.rot)
            } else {
                alt.log(alt.Player.local.rot)
                alt.emitServer('logRot', alt.Player.local.rot)
            }
            break;
    }
})

//=> on Server
alt.onServer('recivePlayerStatusLocal', (status) => {
    switch(status.godmode){
        case true:
            godmode.SetRightBadge(22)
            break;

        case false:
            godmode.SetRightBadge(0)
            break;
    }

    switch(status.invisible){
        case true:
            invisible.SetRightBadge(22)
            break;

        case false:
            invisible.SetRightBadge(0)
            break;
    }
})

alt.onServer('recivePlayerStatusOnline', (status) => {
    let onlinePlayerItem = new NativeUI.UIMenuItem(`(${status.player.id}) ${status.player.name}`, `${status.player.name} verwalten`)
    let onlinePlayerMenu = new NativeUI.Menu(`(${status.player.id}) ${status.player.name}`, `${status.player.name} verwalten`, new NativeUI.Point(25, 25), "commonmenu", "interaction_bgd")
    onlinePlayersMenu.AddSubMenu(onlinePlayerMenu, onlinePlayerItem);
    
    let onlinePlayerHeal = new NativeUI.UIMenuItem("Heal", "Heal Player");
    let onlinePlayerKill = new NativeUI.UIMenuItem("Kill", "Kill Player");
    let onlinePlayerGodmode = new NativeUI.UIMenuItem("Godmode", "Godmode Player");
    let onlinePlayerInvisible = new NativeUI.UIMenuItem("Invisible", "Invisible Player");
    let onlinePlayerGoTo = new NativeUI.UIMenuItem("TP to Player", "Teleport to the Player");
    let onlinePlayerBring = new NativeUI.UIMenuItem("TP to Player to Me", "Teleport to the Player to Me");
    let onlinePlayerKick = new NativeUI.UIMenuItem("Kick", "Kick the Player");
    let onlinePlayerBan = new NativeUI.UIMenuItem("Ban", "Ban the Player");

    onlinePlayerMenu.AddItem(onlinePlayerHeal)
    onlinePlayerMenu.AddItem(onlinePlayerKill)
    onlinePlayerMenu.AddItem(onlinePlayerGodmode)
    onlinePlayerMenu.AddItem(onlinePlayerInvisible)
    onlinePlayerMenu.AddItem(onlinePlayerGoTo)
    onlinePlayerMenu.AddItem(onlinePlayerBring)
    onlinePlayerMenu.AddItem(onlinePlayerKick)
    onlinePlayerMenu.AddItem(onlinePlayerBan)

    onlinePlayerMenus.push(onlinePlayerMenu)

    switch(status.godmode){
        case true:
            onlinePlayerGodmode.SetRightBadge(22)
            break;

        case false:
            onlinePlayerGodmode.SetRightBadge(0)
            break;
    }

    switch(status.invisible){
        case true:
            onlinePlayerInvisible.SetRightBadge(22)
            break;

        case false:
            onlinePlayerInvisible.SetRightBadge(0)
            break;
    }

    alt.emit('onlinePlayersReady')
})

alt.onServer('sendBanList', (banList) => {
    switch(banList.length){
        case 0:
            bansMenu.AddItem(new NativeUI.UIMenuItem("No bans", "there are no banned Players on this Server"))
            break;
        
        default:
            banList.forEach(ban => {
                bansMenu.AddItem(new NativeUI.UIMenuItem(ban, `banned Player with SCID: ${ban}`))
            })
    }
});


alt.on('onlinePlayersReady', () => {
    onlinePlayerMenus.forEach(menu => {
        menu.ItemSelect.on(item => {
            let id = item.Parent._titleResText.Caption.split("(")[1].split(")")[0]
            switch(item._text.Caption){
                case "Heal":
                    alt.emitServer('healPlayerById', id);
                    break;
                
                case "Kill":
                    alt.emitServer('killPlayerById', id);
                    break;
                
                case "Godmode":
                    alt.emitServer('GodmodePlayerById', id);
                    switch(item.RightBadge){
                        case 0:
                            item.SetRightBadge(22)
                            break;

                        case 22:
                            item.SetRightBadge(0)
                            break;
                    }
                    break;
            
                case "Invisible":
                    alt.emitServer('InvisiblePlayerById', id);
                    switch(item.RightBadge){
                        case 0:
                            item.SetRightBadge(22)
                            break;

                        case 22:
                            item.SetRightBadge(0)
                            break;
                    }
                    break;

                    case "TP to Player":
                        alt.emitServer('tpToId', id);
                        break;

                    case "TP to Player to Me":
                        alt.emitServer('tpIdToMe', id);
                        break;

                    case "Kick":
                        alt.emitServer('kickPlayerById', id);
                        break;

                    case "Ban":
                        alt.emitServer('banPlayerById', id);
                        break;
            }
        })
    })
})

//=> Key
alt.on('keydown', (key) => {
    switch (key) {
        case 121:
            if (adminMenu.Visible) {
                adminMenu.Close()
            } else {
                adminMenu.Open()
                alt.emitServer('requestBanList')
            }
            break;
    }
})

//=> other Functions

function doCmd(cmd) {
    let input = new alt.WebView("http://resource/client/html/input.html");
    input.focus();
    alt.toggleGameControls(false)

    alt.on('keydown', (key) => {
        if (key == 13) {
            if(input == null) return
            input.emit('getMsg')
            input.on('sendMsg', (msg) => {
                input.destroy()
                alt.toggleGameControls(true)
                input = null
                alt.emitServer(cmd, msg)
            })
        }
    })
}

function createNumberArrayTill(max) {
    let i = 0
    let array = []
    while (i <= max) {
        array.push(i)
        i++
    }
    return array
}