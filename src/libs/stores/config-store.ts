import { writable } from "svelte/store";
import defaults from "./default";

let settingsVisible = writable(defaults.settingsVisible);
let settings = writable(defaults.settings);
let screenWidth = writable(1280);

export {
    settingsVisible,
    settings,
    screenWidth,
};