import { types, toastOptions } from "./toaster.js";
import { set_spawners } from "./Spawner.js";

export default class Toast {
  _toastElem;
  _containerElem;
  _options;
  constructor(options = toastOptions) {
    this._toastElem = document.createElement("div");
    this._toastElem.classList.add("toast");
    this.setOptions(options);
    // this.show()
  }

  setOptions(options) {
    const default_options = toastOptions;
    let new_options = [];
    Object.entries(default_options).forEach((default_key) => {
      new_options[default_key[0]] = default_key[1];
      Object.entries(options).forEach((new_key) => {
        if (default_key[0] == new_key[0]) {
          new_options[default_key[0]] = new_key[1];
          // default_options[default_key[0]] = new_key[1]
        }
      });
    });
    this._options = new_options;

    Object.entries(this._options).forEach(([key, value]) => {
      this[key] = value;
    });
    return this._options;
  }

  getOption(key) {
    return this._options[key];
  }

  set message(value) {
    let descriptionElem =
      this._toastElem.querySelector(".toast-description") || null;
    if (!descriptionElem) {
      descriptionElem = document.createElement("p");
      descriptionElem.classList.add("toast-description");
      this._toastElem.insertAdjacentElement("beforeend", descriptionElem);
    }
    descriptionElem.textContent = value;
  }

  set type(value) {
    if (!types.includes(value)) return;
    const path = "./src/assets/toast-library/icons/";

    let titleElem = this._toastElem.querySelector(".toast-title") || null;
    if (!titleElem) {
      titleElem = document.createElement("h1");
      titleElem.classList.add("toast-title");
      this._toastElem.insertAdjacentElement("afterbegin", titleElem);
    }
    let typeIconElem = this._toastElem.querySelector(".toast-icon") || null;
    if (!typeIconElem) {
      const typeIcon = document.createElement("div");
      typeIcon.classList.add("toast-icon");
      const icon = document.createElement("img");

      if (this.getOption("theme")) {
        if (this.getOption("theme").includes("colored")) {
          icon.setAttribute("src", path + "black-" + value + ".png");
        } else {
          icon.setAttribute("src", path + value + ".png");
        }
      }

      typeIcon.append(icon);
      this._toastElem.append(typeIcon);
    }
    this._toastElem.classList.add(value);
    if (!this.getOption("title")) titleElem.textContent = value;
  }

  set title(value) {
    let titleElem = this._toastElem.querySelector(".toast-title") || null;
    if (!titleElem) {
      titleElem = document.createElement("h1");
      titleElem.classList.add("toast-title");
      this._toastElem.insertAdjacentElement("afterbegin", titleElem);
    }
    titleElem.textContent = value;
  }

  set theme(value) {
    this._toastElem.classList.add(value);
  }

  set autoClose(value) {
    if (value == true || value == "true") {
      setTimeout(() => {
        this.remove();
      }, this.getOption("autoCloseTime"));
    }
  }

  set closeOnClick(value) {
    if (value == true || value == "true") {
      this._toastElem.addEventListener("click", () => {
        this.remove();
      });
    }
  }

  set close(value) {
    const path = "./src/assets/toast-library/icons/";
    if (value == true || value == "true") {
      let closeElem = this._toastElem.querySelector(".toast-close") || null;
      if (!closeElem) {
        const close = document.createElement("img");
        if (this.getOption("theme")) {
          if (this.getOption("theme").includes("colored")) {
            close.setAttribute("src", path + "close.png");
          } else if(this.getOption("theme").includes("dark")) {
            close.setAttribute("src", path + "close.png");
          } else {
            close.setAttribute("src", path + "black-close.png");
          }
        }
        close.classList.add("toast-close");
        if (this.getOption("showClose")) {
          close.classList.add("disabled");
        }
        close.addEventListener("click", () => {
          this.remove();
        });

        // mouse enter
        close.addEventListener("mouseenter", () => {
          close.classList.remove("hidden");
          close.classList.remove("disabled");
          close.classList.add("visible");
        });

        // mouse leave
        close.addEventListener("mouseleave", () => {
          if (this.getOption("showCloseOnHover")) {
            close.classList.remove("visible");
            close.classList.remove("hidden");
            close.classList.add("disabled");
          } else {
            close.classList.remove("visible");
            close.classList.remove("disabled");
            close.classList.add("hidden");
          }
          if (this.getOption("showClose")) {
            close.classList.remove("visible");
            close.classList.remove("hidden");
            close.classList.add("disabled");
          }
        });
        this._toastElem.append(close);
      }
    }
  }

