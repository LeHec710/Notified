// set default options
export const spawnerOptions = {
    click: true
}
export const toastOptions = {
    position: "top-right",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "", 
    close: true,
    autoClose: true,
    autoCloseTime: 3000,
    newestOnTop: true,
    type: "info",
    cooldown: 0,
    closeOnClick: true,
    showClose: true,
    showCloseOnHover: true,
    transition: 'slide',
    theme: "default",
}
export const themes = ['default', 'dark', 'colored']
export const types = ["success", "info", "error", "warning", "loading", "reply"]

// adding css
const link1 = "'./src/assets/toast-library/css/animations.css'"
const link2 = "'./src/assets/toast-library/css/style.css'"
document.head.innerHTML += "<link rel='stylesheet' href=" + link1 + ">"
document.head.innerHTML += "<link rel='stylesheet' href=" + link2 + ">"


// initializing spawners
import { set_spawners } from './Spawner.js'
set_spawners()
