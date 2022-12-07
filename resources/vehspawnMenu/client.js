import * as alt from 'alt-client';
import * as chat from "chat";
import * as game from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUI';

//Hauptmenu
const menu = new NativeUI.Menu("Shops", "Fahrzeughändler auf Miami", new NativeUI.Point(1450, 50));
menu.GetTitle().Scale = 1.2;
menu.GetTitle().DropShadow = true;


//Autohändler
let needCars = (new NativeUI.UIMenuItem("NeedCars", "NeedCars am Stadtpark"));                                  //Item Erstellt
menu.AddItem(needCars);                                                                                         //Item zugewiesen

let mosleysDrives = (new NativeUI.UIMenuItem("Moeleys Drives", "Mosleys Drives In Davis"));                     //Item Erstellt
menu.AddItem(mosleysDrives);                                                                                    //Item zugewiesen

let pdm = (new NativeUI.UIMenuItem("PDM", "Premium Deluxe Motorsports in Pillbox Hill"));                       //Item Erstellt
menu.AddItem(pdm);                                                                                              //Item zugewiesen

let galaxyCars = (new NativeUI.UIMenuItem("Galaxy Cars", "Galaxy Cars in Rockford"));                           //Item Erstellt
menu.AddItem(galaxyCars);                                                                                       //Item zugewiesen

let jimsTrucks = (new NativeUI.UIMenuItem("Jims Trucks", "Jims Trucks in La Mesa"));                            //Item Erstellt
menu.AddItem(jimsTrucks);                                                                                       //Item zugewiesen

let larrysJeep = (new NativeUI.UIMenuItem("Larrys Jeep", "Larrys Jeep in Harmony"));                            //Item Erstellt
menu.AddItem(larrysJeep);                                                                                       //Item zugewiesen

let sandersMotorbikes = (new NativeUI.UIMenuItem("Sanders Motorbikes", "Sanders Motorbikes in Pillbox Hill"));  //Item Erstellt
menu.AddItem(sandersMotorbikes);                                                                                //Item zugewiesen

//NeedCars
const needCarsMenu = new NativeUI.Menu("NeedCars", "Wähle ein Fahrzeug von NeedCars", new NativeUI.Point(1450, 50));        //Menü Erstellt
needCarsMenu.GetTitle().Scale = 1.2;                                                                                        //Schriftgröße
needCarsMenu.GetTitle().DropShadow = true;                                                                                  //Dropshadow
menu.AddSubMenu(needCarsMenu, needCars);                                                                                    //Zum Hauptmenü zuweisen

    //Fahrzeuge
    let dynasty = (new NativeUI.UIMenuItem("Dynasty", "Dynasty Spawnen"));
    needCarsMenu.AddItem(dynasty);
    
    let bodhi = (new NativeUI.UIMenuItem("Bodhi", "Bodhi Spawnen"));
    needCarsMenu.AddItem(bodhi);
    
    let rustyRebell = (new NativeUI.UIMenuItem("Rusty Rebell", "Rusty Rebell Spawnen"));
    needCarsMenu.AddItem(rustyRebell);
    
    let warrener = (new NativeUI.UIMenuItem("Warrener", "Warrener Spawnen"));
    needCarsMenu.AddItem(warrener);
    
    let blista = (new NativeUI.UIMenuItem("Blista", "Blista Spawnen"));
    needCarsMenu.AddItem(blista);
    
    let intruder = (new NativeUI.UIMenuItem("Intruder", "Intruder Spawnen"));
    needCarsMenu.AddItem(intruder);
    

