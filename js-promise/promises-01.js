// Promises are used in async js that will fulfilled once the current operation is done , promise is a object

const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task , like DB calls , cryptography , network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promised Consumed");
    
})
