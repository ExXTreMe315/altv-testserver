/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';

let webView = null;
alt.everyTick(() => {
    let vehicle = alt.Player.local.vehicle;
    if (vehicle) {
        if (!webView) {
            webView = new alt.WebView("http://resource/client/html/speedometer.html")
            webView.focus();
        } else {
            let speed = parseInt((native.getEntitySpeed(vehicle.scriptID) * 3.6).toFixed(0))
        let gear = parseInt(vehicle.gear)
        let rpm = parseInt((vehicle.rpm * 10000).toFixed(0))
        let isEngineRunning = native.getIsVehicleEngineRunning(vehicle.scriptID)
        if (speed == 0) gear = "N"
        if (gear == 0) gear = "R"
        webView.emit('updateSpeed', speed, rpm, gear, isEngineRunning)
        }
    } else {
        if (webView) {
            webView.destroy();
            webView = null;
        }
    }
});

alt.log("Speedometer menu loaded on Client...");