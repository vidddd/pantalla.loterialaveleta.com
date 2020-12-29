<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm bloque collogo">
        <Bruja />
      </div>
      <div class="col-sm bloque bloque-botes" style="height:710px;">
        <hooper ref="carrusel" :settings="hooperSettings">
          <slide>
            <emil-bote v-bind:emilbote="emilbote"></emil-bote>
          </slide>
          <slide>
            <lnac-bote v-bind:lnacbote="lnacbote"></lnac-bote>
          </slide>
          <slide>
            <lapr-bote v-bind:laprbote="laprbote"></lapr-bote>
          </slide>
          <slide>
            <elgr-bote v-bind:elgrbote="elgrbote"></elgr-bote>
          </slide>
          <slide>
            <bono-bote v-bind:bonobote="bonobote"></bono-bote>
          </slide>
          <slide>
            <laqu-bote v-bind:laqubote="laqubote"></laqu-bote>
          </slide>
          <slide>
            <qgol-bote v-bind:qgolbote="qgolbote"></qgol-bote>
          </slide>
          <slide>
            <lotu-bote v-bind:lotubote="lotubote"></lotu-bote>
          </slide>
          <slide>
            <qupl-bote v-bind:quplbote="quplbote"></qupl-bote>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import Bruja from './botes/Bruja.vue'
import EmilBote from './botes/EmilBote.vue'
import LnacBote from './botes/LnacBote.vue'
import LaprBote from './botes/LaprBote.vue'
import BonoBote from './botes/BonoBote.vue'
import ElgrBote from './botes/ElgrBote.vue'
import LaquBote from './botes/LaquBote.vue'
import QgolBote from './botes/QgolBote.vue'
import LotuBote from './botes/LotuBote.vue'
import QuplBote from './botes/QuplBote.vue'

export default {
  name: 'PantallaBotes',
  components: {
    Bruja,
    Hooper,
    Slide,
    'emil-bote': EmilBote,
    'lnac-bote': LnacBote,
    'lapr-bote': LaprBote,
    'bono-bote': BonoBote,
    'elgr-bote': ElgrBote,
    'laqu-bote': LaquBote,
    'qgol-bote': QgolBote,
    'lotu-bote': LotuBote,
    'qupl-bote': QuplBote
  },
  created: function() {
    const vm = this
    vm.carrusel()
  },
  data: function() {
    return {
      emilbote: {},
      lnacbote: {},
      laprbote: {},
      bonobote: {},
      elgrbote: {},
      laqubote: {},
      qgolbote: {},
      lotubote: {},
      quplbote: {},
      hooperSettings: {
        //https://baianat.github.io/hooper/api.html#props
        itemsToShow: 1.2,
        centerMode: true,
        vertical: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 2500,
        hoverPause: false
      }
    }
  },
  methods: {
    carrusel: function() {
      const vm = this
      fetch('https://loterialaveleta.com/botes/damebotes')
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          vm.$data.emilbote = data.data.emil
          vm.$data.lnacbote = data.data.lnac
          vm.$data.laprbote = data.data.lapr
          vm.$data.bonobote = data.data.bono
          vm.$data.elgrbote = data.data.elgr
          vm.$data.laqubote = data.data.laqu
          vm.$data.qgolbote = data.data.qgol
          vm.$data.lotubote = data.data.lotu
          vm.$data.quplbote = data.data.qupl
        })
    }
  },
  mounted() {},
  updated() {
    this.$refs.carrusel.update()
  }
}
</script>
