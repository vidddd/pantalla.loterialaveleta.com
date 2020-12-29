<template>
  <table class="table-resultados laqu">
    <caption>QUINIELA</caption>
    <tr>
        <td class="center">Jornada: {{ laqu.jornada }}</td>
        <td class="center">{{ laqu.dia_semana }}  {{ laqu.dia }}</td>
    </tr>
    <tr>
      <td colspan="2">
        <table class="table-futbol">
          <tbody>
            <tr v-for="(partido, index) in partidoslaqu" :key="index">
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
export default {
  props: {
    partidoslaqu: {
      default: function() {
        return []
      }
    },
    laqu: {
      default: function() {
        return []
      }
    }
  }
}
</script>
