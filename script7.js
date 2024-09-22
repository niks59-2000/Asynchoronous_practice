let div=document.querySelector('.display');

function displayCountry(data){
    let html=`
    <div class="country">
    <div><img src="${data.flags.png}"></div>
    <h1>${data.name.common}</h1>
    <p>${data.region}</p>
    <p>Population:${(((data.population)/1000000).toFixed(2))}M</p>
    <p>${Object.values(data.languages)}</p>
    <p>${Object.values(data.currencies).map(currency=>currency.name)}</p>
    </div>
    `
    div.insertAdjacentHTML('beforeend',html);
}

function getCountry(){
    fetch('https://restcountries.com/v3.1/name/usa')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/brazil')
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/germany')
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
    })
}

getCountry();