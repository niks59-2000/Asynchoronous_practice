// let getCountryInfo=async function(){
//     let response=await fetch('https://restcountries.com/v3.1/name/usa');
//     let data=await response.json();
//     console.log(response);
//     console.log(data);
// }
// getCountryInfo();
// console.log('Main thread executing');
// console.log(getCountryInfo());


// rewrite same code in last lecture

let div=document.querySelector('.display');

function displayCountry(countryData){
    let html=`
    <div class="country">
    <div><img src="${countryData.flags.png}"></div>
    <h1>${countryData.name.common}</h1>
    <p>${countryData.region}</p>
    <p>Population:${(((countryData.population)/1000000).toFixed(2))}M</p>
    <p>Languages:${Object.values(countryData.languages)}</p>
    <p>${Object.values(countryData.currencies).map(currency=>currency.name)}</p>
    </div>
    `
    div.insertAdjacentHTML('beforeend',html);
}
let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
        resolve,reject);
    })
}
let displayUserCountry=async function(){
    let position=await getPosition();
    let {latitude:lat,longitude:lng}=position.coords;

    let geoResponse=await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
    let geoData=await geoResponse.json();

    let countryResponse=await fetch('https://restcountries.com/v3.1/name/'+geoData.address.country)
    let countryData=await countryResponse.json();

    displayCountry(countryData[0]);
    console.log(countryData[0]);
}

displayUserCountry();