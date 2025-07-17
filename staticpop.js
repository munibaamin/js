class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME:${this.username}`);
    }
    static creatId(){
        return `123`
    }
}
const hitesh = new User("hitesh")
console.log(hitesh.creatId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.creatId());
