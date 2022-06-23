//now we will be basically rendering the contents(data) buy using the API's over here.

// import axios from "axios";

// export const baseUrl="bayut.p.rapidapi.com";


// export const fetchApi = async(url) => 
// {
//     //Implementation of fetchApi function 
//     //destructing of the rendered data
//     const {data} = await axios.get((url),{
//      headers: {
//     'X-RapidAPI-Key': 'cabf0421dfmsh75041fb28b5d307p1451a1jsnae33bd610c2e',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
//     });
//     return data;
// } 

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'cabf0421dfmsh75041fb28b5d307p1451a1jsnae33bd610c2e',
    },
  });
    
  return data;
}