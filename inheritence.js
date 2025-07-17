// class User {
// constructor(username){
//     this.username = username
// }
// logMe(){
//     console.log(`Username is ${this.username}`);
// }
// }
// class Teacher extends User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new course added by ${this.username}`);
//     }
// }
// const Chai = new Teacher ("chai","chai@teacher.com","123")
// Chai.logMe()
// const masalaChai = new User("masalaChai")
// masalaChai.logMe()
// console.log(Chai instanceof Teacher);

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new user is added by ${this.username}`);
    }
}

const Chai = new Teacher("chai","chai@teacher.com","123")
Chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
console.log(Chai instanceof Teacher)