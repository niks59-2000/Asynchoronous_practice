// let x=100;
// const y='hello';
// y=10;
// console.log('Have a nice day');

try{
    let x=100;
    const y='hello';
    y=10;
}
catch(err){
    console.log('Error:'+err.message);
}
console.log('Have a nice day');

// error handling with async and await

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
// let getCountryinfo=async function(){
//     let response=await fetch('https://restcountries.com/v3.1/name/usa');
//     let data=await response.json();
//     displayCountry(data[0]);
//     console.log(data);
// }

/* 

let getCountryinfo=async function(){
    try{
        let response=await fetch('https://restcountries.com/v3.1/name/usa');
            let data=await response.json();
            displayCountry(data[0]);
            console.log(data);
    }catch(err){
        console.log('Error occurred:'+err.message);
    }
}
*/

// instead of this

let getCountryinfo=async function(){
        let response=await fetch('https://restcountries.com/v3.1/name/usa');
            let data=await response.json();
            displayCountry(data[0]);
            console.log(data);
}

document.getElementById('btn').addEventListener('click',function(){
    getCountryinfo()
    .catch(err=>{
        console.log('Error:'+err.message)
    });
});

// instead of button 

// getCountryinfo()
// .catch(err=>{
//     console.log('error:'+err.message);
//     div.insertAdjacentText('beforeend',`something went wrong.Error:${err.message}.Please try again later`)
// })