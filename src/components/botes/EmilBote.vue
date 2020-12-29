<template>
  <article>
    <div class="card emil">
      <div class="row">
        <div class="col">
          <img alt="Euromillones" src="@/assets/images/logos/euromillones.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="emilbote.premio_bote">{{ emilbote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ emilbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    emilbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
