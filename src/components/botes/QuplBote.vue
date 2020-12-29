<template>
  <article>
    <div class="card qupl">
      <div class="row">
        <div class="col">
          <img alt="Quintuple Plus" src="@/assets/images/logos/quintuple.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="quplbote.premio_bote">{{ quplbote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ quplbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    quplbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
