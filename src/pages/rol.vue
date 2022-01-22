<template>

  <div class="layout">
    <h1>Rol</h1>

    <ItemList 
      src="/images/7600320516_5005d9dd80_b.jpeg"
      title="Flight 719"
      type="escenari introductori per a Delta Green (en anglès)"
      date="Novembre 2021"
      text="An ancient artifact can trigger many things, more if it’s floating in the sky."
      link="https://fairfieldproject.fandom.com/wiki/Flight_719"
      />
    
    <ItemList 
      src="https://d1vzi28wh99zvq.cloudfront.net/images/2/369090.jpg"
      title="Teixint onades"
      type="aventura la Crida de Cthulhu 7a edició"
      date="Agost 2021"
      text="1925. Vilafany, Baix Camp. Són les dotze de la nit. Una petita embarcació de pesca navega a poc a poc amb la xarxa tirada al mar. Els pescadors estan feinejant, amb constància però de manera tranquil·la. Molt a prop seu s'està a punt de despertar un caos que fa molts de temps que és adormit."
      link="https://www.drivethrurpg.com/product/369090/CATALAN-Teixint-onades"
      />
    
    <ItemList 
      src="/images/bernat-revern.jpg"
      title="La maledicció d'en Bernat Revern"
      type="aventura Cthulhu d100"
      date="abril 2021"
      text="Aventura inclosa al fanzine Tirant lo Drac 2021 pel sistema lliure Cthulhu d100. Uns viatgers arriben de pas a Sant Martí de Lluçanés el 1926. Hi estaran un parell de dies abans de continuar amb el seu viatge. Els ramaders i grangers de la zona es queixen d'una estranya bèstia que està acabant amb els seus animals..."
      link="https://tirant-lo-dau.itch.io/tirant-lo-drac"
      />

    <ItemList 
      src="https://64.media.tumblr.com/800ff08a552ddfc7914ff9dbfe8c55f7/tumblr_inline_ppn25gAFKZ1vrvilm_500.jpg"
      title="Vella escola Pulp!"
      type="joc de rol"
      date="Abril 2021"
      text="Joc d'ambientació pulp que et permetrà crear aventures en les quals arqueòlegs, cercadors de tresors, aventurers i altres personatges s’enfrontaran a personatges misteriosos i malvats. Traducció al català del joc de J. Ramón Balcells feta per Eduard Cot Ros. Maquetació de Grapas&mapas"
      link="https://grapasymapas.com/pulp#catala"
      />

    <ItemList 
      src="/images/crashpanda.png"
      title="Crash Pandas"
      type="joc de rol"
      date="desembre 2020"
      text="Genial sistema per qui tingui ganes d'un divertit one-shot sobre ossos rentadors en una carrera de cotxes il·legals a Los Angeles! Escrit per Grant Howitt. Traducció al català feta per Eduard Cot Ros."
      link="/crash-pandas-cat.pdf"
      />

    <ItemList 
      src="/images/panta.png"
      title="El pantà té gana"
      type="aventura Cthulhu d100"
      date="Properament disponible"
      text="L’any 1962 el poble de Sant Romà va ser sepultat per l’aigua amb la creació del pantà de Sau. Des de llavors un lloc on hi havia hagut molta vida va passar a tenir un nou tipus de vida: aquàtica. Els primers peixos i mol·luscs van anar apareixent, enriquint l’aigua i dotant de vida un lloc al principi mort. Una cosa va portar a l’altra i un dia, no se sap quan, unes noves criatures es van començar a instal·lar al poble submarí. Eren entre peix i homínid i venien de terres llunyanes."
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
