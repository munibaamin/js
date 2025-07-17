
myArray = ["M","U","N","I","B","A"]
console.log(myArray[1]);

const mySym = Symbol("key1")

const JsUser = {
    name:"Muniba",
    "full name" : "Muniba Amin",
    age :18,
    [mySym] : "mykey1",
    location: "Haripur",
    email :"muniba@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);    
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "muniba@google.com"
// Object.freeze(JsUser)
JsUser.email = "Muniba@Micro.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








