<template>
  <table class="table-resultados lapr">
    <caption>LA PRIMITIVA</caption>
    <tr>
      <td>
        <table v-for="(lapr, index) in laprs" :key="index">
          <tr>
            <td>
              <span class="dia-sorteo">{{ lapr.dia_semana }} {{ lapr.dia }}</span>
            </td>
            <td class="circulo">
              <span>{{ lapr.bola1 }}</span>
            </td>
            <td class="circulo">
              <span>{{ lapr.bola2 }}</span>
            </td>
            <td class="circulo">
              <span>{{ lapr.bola3 }}</span>
            </td>
             <td class="circulo">
              <span>{{ lapr.bola4 }}</span>
            </td>
            <td class="circulo">
              <span>{{ lapr.bola5 }}</span>
            </td>
                        <td class="circulo">
              <span>{{ lapr.bola6 }}</span>
            </td>
            <td class="complementario">
              <span>{{ lapr.complementario }}</span>
            </td>
            <td class="circulo">
              <span>{{ lapr.reintegro }}</span>
            </td>
          </tr>
          <tr>
            <td colspan="6" style="padding-left: 280px;">
              <img
                src="@/assets/images/logos/LogoJoker.svg"
                alt="Joker de la Primitiva"
                class="imagejoker"
              />
            </td>
            <td colspan="3">
              <span class="joker">{{ lapr.joker }}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>



<script>
export default {
  props: {
    laprs: {
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
      let co = comp[0].replace(/[{()}]/g, '')
      return co
    },
    dameRe: function(combinacion) {
      let comp = combinacion.match(/\((.*?)\)/g, '')
      return comp[1].replace(/[{()}]/g, '')
    }
  }
}
</script>
