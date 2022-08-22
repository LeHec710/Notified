<template>
    <main>
        <h1 class="center">Démonstration</h1>
        <br><br>
        <div class="section demo">

            <!-- INFORMATIONS -->
            <div class="section-category">
                <h2>Informations</h2>
                <br><br>
                <!-- TITLE -->
                <label for="message">Titre: </label>
                <input type="text" v-model="title">
                <br><br>

                <!-- MESSAGE -->
                <label for="message">Message: </label>
                <input type="text" v-model="message">
                <br><br>
            </div>


            <!-- PLACEMENT -->
            <div class="section-category">
                <h2>Placement</h2>
                <br><br>

                <!-- POSITION -->
                <label>Position: </label>
                <div style="display: inline-block; vertical-align: middle;">
                    <input type="radio" v-model="position" value="top-left">
                    <input type="radio" v-model="position" value="top-center">
                    <input type="radio" v-model="position" value="top-right">
                    <br>
                    <input type="radio" v-model="position" value="bottom-left">
                    <input type="radio" v-model="position" value="bottom-center">
                    <input type="radio" v-model="position" value="bottom-right">
                </div>
                <br><br>

                <!-- NEWEST ON TOP -->
                <label for="newestOnTop">Dernier au dessus: </label> <input type="checkbox" id="newestOnTop"
                    v-model="newestOnTop">
                <br><br>
            </div>

            <!-- FERMETURE -->
            <div class="section-category">
                <h2>Fermeture</h2>
                <br><br>

                <!-- AUTOCLOSE -->
                <label for="autoClose">Fermeture auto: </label>
                <input type="checkbox" id="autoClose" v-model="autoClose">
                <br><br>

                <!-- AUTOCLOSE TIME -->
                <div v-show="autoClose" style="margin-left: 1em;">
                    <label for="autoCloseTime">Temps fermeture auto (ms): </label><br>
                    <input type="number" min="0" id="autoCloseTime" v-model="autoCloseTime">
                </div>
                <br><br>

                <!-- CLOSE ON CLICK -->
                <label for="closeOnClick">Cliquer pour fermer: </label>
                <input type="checkbox" id="closeOnClick" v-model="closeOnClick">
                <br><br>

                <!-- CLOSE BUTTON -->
                <label for="close">Bouton fermer: </label> <input type="checkbox" id="close" v-model="close">
                <br><br>
            </div>

            <!-- APPARENCE -->
            <div class="section-category">
                <h2>Apparence</h2>
                <br><br>

                <!-- TYPE -->
                <label for="type">Type: </label>
                <select id="type" v-model="type">
                    <option v-for="type in types" :value="type">{{ type }}</option>
                </select>
                <br><br>


                <!-- THEME -->
                <label for="type">Thème: </label>
                <select id="type" v-model="theme">
                    <option v-for="theme in themes" :value="theme">{{ theme }}</option>
                </select>
                <br><br>
            </div>

            <!-- AUTRES -->
            <div class="section-category">
                <h2>Autres</h2>
                <br><br>

                <!-- COOLDOWN TIME -->
                <label for="enableCooldown">Attente (avant affichage): </label>
                <input type="checkbox" id="enableCooldown" v-model="enableCooldown">
                <br><br>

                <!-- COOLDOWN -->
                <div v-show="enableCooldown" style="margin-left: 1em">
                    <label for="cooldown">Temps d'attente (ms): </label>
                    <input type="number" id="cooldown" v-model="cooldown">
                </div>
            </div>
        </div>

        <!-- SPAWNER -->
        <div style="width: 100%; text-align: center;">
            <button class="toast-spawner big center" @click="spawn($event.target)">NOTIFY</button>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { set_spawners } from '@/assets/toast-library/js/Spawner.js'

let types = ["success", "info", "error", "warning", "loading", "reply"]
const themes = ['default', 'dark', 'colored']

const customTitle = ref(false)
const title = ref("")
const message = ref("Notified.")
const position = ref("top-right")
const newestOnTop = ref(false)
const close = ref(true)
const autoClose = ref(true)
const autoCloseTime = ref(3000)
const type = ref("error")
const theme = ref("default")
const enableCooldown = ref(false)
const cooldown = ref(0)
const closeOnClick = ref(true)

onMounted(() => {
    set_spawners()
})


function spawn(spawner) {
    spawner.setAttribute("toaster-title", title.value)
    spawner.setAttribute("toaster-message", message.value)
    spawner.setAttribute("toaster-position", position.value)
    spawner.setAttribute("toaster-type", type.value)
    spawner.setAttribute("toaster-newestOnTop", newestOnTop.value)
    spawner.setAttribute("toaster-close", close.value)
    spawner.setAttribute("toaster-autoClose", autoClose.value)
    spawner.setAttribute("toaster-autoCloseTime", autoCloseTime.value)
    spawner.setAttribute("toaster-cooldown", cooldown.value)
    spawner.setAttribute("toaster-closeOnClick", closeOnClick.value)
    spawner.setAttribute("toaster-theme", theme.value)
    console.log(type.value);
}
</script>