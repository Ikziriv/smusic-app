import { writable } from "svelte/store";
import defaults from "./default";

let showAddAlbumModal = writable(defaults.showAddAlbumModal);
let addAlbumModalOptions = writable({});

export {
    showAddAlbumModal,
    addAlbumModalOptions,
};