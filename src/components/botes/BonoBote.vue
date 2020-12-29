<template>
  <article>
    <div class="card bono">
      <div class="row">
        <div class="col">
          <img alt="Bonoloto" src="@/assets/images/logos/bonoloto.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="bonobote.premio_bote">{{ bonobote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ bonobote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    bonobote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
