let div=document.querySelector('.display');
document.getElementById('btn').addEventListener('click',getCountry);
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
function checkResponse(response){
    if(!response.ok){
        throw new Error(`Country not found(${response.status})`)
    }
    return response;
}

function getCountry(){
    fetch('https://restcountries.com/v3.1/name/usa')
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/abc')
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/germany')
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
    })
    .catch(function(error){
        console.log(error);
        div.insertAdjacentText('beforeend',`Something went wrong.Error Msg:${error.message}.Please try again later`);
    })
    .finally(function(){
        console.log('Hey,This is Pixi. How can i help you');
    })
}
