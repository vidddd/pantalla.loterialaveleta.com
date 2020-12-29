<template>
  <table class="table-resultados lotu">
    <caption>LOTOTURF</caption>
    <tr v-for="(lotu, index) in lotus" :key="index">
      <td>
        <span class="dia-sorteo">{{ lotu.dia_semana }} {{ lotu.dia }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola1 }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola2 }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola3 }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola4 }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola5 }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.bola6 }}</span>
      </td>
      <td class="caballo">
        <span>{{ lotu.caballo }}</span>
      </td>
      <td class="circulo">
        <span>{{ lotu.reintegro }}</span>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    lotus: {
      default: function() {
        return []
      }
    }
  },
  methods: {
    dameNumeros: function(combinacion) {
      let numeros = combinacion.split('-')
      let num = numeros.slice(0, 6)
      num[5] = num[5].substring(0, 3)
      return num
    },
    dameCaballo: function(combinacion) {
      let comp = combinacion.match(/\((.*?)\)/g, '')
      let num = comp[0].replace(/[{()}]/g, '')
      return num.toString()
    },
    dameRein: function(combinacion) {
      let comp = combinacion.match(/\((.*?)\)/g, '')
      let num = comp[1].replace(/[{()}]/g, '')
      return num.toString()
    }
  }
}
</script>