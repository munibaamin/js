//*********This Function*********//
const user = {
    username : "Muniba",
    age : 19,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Muniba"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Muniba"
//     console.log(this.username);
// }
// chai()

// const chai =  () => {
//     let username = "Muniba"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1,num2) => {
    // return num1 + num2 
// }
// console.log(addTwo(1,2));

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(1,2));

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(1,4));

// const addTwo = (num1, num2) => ({username:"Muniba"})
// console.log(addTwo());

