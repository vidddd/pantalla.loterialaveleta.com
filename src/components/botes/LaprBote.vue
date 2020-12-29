<template>
  <article>
    <div class="card lapr">
      <div class="row">
        <div class="col">
          <img alt="La Primitiva" src="@/assets/images/logos/primitiva.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="laprbote.premio_bote">{{ laprbote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ laprbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    laprbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
