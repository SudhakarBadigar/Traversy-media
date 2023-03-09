let x = null;
let y ;
console.log(x);
console.log(y);
console.log(typeof(x));
console.log(typeof(y));
//concatination
let name1 = 'javascript';
let age = new Date().getFullYear() - 1995 // new Date() - new Date('january 1, 1995');
console.log(age);
console.log("my name is " + name1 + " and i am " + age + " year old" )

//template string
console.log(`my name is ${name1} and i am ${age} years old`);

const hello = `my name is ${name1}`;
console.log(hello);

// == and ===

let str1 = 23;
let str2 ="23";
console.log(str1 == str2);//it checks the value but not data type
console.log(str1 === str2);// it checks the value and the data type if both are same only then it gives true.

//strings

let city1 = "Bangalore";
let city2 = "New Orleans";
let city3 = "London";
let city4 = "Sydney";

let str3 = "Hello \\World\""; // two lines using a "newline symbol"
console.log(str3);
// two lines using a normal newline and backticks
let str4 = `Hello
World`;

console.log(str3 == str4); // true
