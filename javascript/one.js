const myObj = {
    [Symbol('privateProperty')]: 'This is a private property',
    publicProperty: 'This is a public property',
    [Symbol('privateMethod')]() {
      console.log('This is a private method');
    },
    publicMethod() {
      console.log('This is a public method');
    }
  };
  
  console.log(myObj.publicProperty); // 'This is a public property'
  console.log(myObj.publicMethod()); // 'This is a public method'
  console.log(myObj[Symbol('privateProperty')]); // undefined
  console.log(myObj[Symbol('privateMethod')]()); // TypeError: myObj[Symbol(...)] is not a function
  