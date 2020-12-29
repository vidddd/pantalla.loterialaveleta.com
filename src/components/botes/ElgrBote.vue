<template>
  <article>
    <div class="card elgr">
      <div class="row">
        <div class="col">
          <img alt="El Gordo de la Primitiva" src="@/assets/images/logos/gordo.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum" v-if="elgrbote.premio_bote">{{ elgrbote.premio_bote | formatBote }}</div>
          <div class="botenum" v-else>
            <span>No hay bote</span>
          </div>
          <div class="cuenta-atras">
            <span>{{ elgrbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    elgrbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
