function sayMyName() {
    console.log("M");
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("B");
    console.log("A");  
}

sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,6)

function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // console.log("Muniba");
    // return result
    // return number1 + number2
}
const result = addTwoNumbers(4,6)
// console.log("Result: " ,result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
