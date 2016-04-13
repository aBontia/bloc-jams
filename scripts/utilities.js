function forEach(text, callback) {
    console.log(text);
    callback();
}

function myCallback() {
    console.log("world!");
}

myFunction("Hello", myCallback);
