<template>
    <div>
        <div>
  <b-card
    :title="city.name"
  >
    <b-card-text >
      Qualité de l'air : {{city.iqa}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
    </div>
</template>

<script>
    export default {
        props:{
            city:{
                type:Object,
                default:null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>