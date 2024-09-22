// Callback queue vs microtask queue

// console.log('Program stared');
// setTimeout(function(){
//     console.log('settimeout executed')
// },0)
// Promise.resolve('Resolved promise data')
// .then(function(response){
//     console.log(response);
// })
// console.log('Program ends here');



console.log('Good Morning user!');
setTimeout(function(){
    console.log('Hello World');
},2000);
console.log('Have a nice day!');
fetch('data.txt')
.then(function(response){
    console.log(response);
})

