//function expression.
let sayHi = function(name){
    console.log(`hello ${name}`);
};
sayHi("john");//if you keep this above we get error because function expression will execute only when it reaches it

console.log(".........................");


//function declaration.
function sayHello(name){
    console.log(`hello ${name}`);
}

sayHello("carol");