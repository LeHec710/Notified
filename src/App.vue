<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <ul class="menu">
      <div class="menu-logo">
        <router-link to="/">
          <li class="menu-item">NOTIFIED.</li>
        </router-link>
      </div>
      <div class="menu-items">
        <router-link to="/">
          <li class="menu-item">Introduction</li>
        </router-link>
        <router-link to="/demo">
          <li class="menu-item">Démonstration</li>
        </router-link>
          <a href="https://www.hector-bidan.fr" target="_blank">
            <li class="menu-item menu-link">par Hector BIDAN</li>
          </a>
      </div>
    </ul>
  </nav>
  <RouterView />
</template> 