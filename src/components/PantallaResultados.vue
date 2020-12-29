<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 collogo4">
        <img alt="Logotipo Loteria La Veleta" src="@/assets/images/laveleta-blanco2.png" />
      </div>
      <div class="col-lg-4">
        <lnac-resultado v-bind:lnacs="lnac"></lnac-resultado>
        <bono-resultado v-bind:bonos="bono"></bono-resultado>
      </div>
      <div class="col-lg-4">
        <emil-resultado v-bind:emils="emil"></emil-resultado>
        <lapr-resultado v-bind:laprs="lapr"></lapr-resultado>
        <elgr-resultado v-bind:elgrs="elgr"></elgr-resultado>
        <lotu-resultado v-bind:lotus="lotu"></lotu-resultado>
        <qupl-resultado v-bind:qupls="qupl"></qupl-resultado>
      </div>
    </div>
  </div>
</template>

<script>
import EmilResultado from './resultados/EmilResultado.vue'
import LnacResultado from './resultados/LnacResultado.vue'
import LaprResultado from './resultados/LaprResultado.vue'
import BonoResultado from './resultados/BonoResultado.vue'
import ElgrResultado from './resultados/ElgrResultado.vue'
import LotuResultado from './resultados/LotuResultado.vue'
import QuplResultado from './resultados/QuplResultado.vue'

export default {
  name: 'PantallaResultados',
  components: {
    'emil-resultado': EmilResultado,
    'lnac-resultado': LnacResultado,
    'lapr-resultado': LaprResultado,
    'bono-resultado': BonoResultado,
    'elgr-resultado': ElgrResultado,
    'lotu-resultado': LotuResultado,
    'qupl-resultado': QuplResultado
  },
  data: function() {
    return {
      emil: {},
      lnac: {},
      lapr: {},
      bono: {},
      elgr: {},
      laqu: {},
      qgol: {},
      lotu: {},
      qupl: {}
    }
  },
  mounted: function() {
    // Alias the component instance as `vm`, so that we can access it inside the promise function
    const vm = this
    fetch('https://loterialaveleta.com/resultados/dameresultados')
      .then(function(response) {
        // console.log(response)
        return response.json()
      })
      .then(function(data) {
        vm.$data.emil = data.data.emil
        vm.$data.lnac = data.data.lnac
        vm.$data.lapr = data.data.lapr
        vm.$data.bono = data.data.bono
        vm.$data.elgr = data.data.elgr
        vm.$data.laqu = data.data.laqu
        vm.$data.qgol = data.data.qgol
        vm.$data.lotu = data.data.lotu
        vm.$data.qupl = data.data.qupl
      })
  }
}
</script>

<style></style>
