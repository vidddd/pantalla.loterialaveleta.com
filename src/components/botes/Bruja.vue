<template>
  <div class="row">
     <div class="col">
         <div class="flip-card" v-bind:class="{ veleta: flipped }">
           <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="@/assets/images/laveleta-blanco.png" alt="" />
              </div>
              <div class="flip-card-back">
              </div>
          </div>
        </div> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'Bruja',
  data: function() {
    return {
      flipped: false
    }
  },
  mounted: function() {
    let self = this
    setInterval(function() {
      self.veleta()
    }, 25000)
  },
  methods: {
    veleta() {
      this.flipped = !this.flipped
      console.log(this.flipped)
    }
  }
}
</script>
