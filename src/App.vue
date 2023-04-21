<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand bg-dark py-3">
    <div class="container-fluid">
      <a class="navbar-brand text-light">Notified.</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        MENU
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" tag="a" class="nav-link" aria-current="page">
              Introduction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/demo" tag="a" class="nav-link" aria-current="page">
              Démonstration
            </router-link>
          </li>
          <li class="nav-item d-none d-md-block">
            <a
              class="btn btn-outline-light ms-3"
              aria-current="page"
              href="http://www.hector-bidan.fr"
              target="blank"
            >
              Hector BDN
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