//Mosley Drives
const mosleysMenu = new NativeUI.Menu("Mosleys Drives", "Wähle ein Fahrzeug von Mosleys Drives", new NativeUI.Point(1450, 50));         //Menü Erstellt
mosleysMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
mosleysMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(mosleysMenu, mosleysDrives);                                                                                            //Zum Hauptmenü zuweisen

    //Fahrzeuge
    let peyote = (new NativeUI.UIMenuItem("Peyote", "Peyote Spawnen"));
    mosleysMenu.AddItem(peyote);
    
    let buccaneer = (new NativeUI.UIMenuItem("Buccaneer", "Buccaneer Spawnen"));
    mosleysMenu.AddItem(buccaneer);

    let buffalo = (new NativeUI.UIMenuItem("Buffalo", "Buffalo Spawnen"));
    mosleysMenu.AddItem(buffalo);
    
    let dukes = (new NativeUI.UIMenuItem("Dukes", "Dukes Spawnen"));
    mosleysMenu.AddItem(dukes);
    
    let virgo = (new NativeUI.UIMenuItem("Virgo", "Virgo Spawnen"));
    mosleysMenu.AddItem(virgo);
    
    let voodoo = (new NativeUI.UIMenuItem("Voodoo", "Voodoo Spawnen"));
    mosleysMenu.AddItem(voodoo);
    
    let schwarzer = (new NativeUI.UIMenuItem("Schwarzer", "Schwarzer Spawnen"));
    mosleysMenu.AddItem(schwarzer);
    
    let sabreTurbo = (new NativeUI.UIMenuItem("Sabre Turbo", "Sabre Turbo Spawnen"));
    mosleysMenu.AddItem(sabreTurbo);
    
    let prairie = (new NativeUI.UIMenuItem("Prairie", "Prairie Spawnen"));
    mosleysMenu.AddItem(prairie);
    
    let jackal = (new NativeUI.UIMenuItem("Jackal", "Jackal Spawnen"));
    mosleysMenu.AddItem(jackal);

//PDM
const pdmMenu = new NativeUI.Menu("PDM", "Wähle von Premium Deluxe Motorsports", new NativeUI.Point(1450, 50));         //Menü Erstellt
pdmMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
pdmMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(pdmMenu, pdm);                                                                                            //Zum Hauptmenü zuweisen
    
    //Fahrzeuge
    let cyclone = (new NativeUI.UIMenuItem('Cyclone', 'Cyclone Spawnen'));
    pdmMenu.AddItem(cyclone);

    let vstr = (new NativeUI.UIMenuItem('V-STR', 'V-STR Spawnen'));
    pdmMenu.AddItem(vstr);

    let neo = (new NativeUI.UIMenuItem('NEO', 'NEO Spawnen'));
    pdmMenu.AddItem(neo);

    let schafter = (new NativeUI.UIMenuItem('Schafter V12', 'Schafter V12 Spawnen'));
    pdmMenu.AddItem(schafter);

    let zion = (new NativeUI.UIMenuItem('Zion', 'Zion Spawnen'));
    pdmMenu.AddItem(zion);

    let komoda = (new NativeUI.UIMenuItem('Komoda', 'Komoda Spawnen'));
    pdmMenu.AddItem(komoda);

    let revolter = (new NativeUI.UIMenuItem('Revolter', 'Revolter Spawnen'));
    pdmMenu.AddItem(revolter);

    let sultanRs = (new NativeUI.UIMenuItem('Sultan RS', 'Sultan RS Spawnen'));
    pdmMenu.AddItem(sultanRs);

    let exemplar = (new NativeUI.UIMenuItem('Exemplar', 'Exemplar Spawnen'));
    pdmMenu.AddItem(exemplar);

    let jugular = (new NativeUI.UIMenuItem('Jugular', 'Jugular Spawnen'));
    pdmMenu.AddItem(jugular);

//Galaxy Cars
const galaxyMenu = new NativeUI.Menu("Galaxy Cars", "Wähle ein Fahrzeug von Galaxy Cars", new NativeUI.Point(1450, 50));         //Menü Erstellt
galaxyMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
galaxyMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(galaxyMenu, galaxyCars);  
    
    //Fahrzeuge
    let entityXxr = (new NativeUI.UIMenuItem("Entiti XXR", "Entiti XXR Spawnen"));
    galaxyMenu.AddItem(entityXxr);
    
    let thrax = (new NativeUI.UIMenuItem("Thrax", "Thrax Spawnen"));
    galaxyMenu.AddItem(thrax);
    
    let t20 = (new NativeUI.UIMenuItem("T20", "T20 Spawnen"));
    galaxyMenu.AddItem(t20);
    
    let autarch = (new NativeUI.UIMenuItem("Autarch", "Autarch Spawnen"));
    galaxyMenu.AddItem(autarch);
    
    let tyrant = (new NativeUI.UIMenuItem("Tyrant", "Tyrant Spawnen"));
    galaxyMenu.AddItem(tyrant);
    
    let krieger = (new NativeUI.UIMenuItem("Krieger", "Krieger Spawnen"));
    galaxyMenu.AddItem(krieger);
    
    let vacca = (new NativeUI.UIMenuItem("Vacca", "Vacca Spawnen"));
    galaxyMenu.AddItem(vacca);
    
    let zentorno = (new NativeUI.UIMenuItem("Zentorno", "Zentorno Spawnen"));
    galaxyMenu.AddItem(zentorno);

