function sum(a, b) {
   console.log("pro");
   console.log("stack");
   
    return a + b;//return should be at last or else what ever is ther after return those will not execute.
    console.log("this is sud");
  }
  
  let result = sum(1, 2);
  console.log(result ); // 3