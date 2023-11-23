const fs = require('fs');
 
console.log("start");

fs.readFile('./txt1.txt', cb1);
function cb1(err,data) {
    if (err) {
        console.log(err);
    } else {
         console.log("i an from txt1",data);
    }
    fs.readFile("./txt2.txt", cb2);
}

function cb2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("i an from txt2", data);
    }
    fs.readFile("./txt3.txt", cb3);
}

function cb3(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("i an from txt3", data);
    }
}
console.log("end");