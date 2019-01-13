'use strict';

import axios from 'axios';


const corsSolutionPrefix = "https://cors-anywhere.herokuapp.com";
const beerServiceUrl = "http://api.brewerydb.com/v2";
const keyField = "key=a5c1b917e7ba62dcd79f434ed73bc72d";

const beerServiceApi = {};

const urlBuilder = (endpoint)=> {
  return `${corsSolutionPrefix}/${beerServiceUrl}${endpoint}${keyField}`;
};

beerServiceApi.getRandomBeer = async ()=> {
  try {
    const result = await axios.get(urlBuilder("/beer/random/?withBreweries=Y&hasLabels=Y&"));
    return result.data;
  } 
  catch(err){
    return err;
  }
};

beerServiceApi.getLabel = async (beerId)=> {
  try {
    const result = await axios.get(urlBuilder(`/beers/?beerId=${beerId}&`));
    return result.data;
  }
  catch (err){
    return err;
  }
};

beerServiceApi.getBrewery = async (breweryId)=> {
  try {
    const result = await axios.get(urlBuilder(`/brewery/${breweryId}/?`));
    return result.data
  }
  catch(err){
    return err;
  }
};


export default beerServiceApi;