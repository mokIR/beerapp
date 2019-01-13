<template>
  <div class="grid-container">
    <!-- viewport etc. for chrome emulation purpose only -->
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <header class="grid-item banner-header">
      the random beer app <button v-on:click="retrieveRandomBeer()">show another beer</button>
    </header>
    <aside class="grid-item image-container">
      <img v-bind:src="pageData.beerLabel.medium" /> 
    </aside>
    <section class="grid-item grid-one">     
      <router-link :to="{path: '/brewery/'+ pageData.breweryInfo[0].id } ">{{pageData.beerData.nameDisplay}}</router-link> 
    </section>
    <section class="grid-item grid-two">
      {{pageData.beerData.style.description}}
    </section>
  </div>
</template>

<script>

const defaultData = {
  beerData: {
    randomBeerData: {
      nameDisplay: '',
    },
    style: {
      description: '',
    },
  },
  beerLabel: {
    small: '',
    medium: '',
    large: '',
  },
  breweryInfo: [{id: 0}],
};

import beerApi from '../api/beer';

export default {
  name: 'RandomBeer',
  data() {
    return {
      pageData: {
        beerData: {
          randomBeerData: {
            nameDisplay: '',
          },
          style: {
            description: '',
          },
        },
        beerLabel: {
          small: '',
          medium: '',
          large: '',
        },
        breweryInfo: [{id: ''}],
      } 
    };
  },
  methods: {
    loadDefaultPageData() {
      this.pageData.beerData = defaultData;
    },
    async retrieveRandomBeer() {
      this.pageData.beerLabel.medium = "";
      try{
        //get random beer info
        let randomBeerData = await beerApi.getRandomBeer();
        this.pageData.breweryInfo = randomBeerData.data.breweries;
        this.pageData.beerData = randomBeerData.data;
        //get array of pictures associated with beer
        let labelData = await beerApi.getLabel(randomBeerData.data.id);
        this.pageData.beerLabel.medium = labelData.data.labels.contentAwareMedium;
      }
      catch(err){
        //err
      }
      
    },
  },
  created() {
    this.retrieveRandomBeer();
  },
  
}
</script>

<style lang="scss" scoped>

@import "../style/randombeer/widescreen.scss";
@import "../style/randombeer/smallscreen.scss";

.grid-container {
  display: grid;
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  width: 80vw;
  height: 80vh;
  padding:20px;
  color: black;
  padding: 60px 0px 0px 60px;
}

</style>
