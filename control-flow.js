// if //
// const isUserLoggedIn = true
// const temprature = 41

// if ( temprature === 40){
//     console.log("less than 50");
// }
// else {
//     console.log("temprature is greater than 50");
// }
// console.log("temprature is greater than 50");

// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`userpower: ${power}`);
    
// }
//  console.log(`userpower: ${power}`); // not access out of if 

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromgoogle = true
const loggedInFromEmail = true
 
if (isUserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy new course");
}
if (loggedInFromgoogle || loggedInFromEmail) {
    console.log("User Logged IN");
}