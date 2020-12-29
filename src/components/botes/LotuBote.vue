<template>
  <article>
    <div class="card lotu">
      <div class="row">
        <div class="col">
          <img alt="lototurf" src="@/assets/images/logos/lototurf.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="lotubote.premio_bote">{{ lotubote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ lotubote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    lotubote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
