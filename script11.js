// navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     error=>console.log(error)
// );

// promisfying geolocation API

/*
let getPosition= function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            position=>console.log(position),
            error=>console.log(error)
        )
    })
}

getPosition();
*/

// let getPosition=function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(
//             resolve,reject
//         )
//     })
// }

// getPosition()
// .then(function(position){
//     console.log(position)
// })
// .catch(function(error){
//     console.log(error.message)
// })

let div=document.querySelector('.display');

function displayCountry(data){
    let html=`
    <div class="country">
    <div><img src="${data.flags.png}"></div>
    <h1>${data.name.common}<-/h1>
    <p>${data.region}</p>
    <p>Population:${(((data.population)/1000000).toFixed(2))}M</p>
    <p>${Object.values(data.languages)}</p>
    <p>${Object.values(data.currencies).map(currency=>currency.name)}</p>
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
getPosition()
.then(pos=>{
    let{latitude:lat,longitude:lng}=pos.coords;
    console.log(lat,lng);
    return fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
})
.then(function(response){
    console.log(response);
    return response.json();
    // returns actual data of response object
})
.then(function(data){
    console.log(data);
    return fetch('https://restcountries.com/v3.1/name/'+data.address.country)
})
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
    displayCountry(data[0]);
})
.catch(err=>{
    console.log(err.message);
})