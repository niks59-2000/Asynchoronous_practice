// let promise=new Promise(function(resolved,rejected){
//     console.log('executer function executed!');
// })
// console.log(promise);


/* 
let promise=new Promise(function(resolved,rejected){
    console.log('Executer function executed');
    resolved('resolved data executed');
    // rejected('something went wrong');
})
console.log(promise);
*/

// producing code
let div=document.querySelector('.display');
let promise=new Promise(function(resolved,rejected){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','data.txt',true);
    xhr.send();
    xhr.onload=function(){
        if(xhr.statusText==='OK'){
            resolved(xhr.responseText);  

        }else{
            rejected('something went wrong.Please try again later');
        }
    }
})

// consuming code
promise.then(function(data){
    console.log(data);
})
promise.catch(function(err){
    console.log(err);
})