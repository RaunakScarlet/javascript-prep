function greetings(name,logGreetings) {
    let msg = "Hello " + name;
    logGreetings(msg);
}
function logGreetings(msg) {
    console.log(msg);
}

greetings("Raunak",logGreetings)