//Jims Truck
const jimsMenu = new NativeUI.Menu("Jims Truck", "Wähle ein Fahrzeug von Jims Truck", new NativeUI.Point(1450, 50));         //Menü Erstellt
jimsMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
jimsMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(jimsMenu, jimsTrucks);  
    
    //Fahrzeuge
    let surfer = (new NativeUI.UIMenuItem('Surfer', 'Surfer Spawnen'));
    jimsMenu.AddItem(surfer);

    let burrito = (new NativeUI.UIMenuItem('Burrito', 'Burrito Spawnen'));
    jimsMenu.AddItem(burrito);

    let speedo = (new NativeUI.UIMenuItem('Speedo', 'Speedo Spawnen'));
    jimsMenu.AddItem(speedo);

    let tanker = (new NativeUI.UIMenuItem('Tanker', 'Tanker Spawnen'));
    jimsMenu.AddItem(tanker);

    let docktrailer = (new NativeUI.UIMenuItem('Docktrailer', 'Docktrailer Spawnen'));
    jimsMenu.AddItem(docktrailer);

    let packer = (new NativeUI.UIMenuItem('Packer', 'Packer Spawnen'));
    jimsMenu.AddItem(packer);

    let phantom = (new NativeUI.UIMenuItem('Phantom', 'Phantom Spawnen'));
    jimsMenu.AddItem(phantom);

    let mule = (new NativeUI.UIMenuItem('Mule', 'Mule Spawnen'));
    jimsMenu.AddItem(mule);

    let benson = (new NativeUI.UIMenuItem('Benson', 'Benson Spawnen'));
    jimsMenu.AddItem(benson);

    let pounder = (new NativeUI.UIMenuItem('Pounder', 'Pounder Spawnen'));
    jimsMenu.AddItem(pounder);

//Larrys Jeep
const larrysMenu = new NativeUI.Menu("Larrys Jeep", "Wähle ein Fahrzeug von Larrys Jeep", new NativeUI.Point(1450, 50));         //Menü Erstellt
larrysMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
larrysMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(larrysMenu, larrysJeep);  
    
    //Fahrzeuge
    let dubsta2 = (new NativeUI.UIMenuItem('Dubsta II', 'Dubsta II Spawnen'));
    larrysMenu.AddItem(dubsta2);

    let sandkingXl = (new NativeUI.UIMenuItem('Sandking XL', 'Sandking XL Spawnen'));
    larrysMenu.AddItem(sandkingXl);

    let huntleyS = (new NativeUI.UIMenuItem('Huntley S', 'Huntley S Spawnen'));
    larrysMenu.AddItem(huntleyS);

    let novak = (new NativeUI.UIMenuItem('Novak', 'Novak Spawnen'));
    larrysMenu.AddItem(novak);

    let caracara = (new NativeUI.UIMenuItem('Caracara 4x4', 'Caracara 4x4 Spawnen'));
    larrysMenu.AddItem(caracara);

    let xls = (new NativeUI.UIMenuItem('XLS', 'XLS Spawnen'));
    larrysMenu.AddItem(xls);

    let fq = (new NativeUI.UIMenuItem('FQ 2', 'FQ 2 Spawnen'));
    larrysMenu.AddItem(fq);

    let ballerLeLwb = (new NativeUI.UIMenuItem('Baller LE LWB', 'Baller LE LWB Spawnen'));
    larrysMenu.AddItem(ballerLeLwb);

    let guardian = (new NativeUI.UIMenuItem('Guardian', 'Guardian Spawnen'));
    larrysMenu.AddItem(guardian);

    let reblaGts = (new NativeUI.UIMenuItem('Rebla GTS', 'Rebla GTS Spawnen'));
    larrysMenu.AddItem(reblaGts);
