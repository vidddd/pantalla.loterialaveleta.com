<template>
  <table class="table-resultados qupl">
    <caption>QUINTUPLE PLUS</caption>
    <tr v-for="(qupl, index) in qupls" :key="index">
      <td>
        <span class="dia-sorteo">{{ qupl.dia_semana }}  {{ qupl.dia }}</span>
      </td>
      <td class="circulo">
        <span>{{ qupl.bola1 }}</span>
      </td>
      <td class="circulo">
        <span>{{ qupl.bola2 }}</span>
      </td>
      <td class="circulo">
        <span>{{ qupl.bola3 }}</span>
      </td>
      <td class="circulo">
        <span>{{ qupl.bola4 }}</span>
      </td>
      <td class="circulo">
        <span>{{ qupl.bola5 }}</span>
      </td>
      <td></td>
      <td class="circulo">
        <span>{{ qupl.bola6 }}</span>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    qupls: {
      default: function() {
        return []
      }
    }
  },
  methods: {
    dameNumeros: function(combinacion) {
      let numeros = combinacion.split('-')
      let num = numeros.slice(0, 5)
      num[4] = num[4].substring(0, 3)
      return num
    },
    dameCaballo: function(combinacion) {
      let comp = combinacion.match(/\((.*?)\)/g, '')
      let num = comp[0].replace(/[{()}]/g, '')
      return num.toString()
    }
  }
}
</script>
