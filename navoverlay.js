
var navOverlay = document.querySelector("nav.nav-overlay");
var navOverlayToggled = false;

function navOverlayToggle(){
    navOverlay.style.height = navOverlayToggled ? "0": "calc(100vh - 31.25px)";
    navOverlayToggled = !navOverlayToggled;
}