  set showCloseOnHover(value) {
    if (value == true && this.getOption("close")) {
      let closeElem = this._toastElem.querySelector(".toast-close") || null;
      this._toastElem.addEventListener("mouseenter", () => {
        if (!this.getOption("closeOnClick")) {
          closeElem.classList.add("disabled");
          closeElem.classList.remove("hidden");
          closeElem.classList.remove("visible");
        } else {
          closeElem.classList.add("visible");
          closeElem.classList.remove("hidden");
          closeElem.classList.remove("disabled");
        }
      });
      this._toastElem.addEventListener("mouseleave", () => {
        if (!this.getOption("showClose")) {
          closeElem.classList.remove("visible");
          closeElem.classList.remove("disabled");
          closeElem.classList.add("hidden");
        } else {
          closeElem.classList.remove("visible");
          closeElem.classList.remove("hidden");
          closeElem.classList.add("disabled");
        }
      });
    }
  }

  set transition(value) {
    this.animate(value);
  }

  animate(animation = this.getOption("transition")) {
    const transition = this.getOption("transition");
    // slide in
    if (transition == "slide") {
      if (this.getOption("position").includes("top-center"))
        this._toastElem.style.animation = "slideInTopCenter .5s ease";
      else if (this.getOption("position").includes("bottom-center"))
        this._toastElem.style.animation = "slideInBottomCenter .5s ease";
      else if (this.getOption("position").includes("left"))
        this._toastElem.style.animation = "slideInLeft .5s ease";
      else if (this.getOption("position").includes("right"))
        this._toastElem.style.animation = "slideInRight .5s ease";
    }
    // slide out
    if (animation == "slideOut") {
      if (this.getOption("position").includes("top-center")) {
        this._toastElem.style.animation = "slideOutTopCenter .5s ease";
      } else if (this.getOption("position").includes("bottom-center"))
        this._toastElem.style.animation = "slideOutBottomCenter .5s ease";
      else if (this.getOption("position").includes("left"))
        this._toastElem.style.animation = "slideOutLeft .5s ease";
      else if (this.getOption("position").includes("right")) {
        this._toastElem.style.animation = "slideOutRight .5s ease";
      }
    }
    // fade in
    if (transition == "fade") {
      this._toastElem.style.animation = "fadeIn 1s ease";
    }
    // fade out
    if (animation == "fadeOut") {
      this._toastElem.style.animation = "fadeOut 1s ease";
    }
    // bounce in
    if (transition == "bounce") {
      this._toastElem.style.animation = "bounceIn .5s ease";
    }
    // bounce out
    if (animation == "bounceOut") {
      this._toastElem.style.animation = "bounceOut .5s ease";
    }
  }

  set color(value) {
    this._toastElem.style.setProperty("--color", value);
  }

  show() {
    const selector = ".toast-container";
    const containerElem =
      document.querySelector(".toast-container[data-position='" + this.getOption("position") + "']") ||
      this.createContainer(this.getOption("position"));

    setTimeout(() => {
      if (this.getOption("newestOnTop") == "true") {
        containerElem.insertAdjacentElement("afterbegin", this._toastElem);
      } else {
        containerElem.insertAdjacentElement("beforeend", this._toastElem);
      }
    }, this.getOption("cooldown"));
  }

  remove() {
    this._toastElem.classList.remove("show");
    this.animate(this.getOption("transition") + "Out");
    this._toastElem.addEventListener("animationend", () => {
      this._toastElem.remove();
    });
  }

  createContainer(position) {
    const containerElem = document.createElement("div");
    containerElem.classList.add("toast-container");
    containerElem.dataset.position = position;
    document.querySelector("#app").insertAdjacentElement("afterend", containerElem);
    return containerElem;
  }
}
