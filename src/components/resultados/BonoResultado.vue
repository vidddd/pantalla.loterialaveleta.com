<template>
  <table class="table-resultados bono">
    <caption>BONOLOTO</caption>
    <tr v-for="(bono, index) in bonos" :key="index">
      <td>
        <span class="dia-sorteo">{{ bono.dia_semana }} {{ bono.dia }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola1 }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola2 }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola3 }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola4 }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola5 }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.bola6 }}</span>
      </td>
      <td class="complementario">
        <span>{{ bono.complementario }}</span>
      </td>
      <td class="circulo">
        <span>{{ bono.reintegro }}</span>
      </td>
    </tr>
  </table>
</template>



<script>
export default {
  props: {
    bonos: {
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
    dameComp: function(combinacion) {
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