/* eslint-disable */
<template>
  <table class="table-resultados qgol">
    <caption>QUINIGOL</caption>
        <tr>
        <td class="center">Jornada: <strong>{{ qgol.jornada }}</strong></td>
        <td class="center">{{ qgol.dia_semana }} {{ qgol.dia }}</td>
    </tr>
    <tr>
      <td colspan="2">
        <table class="table-futbol">
          <tbody>
            <tr v-for="(partido, index) in partidosqgol" :key="index">
              <td>{{ partido.local }}</td>
              <td>{{ partido.visitante }}</td>
              <td class="center">{{ partido.signo }}</td>
              <td class="center">{{ partido.marcador }}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    partidosqgol: {
      default: function() {
        return []
      }
    },
    qgol: {
      default: function() {
        return []
      }
    }
  }
}
</script>

