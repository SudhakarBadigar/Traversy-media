let a ;
let b ;
result = (a !== null && a !== undefined) ? a : b;
console.log(result);
console.log("..................");
let height= 10;
console.log(100 ?? height);
console.log("............");
let height1 = null ;
let width = null;

// important: use parentheses
let area = (height1 ?? 100) * (width ?? 50);


console.log(area); // 5000