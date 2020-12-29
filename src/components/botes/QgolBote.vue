/* eslint-disable */
<template>
  <article>
    <div class="card qgol">
      <div class="row">
        <div class="col">
          <img alt="Quinigol" src="@/assets/images/logos/quinigol.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="qgolbote.premio_bote">{{ qgolbote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ qgolbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    qgolbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
