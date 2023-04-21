<template>
  <main class="container">
    <h1 class="text-light my-3">Démonstration</h1>

    <div class="section demo">
      <!-- INFORMATIONS -->
      <div class="section-category col card mb-3">
        <div class="card-header">
          <h2 class="mb-0">Informations</h2>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <!-- TITLE -->
            <label for="message">Titre: </label>
            <input class="form-control" type="text" v-model="title" />
          </div>
          <div>
            <!-- MESSAGE -->
            <label for="message">Message: </label>
            <input class="form-control" type="text" v-model="message" />
          </div>
        </div>
      </div>

      <!-- PLACEMENT -->
      <div class="section-category card mb-3">
        <div class="card-header">
          <h2 class="mb-0">Placement</h2>
        </div>
        <div class="card-body">
          <!-- POSITION -->
          <div class="mb-3 d-flex justify-content-start align-items-center">
            <label class="me-3">Position: </label>
            <div class="d-flex flex-row flex-wrap">
              <div class="d-flex w-100">
                <input class="form-check me-2" type="radio" v-model="position" value="top-left" />
                <input class="form-check me-2" type="radio" v-model="position" value="top-center" />
                <input class="form-check" type="radio" v-model="position" value="top-right" />
              </div>
              <div class="d-flex">
                <input class="form-check me-2" type="radio" v-model="position" value="bottom-left" />
                <input class="form-check me-2" type="radio" v-model="position" value="bottom-center" />
                <input class="form-check" type="radio" v-model="position" value="bottom-right" />
              </div>
            </div>
          </div>

          <!-- NEWEST ON TOP -->
          <div class="d-flex">
            <label for="newestOnTop" class="me-2">Dernier au dessus: </label>
            <input
              class="form-check"
              type="checkbox"
              id="newestOnTop"
              v-model="newestOnTop"
            />
          </div>

        </div>
      </div>

      <!-- FERMETURE -->
      <div class="section-category card mb-3">
        <div class="card-header">
          <h2>Fermeture</h2>
        </div>

        <div class="card-body">
          <div class="mb-3 d-flex">
            <!-- AUTOCLOSE -->
            <label for="autoClose" class="me-2">Fermeture auto: </label>
            <input class="form-check" type="checkbox" id="autoClose" v-model="autoClose" />
          </div>

          <!-- AUTOCLOSE TIME -->
          <div v-show="autoClose" class="mb-3">
            <label for="autoCloseTime">Temps fermeture auto (ms): </label><br />
            <input
              class="form-control"
              type="number"
              min="0"
              id="autoCloseTime"
              v-model="autoCloseTime"
            />
          </div>
          
          <!-- CLOSE ON CLICK -->
          <div class="mb-3 d-flex">
            <label for="closeOnClick" class="me-2">Cliquer pour fermer: </label>
            <input
              class="form-check"
              type="checkbox"
              id="closeOnClick"
              v-model="closeOnClick"
            />
          </div>

          <!-- CLOSE BUTTON -->
          <div class="d-flex">
            <label for="close" class="me-2">Bouton fermer: </label>
            <input class="form-check" type="checkbox" id="close" v-model="close" />
          </div>
        </div>
      </div>

      <!-- APPARENCE -->
      <div class="section-category card mb-3">
        <div class="card-header">
          <h2 class="mb-0">Apparence</h2>
        </div>

        <div class="card-body">
          <!-- TYPE -->
          <div class="mb-3">
            <label for="type">Type: </label>
            <select id="type" class="form-select" v-model="type">
              <option v-for="type in types" :value="type">{{ type }}</option>
            </select>
          </div>

          <!-- THEME -->
          <div>
            <label for="type">Thème: </label>
            <select id="type" class="form-select" v-model="theme">
              <option v-for="theme in themes" :value="theme">{{ theme }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- AUTRES -->
      <div class="section-category card mb-3">
        <div class="card-header">
          <h2 class="mb-0">Autres</h2>
        </div>

        <div class="card-body">
          <!-- COOLDOWN TIME -->
          <div class="d-flex">
            <label for="enableCooldown" class="me-2">Attente (avant affichage): </label>
            <input
              class="form-check"
              type="checkbox"
              id="enableCooldown"
              v-model="enableCooldown"
            />
          </div>

          <!-- COOLDOWN -->
          <div>
            <div v-show="enableCooldown" style="margin-left: 1em">
              <label for="cooldown">Temps d'attente (ms): </label>
              <input class="form-control" type="number" id="cooldown" v-model="cooldown" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SPAWN -->
    <div class="position-fixed bottom-0 end-0 m-5">
      <button class="toast-spawner btn btn-light" @click="spawn($event.target)">
        NOTIFY
      </button>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button class="toast-spawner btn btn-light" @click="spawn($event.target)">
        NOTIFY
      </button>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { set_spawners } from "@/assets/toast-library/js/Spawner.js";

let types = ["success", "info", "error", "warning", "loading", "reply"];
const themes = ["default", "dark", "colored"];

const customTitle = ref(false);
const title = ref("");
const message = ref("Notified.");
const position = ref("top-right");
const newestOnTop = ref(false);
const close = ref(true);
const autoClose = ref(true);
const autoCloseTime = ref(3000);
const type = ref("error");
const theme = ref("default");
const enableCooldown = ref(false);
const cooldown = ref(0);
const closeOnClick = ref(true);

onMounted(() => {
  set_spawners();
});

function spawn(spawner) {
  spawner.setAttribute("toaster-title", title.value);
  spawner.setAttribute("toaster-message", message.value);
  spawner.setAttribute("toaster-position", position.value);
  spawner.setAttribute("toaster-type", type.value);
  spawner.setAttribute("toaster-newestOnTop", newestOnTop.value);
  spawner.setAttribute("toaster-close", close.value);
  spawner.setAttribute("toaster-autoClose", autoClose.value);
  spawner.setAttribute("toaster-autoCloseTime", autoCloseTime.value);
  spawner.setAttribute("toaster-cooldown", cooldown.value);
  spawner.setAttribute("toaster-closeOnClick", closeOnClick.value);
  spawner.setAttribute("toaster-theme", theme.value);
  console.log(type.value);
}
</script>
