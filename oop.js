// object litrals //
// const user = {
//     username:"Muniba",
//     loginCount : 8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details for database");
//         // console.log(`username is:${this.username}`);
//         // return `username is:${this.username}`
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Contructor Function //
function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Muniba",12,true)
const userTwo = new User("Chai aur code",13,false)
console.log(userOne.constructor);
console.log(userTwo);

