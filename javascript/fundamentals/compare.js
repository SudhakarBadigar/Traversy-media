console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
let a2 = 1;
console.log( 2 != 1 ); // true (correct)
console.log('BEE' == 'BEE');
console.log('a' > 'A');
console.log(".........................");
console.log( 5 > 4);//true
console.log("apple" > "pineapple");//false
console.log("2" > "12");//true (dictionary comparision 2 comes after 1 hence 2 is greater than 1)
console.log(undefined == null);//true(only null is equal to undefined not for any other value)
console.log(undefined === null);//false(strict equality)
console.log(null == "\n0\n");//false(except undefined null is not equal to any other value)
console.log(null === +"\n0\n");//false(differnt type strict equality hence false)
console.log(null === null);