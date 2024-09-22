// synchoronous code

/*
let helloWorld=function(){
    console.log("Hello World");
}
let greetings=function(){
    console.log('Good Morning');
    helloWorld();
    console.log('Have a nice day');
}
greetings();
*/

/*
console.log('Program started');
alert('This a alert window');
console.log('Program ended');
*/


// Asynchoronous code

console.log('Program started');
setTimeout(function(){
    alert('This is an alert window');
    console.log('alert window displayed');
},3000);
console.log('Program ended');