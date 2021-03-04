<template>
    <div class="item">
      <div class="imatge">
        <img :src="src"/>
      </div>
      <div class="text">
        <h2>{{title}} <span class="tipus"> ( {{type}} )</span></h2>
        <p v-if="date" class="date">{{date}}</p>
        <p>{{text}}</p>
        <a v-if="link" target="_blank" v-on:click="() => track(title)" :href="link">Descarrega!</a>
        <a v-if="compralink" :href="compralink">Compra!</a>

        
      </div>
    </div>
</template>

<script>
export default {
  props: {
      src: String,
      title: String,
      text: String,
      type: String,
      link: String,
      date: String,
      compralink: String
  },
  methods: {
    track (button) {
      this.$gtag.event('tap', {
        'event_category' : 'click',
        'event_label' : button,
      })
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  margin-top: 30px;
  padding-bottom: 30px;
}

@media (max-width: 500px) {
  .item {
    display: block
  }
}



.imatge {
  min-width: 250px;
}

.imatge img {
  width: 100%;
}





.date {
    font-size: 9pt;
}
.text {
  text-align: justify;
  font-style: oblique;
  padding-left: 20px;
}
.text h2 {
  margin-top: 0px;
  margin-bottom: 0px
}
.tipus {
  font-weight: bold;
  font-size: 10pt;
}
</style>