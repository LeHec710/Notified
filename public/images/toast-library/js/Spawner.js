import Toast from "./Toast.js";
import { toastOptions } from "./toaster.js";

export default class Spawner {
  _spawnerElem;
  _toastOptions;
  constructor(elem) {
    this._spawnerElem = elem;
    this._spawnerElem.addEventListener("click", () => {
      this.toast(this._spawnerElem);
    });
  }

  toast(elem) {
    new Toast(set_options(elem)).show();
  }
}

function set_options(elem) {
  let new_options = [];
  Object.entries(toastOptions).forEach((key) => {
    new_options[key[0]] = key[1];
    if (elem.hasAttribute("toaster-" + key[0])) {
      new_options[key[0]] = elem.getAttribute("toaster-" + key[0]);
    }
  });
  return new_options;
}

export function set_spawners() {
  let spawners = document.querySelectorAll(".toast-spawner");
  spawners.forEach((spawner) => {
    return new Spawner(spawner);
  });
}