//Sanders Motorbike
const sandersMenu = new NativeUI.Menu("Sanders Motorbikes", "Wähle ein Fahrzeug von Sanders Motorbikes", new NativeUI.Point(1450, 50));         //Menü Erstellt
sandersMenu.GetTitle().Scale = 1.2;                                                                                                     //Schriftgröße
sandersMenu.GetTitle().DropShadow = true;                                                                                               //Dropshadow
menu.AddSubMenu(sandersMenu, sandersMotorbikes);  
    
    //Fahrzeuge
    let ratBike = (new NativeUI.UIMenuItem('Rat Bike', 'Rat Bike Spawnen'));
    sandersMenu.AddItem(ratBike);

    let daemon = (new NativeUI.UIMenuItem('Daemon', 'Daemon Spawnen'));
    sandersMenu.AddItem(daemon);

    let blazer = (new NativeUI.UIMenuItem('Blazer', 'Blazer Spawnen'));
    sandersMenu.AddItem(blazer);

    let bagger = (new NativeUI.UIMenuItem('Bagger', 'Bagger Spawnen'));
    sandersMenu.AddItem(bagger);

    let zombie = (new NativeUI.UIMenuItem('Zombie Chopper', 'Zombie Chopper Spawnen'));
    sandersMenu.AddItem(zombie);

    let cliffhanger = (new NativeUI.UIMenuItem('Cliffhanger', 'Cliffhanger Spawnen'));
    sandersMenu.AddItem(cliffhanger);

    let bf = (new NativeUI.UIMenuItem('BF400', 'BF400 Spawnen'));
    sandersMenu.AddItem(bf);

    let bati = (new NativeUI.UIMenuItem('Bati 801', 'Bati 801 Spawnen'));
    sandersMenu.AddItem(bati);

    let avarus = (new NativeUI.UIMenuItem('Avarus', 'Avarus Spawnen'));
    sandersMenu.AddItem(avarus);

    let hakuchouDrag = (new NativeUI.UIMenuItem('Hakuchou Drag', 'Hakuchou Drag Spawnen'));
    sandersMenu.AddItem(hakuchouDrag);

//Funktionen zuweisen
needCarsMenu.ItemSelect.on(item =>{
    if(item == dynasty) {
        alt.emitServer('spawn:dynasty'); 
    }
    
    if(item == bodhi) {
        alt.emitServer('spawn:bodhi'); 
    }
    
    if(item == rustyRebell) {
        alt.emitServer('spawn:rustyRebell'); 
    }
    
    if(item == warrener) {
        alt.emitServer('spawn:warrener'); 
    }
    
    if(item == blista) {
        alt.emitServer('spawn:blista'); 
    }
    
    if(item == intruder) {
        alt.emitServer('spawn:intruder'); 
    }
});

mosleysMenu.ItemSelect.on(item =>{
    if(item == peyote) {
        alt.emitServer('spawn:peyote'); 
    }
    
    if(item == buccaneer) {
        alt.emitServer('spawn:buccaneer'); 
    }
    
    if(item == buffalo) {
        alt.emitServer('spawn:buffalo'); 
    }
    
    if(item == dukes) {
        alt.emitServer('spawn:dukes'); 
    }
    
    if(item == virgo) {
        alt.emitServer('spawn:virgo'); 
    }
    
    if(item == voodoo) {
        alt.emitServer('spawn:voodoo'); 
    }
    if(item == schwarzer) {
        alt.emitServer('spawn:schwarzer'); 
    }
    
    if(item == sabreTurbo) {
        alt.emitServer('spawn:sabreTurbo'); 
    }
    
    if(item == prairie) {
        alt.emitServer('spawn:prairie'); 
    }
    
    if(item == jackal) {
        alt.emitServer('spawn:jackal'); 
    }
    
});

pdmMenu.ItemSelect.on(item =>{
    if(item == cyclone) {
        alt.emitServer('spawn:cyclone'); 
    }
    if(item == vstr) {
        alt.emitServer('spawn:vstr'); 
    }
    if(item == neo) {
        alt.emitServer('spawn:neo'); 
    }
    if(item == schafter) {
        alt.emitServer('spawn:schafter'); 
    }
    if(item == zion) {
        alt.emitServer('spawn:zion'); 
    }
    if(item == komoda) {
        alt.emitServer('spawn:komoda'); 
    }
    if(item == revolter) {
        alt.emitServer('spawn:revolter'); 
    }
    if(item == sultanRs) {
        alt.emitServer('spawn:sultanRs'); 
    }
    if(item == exemplar) {
        alt.emitServer('spawn:exemplar'); 
    }
    if(item == jugular) {
        alt.emitServer('spawn:jugular'); 
    } 
});

