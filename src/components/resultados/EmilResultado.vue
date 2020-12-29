<template>
  <table class="table-resultados emil">
    <caption>EUROMILLONES</caption>
    <tr v-for="(emil, index) in emils" :key="index">
      <td>
        <span class="dia-sorteo">{{ emil.dia_semana }} {{ emil.dia }}</span>
      </td>
      <td class="circulo">
        <span>{{ emil.bola1 }}</span>
      </td>
            <td class="circulo">
        <span>{{ emil.bola2 }}</span>
      </td>
            <td class="circulo">
        <span>{{ emil.bola3 }}</span>
      </td>
            <td class="circulo">
        <span>{{ emil.bola4 }}</span>
      </td>
            <td class="circulo">
        <span>{{ emil.bola5 }}</span>
      </td>
      <td>
        <span class="star">{{ emil.estrella1 }}</span>
      </td>
            <td>
        <span class="star">{{ emil.estrella2 }}</span>
      </td>
    </tr>
  </table>
</template>


<script>
export default {
  props: {
    emils: {
      default: function() {
        return []
      }
    }
  },
  methods: {
    dameNumeros: function(combinacion) {
      let numeros = combinacion.split('-')
      let num = numeros.slice(0, 5)
      return num
    },
    dameEstrellas: function(combinacion) {
      let numeros = combinacion.split('-')
      let num = numeros.slice(5, 7)
      return num
    }
  }
}
</script>