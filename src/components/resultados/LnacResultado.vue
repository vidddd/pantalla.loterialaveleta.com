<template>
  <table class="table-resultados lnac">
    <caption>LOTERIA NACIONAL</caption>
    <tr v-for="(lnac, index) in lnacs" :key="index">
      <td>
        <div class="row">
          <div class="col">
            <p class="nombre-sorteo">{{ lnac.nombre }}</p>
            <p>
              <img class="image-block" v-bind:src="lnac.decimo_url" />
            </p>
          </div>
          <div class="col">
            <p class="primerpremio">Primer premio</p>
            <p class="premio">{{ lnac.primerpremio }}</p>
            <p class="primerpremio">Segundo premio</p>
            <p class="premio">{{ lnac.segundopremio }}</p>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    lnacs: {
      //type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
