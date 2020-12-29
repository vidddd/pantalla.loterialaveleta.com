<template>
  <article>
    <div class="card laqu">
      <div class="row">
        <div class="col">
          <img alt="La Quiniela" src="@/assets/images/logos/quiniela.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="laqubote.premio_bote">{{ laqubote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ laqubote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    laqubote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
