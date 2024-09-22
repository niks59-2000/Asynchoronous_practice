// helper function

let getData=function(url,error="something went wrong"){
    return fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error(`${error} ${response.status}`)
        }
        return response.json();
    })
}

// let getCountryInfo=async function(){
//     let [usa]=await getData('https://restcountries.com/v3.1/name/usa');
//     let [brazil]=await getData('https://restcountries.com/v3.1/name/brazil');
//     let [germany]=await getData('https://restcountries.com/v3.1/name/germany');
//     console.log(usa.name.common,usa.capital)
//     console.log(brazil.name.common,brazil.capital)
//     console.log(germany.name.common,germany.capital)
// }
// getCountryInfo();

// one issue we are using await in every line

let getCountryInfo=async function(){
    let data=await Promise.all([getData('https://restcountries.com/v3.1/name/usa'),getData('https://restcountries.com/v3.1/name/brazil'),getData('https://restcountries.com/v3.1/name/germany')]);
    console.log(data);
    console.log(data.map(x=>x[0].name.common+' '+x[0].capital));
}
getCountryInfo();

// all() is used to make several ajax calls in parallel



