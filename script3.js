function getCountry(country){
    let div=document.querySelector('.display');
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+country,true);
    xhr.send();

    xhr.addEventListener('progress',function(){
        div.textContent='Loading...';
    })
    xhr.addEventListener('load',function(){
        div.textContent='';
        let [data]=JSON.parse(xhr.responseText);
        console.log(data);
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
    })
}
getCountry('usa');
// getCountry('brazil');
// getCountry('germany');