import { writable } from "svelte/store";
import defaults from "./default";

let searchProvider = writable(defaults.searchProvider);
let sideBarOpen = writable(defaults.sideBarOpen);

export {
    searchProvider,
    sideBarOpen,
};