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
function makeAjaxRequest(country){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+country,true);
    xhr.send();
    return xhr;
}
function getCountry(){
    let req1=makeAjaxRequest('usa');
    req1.addEventListener('load',function(){
        let[data]=JSON.parse(req1.responseText);
        displayCountry(data);
        let req2=makeAjaxRequest('brazil');
        req2.addEventListener('load',function(){
            let[data]=JSON.parse(req2.responseText);
            displayCountry(data);
            let req3=makeAjaxRequest('germany');
            req3.addEventListener('load',function(){
                let[data]=JSON.parse(req3.responseText);
                displayCountry(data); 
        })
    })
    })
}
getCountry();