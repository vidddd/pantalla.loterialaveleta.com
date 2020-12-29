<template>
  <article>
    <div class="card lanc">
      <div class="row">
        <div class="col">
          <img alt="Loteria Nacional" src="@/assets/images/logos/loteria.svg" />
        </div>
        <div class="col-md-auto">
          <div class="botenum">{{ lnacbote.tenthPrice }}00.000 €</div>
          <span>Primer premio a la serie</span>
          <div class="cuenta-atras">
            <span>{{ lnacbote.dia_semana }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    lnacbote: {
      type: Object,
      default: function() {
        return []
      }
    }
  }
}
</script>
