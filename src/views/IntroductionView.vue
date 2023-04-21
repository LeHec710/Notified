<template>
  <main class="container">
    <h1 class="text-light my-3">Introduction</h1>

    <!-- WHAT IS IT ? -->
    <section class="section card mb-5">
      <div class="card-header">
        <h2 class="mb-0">Qu'est ce que c'est ?</h2>
      </div>
      <div class="card-body">
        <p class="section-description">
          Toastered est une librarie JS pour implémenter simplement un système de
          notifications. J'ai voulu reproduire cette
          <a href="https://www.npmjs.com/package/react-toastify" target="blank"
            >librarie react</a
          >
          en vanilla JS. Elle n'est pas encore complète et optimisée à 100%, mais j'y
          travaille et pleins de nouvelles fonctionnalités arrivent! Cependant, la
          librarie fonctionne et je peux vous montrer l'avancée du projet.
          <br />
          Cette documentation à pour but d'ajouter du contenu et de la crédibilité au
          projet, ainsi que de m'entraîner à utiliser VueJs pour exploiter ma librarie, je
          vais essayer de la compléter au maximum. N'hésitez surtout pas à me donner des
          conseils, avis, remarques, critique ou tout autre information constructive :)
          <br /><br />
          Voici les principales fonctionnalités de toastered:
        </p>
        <ul class="list">
          <li>Choix entre 4 thèmes</li>
          <li>Un tas d'icones et de variantes</li>
          <li>un design épuré</li>
          <li>100% personnalisable</li>
        </ul>
        <p class="section-description">
          Et pleins de fonctionnalités différentes ! Voici un petit aperçu:
        </p>
        <div class="toast-spawner example" toaster-message="Ca marche plutôt bien :)">
          <div class="toast mx-0">
            <p>Essayer maintenant</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTALLATION -->
    <section class="section card mb-5">
      <div class="card-header">
        <h2 class="section-title mb-0">Installation</h2>
      </div>
      <div class="card-body">
        <p class="section-description">
          Vous pouvez dès maintenant télécharger la libraire au format .zip, ou depuis
          gitlab:
        </p>
        <a href="images/toast-library.zip">
          <button class="btn btn-light me-3">Télécharger</button>
        </a>
        <a href="https://github.com/LeHec710/Notified" target="_blank">
          <button class="btn btn-light">Repo git</button>
        </a>
        <br /><br />
        <p class="section-description">
          Il ne vous reste plus qu'à importer le fichier JS (attention à bien utiliser le
          type="module") dans votre fichier HTML. Et voilà ! Vous pouvez maintenant jouer
          avec la librairie et gérer facilement votre système de notifications.
        </p>
        <pre
          class="section-description-code m-0"
        ><code>&lt;script src="toastered/index.js"&gt;&lt;/script&gt;</code>
                </pre>
      </div>
    </section>

    <!-- USAGE -->
    <section class="section card mb-5">
      <div class="card-header">
        <h2 class="section-title mb-0">Utilisation</h2>
      </div>
      <div class="card-body">
        <p class="section-description">
          Une fois que vous avez bien installer la librairie, rien de plus simple, il
          suffit d'importer le module, créer un nouveau toast et l'afficher !
        </p>
        <pre class="section-description-code"><code>
    import Toast from './Toast.js'
    const toast = new Toast({message: 'Mon premier toast !', type: 'success'})
    toast.show()
                </code></pre>
        <div
          class="toast-spawner example mb-2"
          toaster-message="C'est une réussite !"
          toaster-type="success"
        >
          <div class="toast success mx-0">
            <p>Mon premier Toast !</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section card mb-5">
      <div class="card-header">
        <h2 class="section-title mb-0">Fonctionnalités</h2>
      </div>
      <div class="card-body">
        <p class="section-description">
          Voici la liste des fonctionnalités présentes pour l'instant:
        </p>
        <ul class="list">
          <li>Positionner la popup</li>
          <li>Personnaliser le message ainsi que le titre</li>
          <li>Fermer le toast automatiquement</li>
          <li>Le toast le plus récent au dessus</li>
          <li>Changer le type</li>
          <li>Ajouter un délai</li>
          <li>Fermer lors du clique</li>
          <li>Afficher la croix lors du hover</li>
          <li>Personnaliser la transition</li>
          <li>Choisir le thème de son choix</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { set_spawners } from "@/assets/toast-library/js/Spawner.js";

onMounted(() => {
  set_spawners();
});
</script>
