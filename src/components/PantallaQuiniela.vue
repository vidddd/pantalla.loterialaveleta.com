<template>
  <div id="pantalla-quiniela">
    <div class="row">
      <div class="col-sm bloque">
          <laqu-resultado v-bind:partidoslaqu="partidoslaqu" v-bind:laqu="laqu" ></laqu-resultado>
      </div>
      <div class="col-sm bloque">
           <qgol-resultado v-bind:partidosqgol="partidosqgol" v-bind:qgol="qgol"></qgol-resultado>
      </div>
    </div>
  </div>
</template>

<script>
import LaquResultado from './resultados/LaquResultado.vue'
import QgolResultado from './resultados/QgolResultado.vue'

export default {
  name: 'PantallaQuiniela',
  components: {
    'laqu-resultado': LaquResultado,
    'qgol-resultado': QgolResultado
  },
 data: function() {
    return {
      laqu: {},
      qgol: {},
      partidosqgol: {},
      partidoslaqu: {}
    }
  },
  mounted: function() {
    const vm = this
    fetch('https://loterialaveleta.com/resultados/dameresultados')
      .then(function(response) {
        // console.log(response)
        return response.json()
      })
      .then(function(data) {
        vm.$data.laqu = data.data.laqu[0]
        vm.$data.qgol = data.data.qgol[0]
        vm.$data.partidosqgol = JSON.parse(data.data.qgol[0].partidos)
        vm.$data.partidoslaqu = JSON.parse(data.data.laqu[0].partidos)
      })
  }
}
</script>
