// const tinderUser = Object ()
// console.log(tinderUser); //singelton

// constructor //
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "muniba@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Muniba",
            lastname : "Amin"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"muniba@gmail.com"
    },
    {
        id:1,
        email:"muniba@gmail.com"
    },
    {
        id:1,
        email:"muniba@gmail.com"
    },
    {
        id:1,
        email:"muniba@gmail.com"
    },    
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));