galaxyMenu.ItemSelect.on(item =>{
    if(item == entityXxr) {
        alt.emitServer('spawn:entityXxr'); 
    }
    if(item == thrax) {
        alt.emitServer('spawn:thrax'); 
    }
    if(item == t20) {
        alt.emitServer('spawn:t20'); 
    }
    if(item == autarch) {
        alt.emitServer('spawn:autarch'); 
    }
    if(item == tyrant) {
        alt.emitServer('spawn:tyrant'); 
    }
    if(item == krieger) {
        alt.emitServer('spawn:krieger'); 
    }
    if(item == vacca) {
        alt.emitServer('spawn:vacca'); 
    }
    if(item == zentorno) {
        alt.emitServer('spawn:zentorno'); 
    }
});

jimsMenu.ItemSelect.on(item =>{
    if(item == surfer) {
        alt.emitServer('spawn:surfer'); 
    }
    if(item == burrito) {
        alt.emitServer('spawn:burrito'); 
    }
    if(item == speedo) {
        alt.emitServer('spawn:speedo'); 
    }
    if(item == tanker) {
        alt.emitServer('spawn:tanker'); 
    }
    if(item == docktrailer) {
        alt.emitServer('spawn:docktrailer'); 
    }
    if(item == packer) {
        alt.emitServer('spawn:packer'); 
    }
    if(item == phantom) {
        alt.emitServer('spawn:phantom'); 
    }
    if(item == mule) {
        alt.emitServer('spawn:mule'); 
    }
    if(item == benson) {
        alt.emitServer('spawn:benson'); 
    }
    if(item == pounder) {
        alt.emitServer('spawn:pounder'); 
    }
});

larrysMenu.ItemSelect.on(item =>{
    if(item == dubsta2) {
        alt.emitServer('spawn:dubsta2'); 
    }
    if(item == sandkingXl) {
        alt.emitServer('spawn:sandkingXl'); 
    }
    if(item == huntleyS) {
        alt.emitServer('spawn:huntleyS'); 
    }
    if(item == novak) {
        alt.emitServer('spawn:novak'); 
    }
    if(item == caracara) {
        alt.emitServer('spawn:caracara'); 
    }
    if(item == xls) {
        alt.emitServer('spawn:xls'); 
    }
    if(item == fq) {
        alt.emitServer('spawn:fq'); 
    }
    if(item == ballerLeLwb) {
        alt.emitServer('spawn:ballerLeLwb'); 
    }
    if(item == guardian) {
        alt.emitServer('spawn:guardian'); 
    }
    if(item == reblaGts) {
        alt.emitServer('spawn:reblaGts'); 
    }
});

sandersMenu.ItemSelect.on(item =>{
    if(item == ratBike) {
        alt.emitServer('spawn:ratBike'); 
    }
    if(item == daemon) {
        alt.emitServer('spawn:daemon'); 
    }
    if(item == blazer) {
        alt.emitServer('spawn:blazer'); 
    }
    if(item == bagger) {
        alt.emitServer('spawn:bagger'); 
    }
    if(item == zombie) {
        alt.emitServer('spawn:zombie'); 
    }
    if(item == cliffhanger) {
        alt.emitServer('spawn:cliffhanger'); 
    }
    if(item == bf) {
        alt.emitServer('spawn:bf'); 
    }
    if(item == bati) {
        alt.emitServer('spawn:bati'); 
    }
    if(item == avarus) {
        alt.emitServer('spawn:avarus'); 
    }
    if(item == hakuchouDrag) {
        alt.emitServer('spawn:hakuchouDrag'); 
    }
});


//Keys zuweisen
alt.on('keyup', (key) => {
    if (key === 113) {
        if (menu.Visible || needCarsMenu.Visible || mosleysMenu.Visible || pdmMenu.Visible || galaxyMenu.Visible || jimsMenu.Visible || larrysMenu.Visible || sandersMenu.Visible){
            menu.Close();
            needCarsMenu.Close();
            mosleysMenu.Close();
            pdmMenu.Close();
            galaxyMenu.Close();
            jimsMenu.Close();
            larrysMenu.Close();
            sandersMenu.Close();
        }
        else
            menu.Open();
    }
});

alt.on('keyup', (key) => {
    if (key === 27) {
        if (menu.Visible || needCarsMenu.Visible || mosleysMenu.Visible || pdmMenu.Visible || galaxyMenu.Visible || jimsMenu.Visible || larrysMenu.Visible || sandersMenu.Visible){
            menu.Close();
            needCarsMenu.Close();
            mosleysMenu.Close();
            pdmMenu.Close();
            galaxyMenu.Close();
            jimsMenu.Close();
            larrysMenu.Close();
            sandersMenu.Close();
        }
    }
});
