// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("don't have user email");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


/***** Falsey Values *****/ 
// false,0,-0,BigInt 0n,"",null,undefined,NaN //
/***** Truthy Values *****/ 
// "0",'false'," ",[],{},function(){}

// const myObj = {}
// if (Object.keys(myObj).length === 0) {
//     console.log("object is empty"); 
// }

// Nulish coalescing Operator (??):null undefined

// let val1;
// val1 = 5 ?? 11
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1);

// ternary operator
// ccondition ? true:false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

