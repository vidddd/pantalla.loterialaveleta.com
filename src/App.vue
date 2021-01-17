<template>
  <div id="app">
    <main class="led-main">
      <transition name="fade">
        <pantalla-botes v-show="muestrario[0]"></pantalla-botes>
      </transition>
      <transition name="fade">
        <pantalla-resultados v-show="muestrario[1]"></pantalla-resultados>
      </transition>
    </main>
        <button v-on:click="cambio">Cambio</button>
  </div>
</template>

<script>
/*
      <transition name="fade">
        <pantalla-web v-show="muestrario[2]"></pantalla-web>
      </transition
      <transition name="fade">
        <pantalla-quiniela v-show="muestrario[3]"></pantalla-quiniela>
      </transition>
      */
import PantallaBotes from './components/PantallaBotes.vue'
import PantallaResultados from './components/PantallaResultados.vue'
//import PantallaWeb from './components/PantallaWeb.vue'
//import PantallaQuiniela from './components/PantallaQuiniela.vue'

export default {
  name: 'App',
  data: function() {
    return {
      muestrario: [true, false]
    }
  },
  methods: {
    cambio: function() {
      let self = this
      let activo = Math.floor(Math.random() * self.muestrario.length)
      self.resetMuestrario(0)
      self.resetMuestrario(1)
      //self.resetMuestrario(2)
      //self.resetMuestrario(3)
      setTimeout(function() {
        self.cambioMuestrario(activo)
      }, 10)
    },
    cambioMuestrario: function(index) {
      let self = this
      self.$set(self.muestrario, index, !self.muestrario[index])
    },
    resetMuestrario: function(index) {
      let self = this
      self.$set(self.muestrario, index, false)
    }
  },
  mounted: function() {
    let self = this
    setInterval(function() {
      self.cambio()
    }, 40000)
  },
  components: {
    'pantalla-botes': PantallaBotes,
    'pantalla-resultados': PantallaResultados
    //'pantalla-web': PantallaWeb,
    //'pantalla-quiniela': PantallaQuiniela
  }
}
</script>
