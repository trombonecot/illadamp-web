<template>

  <div class="layout">
    <h1>Escriptura</h1>

    <ItemList 
      src="/portada-babieca.png"
      title="Constel·lació Babieca"
      type="Novelette"
      date="maig 2016"
      text="Un expert en seguretat informàtica, amb problemes amb la justícia, veu amb impotència com la seva vida s'enfonsa de manera inevitable. Una nit, per casualitat, topa amb una noia que ha estat víctima d'un phishing que ha fructificat en un intent de violació. Investigant qui hi ha darrere d'aquest engany, Linus descobrirà una xarxa criminal molt més gran del que semblava al principi, i en conseqüència, una via per poder ajudar-se, també a si mateix, a redimir-se amb el sistema judicial."
      compralink="https://www.editorialuoc.cat/constellacio-babieca"
      />
    


      
  </div>

</template>

<script setup>
import ItemList from '../components/ItemList.vue';
</script>

<style>
.layout {
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  text-align: left;
}

</style>