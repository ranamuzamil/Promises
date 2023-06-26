
//         what is asynchronous in javascript

//             Asynchronous programming in JavaScript enables tasks to be performed concurrently without
//             blocking the main program's execution


setTimeout(function() {
    console.log('I am an asynchronous message');
}, 5000);

console.log('I am a synchronous message');