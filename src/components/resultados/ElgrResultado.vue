<template>
  <table class="table-resultados elgr">
    <caption>EL GORDO DE LA PRIMITIVA</caption>
    <tr v-for="(elgr, index) in elgrs" :key="index">
      <td>
        <span class="dia-sorteo">{{ elgr.dia_semana }} {{ elgr.dia }}</span>
      </td>
      <td class="circulo">
        <span>{{ elgr.bola1 }}</span>
      </td>
            <td class="circulo">
        <span>{{ elgr.bola2 }}</span>
      </td>
            <td class="circulo">
        <span>{{ elgr.bola3 }}</span>
      </td>
            <td class="circulo">
        <span>{{ elgr.bola4 }}</span>
      </td>
            <td class="circulo">
        <span>{{ elgr.bola5 }}</span>
      </td>
      <td></td>
      <td class="clave circulo">
        <span>{{ elgr.clave }}</span>
      </td>
    </tr>
  </table>
</template>


<script>
export default {
  props: {
    elgrs: {
      //type: Object,
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
    dameClave: function(combinacion) {
      let comp = combinacion.match(/\((.*?)\)/g, '')
      return comp[0].replace(/[{()}]/g, '')
    }
  }
}
</script>