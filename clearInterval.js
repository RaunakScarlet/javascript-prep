console.log('start');

let intervalId;
let counter = 0;
 intervalId = setInterval(() => {
    counter++;
    if (counter >= 5) clearInterval(intervalId);
    else console.log("hello");
}, 2000);