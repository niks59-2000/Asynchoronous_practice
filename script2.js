document.getElementById('btn').addEventListener('click',getProducts);

function getProducts(){
    let div=document.querySelector('.display');
    let xhr=new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.send();

    // when data is not completely loaded yet
    xhr.addEventListener('progress',function(){ 
        div.textContent='loading...';
    })
    xhr.addEventListener('load',function(){
        console.log(xhr.responseText);
        div.textContent='';
        // convert JSON to JS object
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        data.forEach(function(elem){
            let html=`
            <div class="album">
                <div class="card">
                    <h2 class="title">${elem.title}</h2>
                    <p class="artist"><i>${elem.artist}</i></p>
                    <div class="img"><img src="${elem.artwork}"></div>
                    <div class="url">
                    <audio controls>
                        <source src="${elem.url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                </div>
            </div>
            `
            div.insertAdjacentHTML('beforeend',html);
        })
    })
}