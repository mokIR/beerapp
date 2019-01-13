<template>
  <div class="grid-container">
    <div class="brewer-back-button">
      <router-link to="/">Random Beer >></router-link>
    </div>
    <header class="brewer-info" v-if="brewerInfo.name && brewerInfo.established">
      <h2>{{brewerInfo.name}}, since {{brewerInfo.established}}</h2>
    </header>
    <div class="brewer-img">
      <img v-bind:src="brewerInfo.images.medium" /> 
    </div>
    <section class="brewer-description">
      {{brewerInfo.description}}
    </section>
  </div>
</template>

<script>
import beerApi from '../api/beer';

export default {
  props: {
  },
  data() {
    return {
      brewerInfo: {
        name: '',
        established: '',
        images: {
          medium: ''
        }
      }
    }
  },
  async created () {
    try {
      //get beer info
      const brewerInfoReturned = await beerApi.getBrewery(this.$route.params.id);
      this.brewerInfo = brewerInfoReturned.data;
    }
    catch(err){
      //err
    }
  }

}
</script>

<style lang="scss">

@import "../style/brewery/widescreen.scss";
@import "../style/brewery/smallscreen.scss";
@import "../style/base/buttons.scss";

.banner-header {
  text-transform: capitalize;
}

.grid-container {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  width: 80vw;
  height: 50vh;
  padding:20px;
  color: black;
  padding: 60px 0px 0px 60px;
}

</style>